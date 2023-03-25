
function rand_str_without_O0() {
  const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
  var res = "";
  for(var i = 0; i < 10; i++) {
      var rnd = Math.floor(Math.random() * list.length);
      res = res + list.charAt(rnd);
  }
  return res;
}

function createPDF() {
  //YAAAA

  if (
    document.getElementById("order").value == "" &&
    document.getElementById("expedisi").value == "" &&
    document.getElementById("pengirim").value == "" &&
    document.getElementById("alamat").value == "" &&
    document.getElementById("barang").value == "" &&
    document.getElementById("resi").value == "" &&
    document.getElementById("barangtiga").value == "" &&
    document.getElementById("barangdua").value == "" &&
    document.getElementById("nopes").value == "" &&
    document.getElementById("cash").value == ""
  ) {
    alert("isi kabeh broo");
  } else {
    var doc = new jsPDF("p", "pt", [283.464566929, 340.157480315]);

    //=============header========================
    
    


    




   

    doc.setFontSize(10);
    doc.text(document.getElementById("pengirim").value, 85, 157);
    //  doc.text(10, 55, 'penerima');
    // doc.text(document.getElementById("alamat").value, 40, 185);
    doc.text(document.getElementById("barang").value, 40, 285);
    doc.text(document.getElementById("barangdua").value, 40, 300);
    doc.text(document.getElementById("barangtiga").value, 40, 315);
    //doc.text(document.getElementById("ref").value, 25, 118);


    var alamat = document.getElementById("alamat").value
    lines = doc.splitTextToSize(alamat, 150) //ini untuk panjang text
    doc.text(40, 85, lines) // ini untuk atur posisi text 1 dari kiri 1 dari atas


    //var inv = Math.random().toString(36).substr(2, 10);
    var inv = document.getElementById("nopes").value;
    //var invs = " " + inv;
    doc.text(200, 335, inv, null, "center");

    

    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    var dateTime = "" + time + " | " + date;
    //doc.text(205, 335, dateTime);
    var tang = today.getDate() +
      "" +
      (today.getMonth() + 1) +
      "" +
      today.getFullYear();



    doc.setFontSize(12);
    doc.setFontType("bold");
    doc.text(document.getElementById("order").value, 10, 20);
    doc.text(document.getElementById("expedisi").value, 135, 20, "center" );
    doc.text(document.getElementById("cash").value, 240, 20, "center");
    

    //==================kotak dua===============
    doc.setLineWidth(0.4);
    doc.setFontSize(10);
    doc.setFontType("bold");
    doc.rect(2, 1, 280, 337);
    doc.rect(4, 28, 133, 20); // kotak bawah header 1
    doc.rect(140, 28, 140, 20); // kotak bawah header 3
    //doc.text("Resi : ", 30, 42, null, null, "center");
    doc.text(document.getElementById("resi").value, 68, 42, 'center');
    

    var icsa = rand_str_without_O0();
    var noresi = (tang + icsa) 
    doc.text(158, 42, noresi, null,);


    doc.text("Pengirim : ", 55, 157, null, null, "center");
    doc.text("Penerima", 55, 170, null, null, "center");
    doc.text("Isi Produk :", 55, 270, null, null, "center");
    


    doc.line(2, 140, 337, 140); // garis isor duwure jam
    doc.line(2, 260, 337, 260); // garis isi produk
    doc.line(2, 325, 350, 325); // garis isi produk
    ///dotttttttttttt line 
    doc.setLineDash([1, 1.5, 1, 1.5, 1, 1.5]); //dot libe header 
    doc.line(2, 25, 337, 25); //this too
    doc.line(2, 52, 337, 52); //this too


    var ics = document.getElementById("resi").value;

    //BARCODEEEEEEEEEEEEEE
    JsBarcode("#barcode", "" + ics, {
      format: "CODE128",
      fontOptions: "bold",
      width: 3,
      displayValue: false
    });

    const img = document.querySelector("img#barcode");
    doc.addImage(img.src, "JPEG", 15, 55, 260, 80, "center");

    //doc.autoPrint();
    //doc.output("dataurlnewwindow");
    //doc
    // .output("dataurlnewwindow", { returnPromise: false })
    //  .then(alert("Udah Di Print??"));

    var namanya = ("Label-" + inv +"-"+ icsa + ".pdf");
    

    doc
      .save(namanya, {
        returnPromise: true,
      })
      .then(Swal.fire({
        title: "Label berhasil di download",
        text: "Silahkan cek folder download dengan nama file \n " + namanya ,
        icon: "success",
        button: "Siap!!",
      }));
  }
}





function printPDF() {
  //YAAAA

  if (
    document.getElementById("order").value == "" &&
    document.getElementById("expedisi").value == "" &&
    document.getElementById("pengirim").value == "" &&
    document.getElementById("alamat").value == "" &&
    document.getElementById("barang").value == "" &&
    document.getElementById("resi").value == "" &&
    document.getElementById("barangtiga").value == "" &&
    document.getElementById("barangdua").value == "" &&
    document.getElementById("nopes").value == "" &&
    document.getElementById("cash").value == ""
  ) {
    alert("isi kabeh broo");
  } else {
    var doc = new jsPDF("p", "pt", [283.464566929, 340.157480315]);

    //=============header========================
    
    


    




   

    doc.setFontSize(10);
    doc.text(document.getElementById("pengirim").value, 85, 157);
    //  doc.text(10, 55, 'penerima');
    doc.text(document.getElementById("alamat").value, 40, 185);
    doc.text(document.getElementById("barang").value, 40, 285);
    doc.text(document.getElementById("barangdua").value, 40, 300);
    doc.text(document.getElementById("barangtiga").value, 40, 315);
    //doc.text(document.getElementById("ref").value, 25, 118);

    //var inv = Math.random().toString(36).substr(2, 10);
    var inv = document.getElementById("nopes").value;
    var invs = " " + inv;
    doc.text(200, 335, inv, null, "center");

    

    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    var dateTime = "" + time + " | " + date;
    //doc.text(205, 335, dateTime);
    var tang = today.getDate() +
      "" +
      (today.getMonth() + 1) +
      "" +
      today.getFullYear();



    doc.setFontSize(12);
    doc.setFontType("bold");
    doc.text(document.getElementById("order").value, 10, 20);
    doc.text(document.getElementById("expedisi").value, 135, 20, "center" );
    doc.text(document.getElementById("cash").value, 240, 20, "center");
    

    //==================kotak dua===============
    doc.setLineWidth(0.4);
    doc.setFontSize(10);
    doc.setFontType("bold");
    doc.rect(2, 1, 280, 337);
    doc.rect(4, 28, 133, 20); // kotak bawah header 1
    doc.rect(140, 28, 140, 20); // kotak bawah header 3
    //doc.text("Resi : ", 30, 42, null, null, "center");
    doc.text(document.getElementById("resi").value, 68, 42, 'center');
    

    var icsa = rand_str_without_O0();
    var noresi = (tang + icsa) 
    doc.text(158, 42, noresi, null,);


    doc.text("Pengirim : ", 55, 157, null, null, "center");
    doc.text("Penerima", 55, 170, null, null, "center");
    doc.text("Isi Produk :", 55, 270, null, null, "center");
    


    doc.line(2, 140, 337, 140); // garis isor duwure jam
    doc.line(2, 260, 337, 260); // garis isi produk
    doc.line(2, 325, 350, 325); // garis isi produk
    ///dotttttttttttt line 
    doc.setLineDash([1, 1.5, 1, 1.5, 1, 1.5]); //dot libe header 
    doc.line(2, 25, 337, 25); //this too
    doc.line(2, 52, 337, 52); //this too


    var ics = document.getElementById("resi").value;

    //BARCODEEEEEEEEEEEEEE
    JsBarcode("#barcode", "" + ics, {
      format: "CODE128",
      fontOptions: "bold",
      width: 3,
      displayValue: false
    });

    const img = document.querySelector("img#barcode");
    doc.addImage(img.src, "JPEG", 15, 55, 260, 80, "center");

    doc.autoPrint();
    doc.output("dataurlnewwindow");
    //doc
    // .output("dataurlnewwindow", { returnPromise: false })
    //  .then(alert("Udah Di Print??"));

    // doc .save("Label-" + inv + ".pdf", { returnPromise: true })
    // .then(alert("Silahkan Cek Download Folder"));
  }
}
  
