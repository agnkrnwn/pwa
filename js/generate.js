function rand_str_without_O0() {
  const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
  var res = "";
  for (var i = 0; i < 10; i++) {
    var rnd = Math.floor(Math.random() * list.length);
    res = res + list.charAt(rnd);
  }
  return res;
}

function fillInputField() {
  var inputResi = document.getElementById("resi");
  var inputNopes = document.getElementById("nopes");
  var dropdown = document.getElementById("cash");

  if (dropdown.value == "METODE") {
    inputResi.value = "MANUAL MANUAL ORDER";
    inputNopes.value = "MANUAL-" + rand_str_without_O0();
  } else if (dropdown.value == "MANUAL") {
    inputResi.value = "ORDER MANUAL";
    inputNopes.value = "MANUAL-" + rand_str_without_O0();
  } else if (dropdown.value == "CASHLESS") {
    inputResi.value = "";
    inputNopes.value = "";
  } else if (dropdown.value == "COD") {
    inputResi.value = "";
    inputNopes.value = "";
  } else {
    inputResi.value = "";
    inputNopes.value = "";
  }
}

function roundedRect(doc, x, y, w, h, r) {
  doc.roundedRect(x, y, w, h, r, r);
}

function dashedLine(doc, x1, y1, x2, y2, dashLength, spaceLength) {
  doc.setLineDash([dashLength, spaceLength], 0);
  doc.line(x1, y1, x2, y2);
  doc.setLineDash([]);
}

function createPDF() {
  if (
    document.getElementById("order").value == "" ||
    document.getElementById("expedisi").value == "" ||
    document.getElementById("pengirim").value == "" ||
    document.getElementById("alamat").value == "" ||
    document.getElementById("barang").value == "" ||
    document.getElementById("resi").value == "" ||
    document.getElementById("penerima").value == "" ||
    document.getElementById("cash").value == ""
  ) {
    Swal.fire({
      title: "Error!",
      text: "Mohon isi semua field yang diperlukan",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  const { jsPDF } = window.jspdf;
  var doc = new jsPDF("p", "pt", [283.464566929, 340.157480315]);

  // Header
  roundedRect(doc, 5, 5, 273, 30, 3);
  doc.setFillColor(240, 240, 240);
  doc.rect(5, 5, 273, 30, "F");

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(document.getElementById("order").value, 10, 20);
  doc.text(document.getElementById("expedisi").value, 141.5, 20, "center");
  doc.text(document.getElementById("cash").value, 268, 20, "right");

  // Informasi pengiriman
  roundedRect(doc, 5, 40, 273, 120, 3);

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("PENERIMA:", 10, 55);
  doc.setFont("helvetica", "normal");
  var penerima = document.getElementById("penerima").value;
  var alamat = document.getElementById("alamat").value;
  var shipTo = doc.splitTextToSize(penerima + "\n" + alamat, 260);
  doc.text(10, 70, shipTo);

  // Informasi pengiriman
  doc.setFont("helvetica", "bold");
  doc.text("PENGIRIM:", 10, 143); // Memindahkan ke bawah mindah ke bawah itu dari 120 ke 143
  doc.setFont("helvetica", "normal");
  doc.text(10, 155, document.getElementById("pengirim").value); // Memindahkan ke bawah

  // Barcode
  roundedRect(doc, 5, 165, 273, 100, 3);

  var ics = document.getElementById("resi").value;
  JsBarcode("#barcode", ics, {
    format: "CODE128",
    width: 2,
    height: 50,
    displayValue: true,
  });
  const img = document.querySelector("img#barcode");
  doc.addImage(img.src, "JPEG", 15, 175, 250, 80);

  // Informasi produk
  roundedRect(doc, 5, 270, 273, 65, 3);

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("ISI PAKET:", 10, 280);
  doc.setFont("helvetica", "normal");
  doc.text(10, 295, document.getElementById("barang").value);
  doc.text(10, 310, document.getElementById("barangdua").value);
  doc.text(10, 325, document.getElementById("barangtiga").value);

  // Informasi tambahan
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("METODE PENGIRIMAN:", 150, 280);
  doc.setFont("helvetica", "normal");
  doc.text(150, 290, document.getElementById("expedisi").value);

  doc.setFont("helvetica", "bold");
  doc.text("NO. PESANAN:", 150, 305);
  doc.setFont("helvetica", "normal");
  var inv = document.getElementById("nopes").value;
  doc.text(150, 315, inv);

  // Garis pemisah
  dashedLine(doc, 5, 165, 278, 165, 2, 2);

  // Nomor resi
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("NO. RESI:", 10, 34); // Memindahkan ke atas itu dari 42 ke 34
  doc.setFont("helvetica", "normal");
  doc.text(60, 34, document.getElementById("resi").value); // Memindahkan ke atas

  var today = new Date();
  var tang =
    today.getDate() + "" + (today.getMonth() + 1) + "" + today.getFullYear();
  var icsa = rand_str_without_O0();
  var noresi = tang + icsa;
  doc.text("ID:", 150, 34); // Memindahkan ke atas
  doc.text(170, 34, noresi);

  var namanya = "Label-" + inv + "-" + icsa + ".pdf";

  doc.save(namanya);

  Swal.fire({
    title: "Label berhasil di download",
    text: "Silahkan cek folder download dengan nama file \n " + namanya,
    icon: "success",
    confirmButtonText: "Siap!",
  });
}

function printPDF() {
  if (
    document.getElementById("order").value == "" ||
    document.getElementById("expedisi").value == "" ||
    document.getElementById("pengirim").value == "" ||
    document.getElementById("alamat").value == "" ||
    document.getElementById("barang").value == "" ||
    document.getElementById("resi").value == "" ||
    document.getElementById("penerima").value == "" ||
    document.getElementById("cash").value == ""
  ) {
    Swal.fire({
      title: "Error!",
      text: "Mohon isi semua field yang diperlukan",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  const { jsPDF } = window.jspdf;
  var doc = new jsPDF("p", "pt", [283.464566929, 340.157480315]);

  // Header
  roundedRect(doc, 5, 5, 273, 30, 3);
  doc.setFillColor(240, 240, 240);
  doc.rect(5, 5, 273, 30, "F");

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(document.getElementById("order").value, 10, 20);
  doc.text(document.getElementById("expedisi").value, 141.5, 20, "center");
  doc.text(document.getElementById("cash").value, 268, 20, "right");

  // Informasi pengiriman
  roundedRect(doc, 5, 40, 273, 120, 3);

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("PENERIMA:", 10, 55);
  doc.setFont("helvetica", "normal");
  var penerima = document.getElementById("penerima").value;
  var alamat = document.getElementById("alamat").value;
  var shipTo = doc.splitTextToSize(penerima + "\n" + alamat, 260);
  doc.text(10, 70, shipTo);

  // Informasi pengiriman
  doc.setFont("helvetica", "bold");
  doc.text("PENGIRIM:", 10, 143); // Memindahkan ke bawah mindah ke bawah itu dari 120 ke 143
  doc.setFont("helvetica", "normal");
  doc.text(10, 155, document.getElementById("pengirim").value); // Memindahkan ke bawah

  // Barcode
  roundedRect(doc, 5, 165, 273, 100, 3);

  var ics = document.getElementById("resi").value;
  JsBarcode("#barcode", ics, {
    format: "CODE128",
    width: 2,
    height: 50,
    displayValue: true,
  });
  const img = document.querySelector("img#barcode");
  doc.addImage(img.src, "JPEG", 15, 175, 250, 80);

  // Informasi produk
  roundedRect(doc, 5, 270, 273, 65, 3);

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("ISI PAKET:", 10, 280);
  doc.setFont("helvetica", "normal");
  doc.text(10, 295, document.getElementById("barang").value);
  doc.text(10, 310, document.getElementById("barangdua").value);
  doc.text(10, 325, document.getElementById("barangtiga").value);

  // Informasi tambahan
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("METODE PENGIRIMAN:", 150, 280);
  doc.setFont("helvetica", "normal");
  doc.text(150, 290, document.getElementById("expedisi").value);

  doc.setFont("helvetica", "bold");
  doc.text("NO. PESANAN:", 150, 305);
  doc.setFont("helvetica", "normal");
  var inv = document.getElementById("nopes").value;
  doc.text(150, 315, inv);

  // Garis pemisah
  dashedLine(doc, 5, 165, 278, 165, 2, 2);

  // Nomor resi
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("NO. RESI:", 10, 34); // Memindahkan ke atas itu dari 42 ke 34
  doc.setFont("helvetica", "normal");
  doc.text(60, 34, document.getElementById("resi").value); // Memindahkan ke atas

  var today = new Date();
  var tang =
    today.getDate() + "" + (today.getMonth() + 1) + "" + today.getFullYear();
  var icsa = rand_str_without_O0();
  var noresi = tang + icsa;
  doc.text("ID:", 150, 34); // Memindahkan ke atas
  doc.text(170, 34, noresi);
  // Use the same function as createPDF, but change the end to:
  // ... [same code as createPDF until doc.text(170, 42, noresi);]

  doc.autoPrint();
  doc.output("dataurlnewwindow");
}
