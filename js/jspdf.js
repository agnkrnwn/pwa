function rand_str_without_O0() {
    const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
    var res = "";
    for(var i = 0; i < 10; i++) {
        var rnd = Math.floor(Math.random() * list.length);
        res = res + list.charAt(rnd);
    }
    return res;
}


function printPdf() {
    var doc = new jsPDF('p','mm','letter') .setProperties({ title: "LABEL PENGIRIMAN" }) //210mm wide and 297mm high
    

    var order = document.getElementById("order").value
    var cash = document.getElementById("cash").value
    var expedisi = document.getElementById("expedisi").value

    var resi = document.getElementById("resi").value

    var pengirim = document.getElementById("pengirim").value
    var alamat = document.getElementById("alamat").value
    var penerima = document.getElementById("penerima").value

    var barang = document.getElementById("barang").value
    var barangtiga = document.getElementById("barangtiga").value
    var barangdua = document.getElementById("barangdua").value

    var nopes = document.getElementById("nopes").value
    
    doc.setLineWidth(0.4)
    doc.rect(1, 3, 214, 220) //1 lebar,2 tinggi,3 posisi x,4 posisi y
    doc.rect(2, 28, 104, 20) // kotak bawah header 1
    doc.rect(108, 28, 106, 20) // kotak bawah header 3


    //SECTION HEADER

    doc.setFontStyle('bold')
    .setFontSize(25) 
    .setFont('helvetica')

    doc.text(order ,10,17, 'left' )
    doc.text(expedisi ,105,17, {align: 'center'})
    doc.text(cash,200, 17, 'right')

    //END SECTION HEADER

    //SECTION resi

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
    
    var icsa = rand_str_without_O0()
    var unikid = (tang + icsa)

    doc.setFontStyle('bold')
    .setFontSize(22) 
    .setFont('helvetica')

    doc.text(resi ,50,40, "center")
    doc.text(unikid ,160,40, "center")

    // END SECTION resi

    //SECTION pengirim
    doc.text("Pengirim : ", 30, 130, null, null, "center")
    doc.text(pengirim, 100, 130, null, null, "center")

    //secruon alamat
    doc.text("Alamat Penerima", 43, 150, null, null, "center")

    doc.setFontSize(20) 
    .setFont('helvetica')

    lines = doc.splitTextToSize(penerima, 155) //ini untuk panjang text
    doc.text(35, 160, lines) // ini untuk atur posisi text 1 dari kiri 1 dari atas

    lines = doc.splitTextToSize(alamat, 150) //ini untuk panjang text
    doc.text(35, 178, lines) // ini untuk atur posisi text 1 dari kiri 1 dari atas

    //END SECTION pengirim

    //SECTION barang
    .setFontSize(20)
    .setFont('helvetica')
    .setFontStyle('normal')

    doc.text("Isi Produk :", 30, 235, null, null, "center")
    doc.text(barang, 20, 245, null, null, "left")
    doc.text(barangdua, 20, 255, null, null, "left")
    doc.text(barangtiga, 20, 265, null, null, "left")

    .setFontSize(10)
    .setFont('helvetica')
    .setFontStyle('normal')
    doc.text(nopes, 155, 275, null, null, "left")
    doc.text(dateTime, 215, 275, null, null, "right")
    
    //line bawah barcode
    doc.line(2, 115, 215, 115);

    // DOT LINE
    doc.setLineDash([1, 1.5, 1, 1.5, 1, 1.5]); //dot libe header 
    doc.line(2, 25, 337, 25); //this too
    doc.line(2, 52, 337, 52); //this too

    //BARCODEEEEEEEEEEEEEE
    JsBarcode("#barcode", "" + resi, {
        format: "CODE128",
        fontOptions: "bold",
        width: 3,
        displayValue: false
      });
  
      const img = document.querySelector("img#barcode");
      doc.addImage(img.src, "JPEG", 10, 55, 200, 55, "center");

    // doc.save('Test'+ random + '.pdf') // Save the PDF
    doc.autoPrint(); // Print the PDF
    doc.output('dataurlnewwindow') // Open the PDF in a new window
}

function createPdf() {
    var doc = new jsPDF('p','mm','letter') .setProperties({ title: "LABEL PENGIRIMAN" }) //210mm wide and 297mm high
    

    var order = document.getElementById("order").value
    var cash = document.getElementById("cash").value
    var expedisi = document.getElementById("expedisi").value

    var resi = document.getElementById("resi").value

    var pengirim = document.getElementById("pengirim").value
    var alamat = document.getElementById("alamat").value
    var penerima = document.getElementById("penerima").value

    var barang = document.getElementById("barang").value
    var barangtiga = document.getElementById("barangtiga").value
    var barangdua = document.getElementById("barangdua").value

    var nopes = document.getElementById("nopes").value
    
    doc.setLineWidth(0.4)
    doc.rect(1, 3, 214, 220) //1 lebar,2 tinggi,3 posisi x,4 posisi y
    doc.rect(2, 28, 104, 20) // kotak bawah header 1
    doc.rect(108, 28, 106, 20) // kotak bawah header 3


    //SECTION HEADER

    doc.setFontStyle('bold')
    .setFontSize(25) 
    .setFont('helvetica')

    doc.text(order ,10,17, 'left' )
    doc.text(expedisi ,105,17, {align: 'center'})
    doc.text(cash,200, 17, 'right')

    //END SECTION HEADER

    //SECTION resi

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
    
    var icsa = rand_str_without_O0()
    var unikid = (tang + icsa)

    doc.setFontStyle('bold')
    .setFontSize(22) 
    .setFont('helvetica')

    doc.text(resi ,50,40, "center")
    doc.text(unikid ,160,40, "center")

    // END SECTION resi

    //SECTION pengirim
    doc.text("Pengirim : ", 30, 130, null, null, "center")
    doc.text(pengirim, 100, 130, null, null, "center")

    //secruon alamat
    doc.text("Alamat Penerima", 43, 150, null, null, "center")

    doc.setFontSize(20) 
    .setFont('helvetica')

    lines = doc.splitTextToSize(penerima, 155) //ini untuk panjang text
    doc.text(35, 160, lines) // ini untuk atur posisi text 1 dari kiri 1 dari atas

    lines = doc.splitTextToSize(alamat, 150) //ini untuk panjang text
    doc.text(35, 178, lines) // ini untuk atur posisi text 1 dari kiri 1 dari atas

    //END SECTION pengirim

    //SECTION barang
    .setFontSize(20)
    .setFont('helvetica')
    .setFontStyle('normal')

    doc.text("Isi Produk :", 30, 235, null, null, "center")
    doc.text(barang, 20, 245, null, null, "left")
    doc.text(barangdua, 20, 255, null, null, "left")
    doc.text(barangtiga, 20, 265, null, null, "left")

    .setFontSize(10)
    .setFont('helvetica')
    .setFontStyle('normal')
    doc.text(nopes, 155, 275, null, null, "left")
    doc.text(dateTime, 215, 275, null, null, "right")
    
    //line bawah barcode
    doc.line(2, 115, 215, 115);

    // DOT LINE
    doc.setLineDash([1, 1.5, 1, 1.5, 1, 1.5]); //dot libe header 
    doc.line(2, 25, 337, 25); //this too
    doc.line(2, 52, 337, 52); //this too

    //BARCODEEEEEEEEEEEEEE
    JsBarcode("#barcode", "" + resi, {
        format: "CODE128",
        fontOptions: "bold",
        width: 3,
        displayValue: false
      });
  
      const img = document.querySelector("img#barcode")
      doc.addImage(img.src, "JPEG", 10, 55, 200, 55, "center")

    var namanya = ("Label-" + nopes +"-"+ unikid + ".pdf")

    doc
      .save(namanya, {
        returnPromise: true,
      })
      .then(Swal.fire({
        title: "Label berhasil di download",
        text: "Silahkan cek folder download dengan nama file \n " + namanya ,
        icon: "success",
        button: "Siap!!",
      }))
}