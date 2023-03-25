
function rand_str_without_O0() {
  const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
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
    document.getElementById("penerima").value == "" &&
    document.getElementById("cash").value == ""
  ) {
    alert("isi kabeh broo");
  } else {
    var doc = new jsPDF("p", "pt", [283.464566929, 340.157480315]);

    //=============header========================
  

    doc.setFontSize(8);
    doc.text(document.getElementById("pengirim").value, 55, 160);
    //  doc.text(10, 55, 'penerima');


    var alamat = document.getElementById("alamat").value
    lines = doc.splitTextToSize(alamat, 250) //ini untuk panjang text
    doc.text(25, 210, lines)

    var penerima = document.getElementById("penerima").value
    lines = doc.splitTextToSize(penerima, 250) //ini untuk panjang text
    doc.text(25, 190, lines)





    
    doc.text(document.getElementById("barang").value, 20, 285);
    doc.text(document.getElementById("barangdua").value, 20, 300);
    doc.text(document.getElementById("barangtiga").value, 20, 315);
    var inv = document.getElementById("nopes").value;
    var invs = " " + inv;
    doc.text(230, 335, inv, null, "center");
  

    doc.setFontSize(8) .setFontType("bold");
    doc.text("Pengirim : ", 30, 160, null, null, "center");
    doc.text("Penerima :", 30, 175, null, null, "center");
    doc.text("Isi Produk :", 30, 270, null, null, "center");

   

    

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



    doc.setFontSize(10);
    doc.setFontType("bold");
    doc.text(document.getElementById("order").value, 10, 20);
    doc.text(document.getElementById("expedisi").value, 135, 20, "center" );
    doc.text(document.getElementById("cash").value, 240, 20, "center");
    

    //==================kotak dua===============
    doc.setLineWidth(0.4);
    doc.rect(2, 1, 280, 337);
    doc.rect(4, 28, 133, 20); // kotak bawah header 1
    doc.rect(140, 28, 140, 20); // kotak bawah header 3
    //doc.text("Resi : ", 30, 42, null, null, "center");
    doc.text(document.getElementById("resi").value, 68, 42, 'center');
    
    var icsa = rand_str_without_O0();
    var noresi = (tang + icsa) 
    doc.text(210, 42, noresi, null, 'center');

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
    document.getElementById("penerima").value == "" &&
    document.getElementById("cash").value == ""
  ) {
    alert("isi kabeh broo");
  } else {
    var doc = new jsPDF("p", "pt", [283.464566929, 340.157480315]);

    //=============header========================
  

    doc.setFontSize(8);
    doc.text(document.getElementById("pengirim").value, 55, 160);
    //  doc.text(10, 55, 'penerima');


    var alamat = document.getElementById("alamat").value
    lines = doc.splitTextToSize(alamat, 250) //ini untuk panjang text
    doc.text(25, 210, lines)

    var penerima = document.getElementById("penerima").value
    lines = doc.splitTextToSize(penerima, 250) //ini untuk panjang text
    doc.text(25, 190, lines)





    
    doc.text(document.getElementById("barang").value, 20, 285);
    doc.text(document.getElementById("barangdua").value, 20, 300);
    doc.text(document.getElementById("barangtiga").value, 20, 315);
    var inv = document.getElementById("nopes").value;
    var invs = " " + inv;
    doc.text(230, 335, inv, null, "center");
  

    doc.setFontSize(8) .setFontType("bold");
    doc.text("Pengirim : ", 30, 160, null, null, "center");
    doc.text("Penerima :", 30, 175, null, null, "center");
    doc.text("Isi Produk :", 30, 270, null, null, "center");

   

    

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



    doc.setFontSize(10);
    doc.setFontType("bold");
    doc.text(document.getElementById("order").value, 10, 20);
    doc.text(document.getElementById("expedisi").value, 135, 20, "center" );
    doc.text(document.getElementById("cash").value, 240, 20, "center");
    

    //==================kotak dua===============
    doc.setLineWidth(0.4);
    doc.rect(2, 1, 280, 337);
    doc.rect(4, 28, 133, 20); // kotak bawah header 1
    doc.rect(140, 28, 140, 20); // kotak bawah header 3
    //doc.text("Resi : ", 30, 42, null, null, "center");
    doc.text(document.getElementById("resi").value, 68, 42, 'center');
    
    var icsa = rand_str_without_O0();
    var noresi = (tang + icsa) 
    doc.text(210, 42, noresi, null, 'center');

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
  
