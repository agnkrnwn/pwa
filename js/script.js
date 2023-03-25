function fillInputField() {
  // ambil elemen input dan dropdown
  var input = document.getElementById("resi");
  var dropdown = document.getElementById("cash");
  
  // jika opsi "Isi Manual" dipilih, isi input field dengan "manual"
  if (dropdown.value == "METODE") {
    input.value = "MANUAL";
  } 
  // jika opsi "Satu" dipilih, isi input field dengan "satu"
  else if (dropdown.value == "MANUAL") {
    input.value = "MANUAL";
  }
  // jika opsi "Dua" dipilih, isi input field dengan "dua"
  else if (dropdown.value == "CASHLESS") {
    input.value = "";
  }
  // jika opsi "Tiga" dipilih, isi input field dengan "tiga"
  else if (dropdown.value == "COD") {
    input.value = "";
  }
  else {
    input.value = "";
  }
}

var initialText = $('.editable').val();
    $('.editOption').val(initialText);
  
    $('#expedisi').change(function () {
      var selected = $('option:selected', this).attr('class');
      var optionText = $('.editable').text();
  
      if (selected == "editable") {
        $('.editOption').show();
  
  
        $('.editOption').keyup(function () {
          var editText = $('.editOption').val();
          $('.editable').val(editText);
          $('.editable').html(editText);
        });
  
      } else {
        $('.editOption').hide();
      }
    });

    document.querySelector(".first").addEventListener('click', function(){
        Swal.fire({
            title: 'INFO',
            html: 'ini adalah web app untuk generate dan print label mengunakan teknologi PWA (Progressive Web Apps) ,jika browser anda suport maka akan muncul, <b>add LABEL GENERATOR to home screen </b> di bagian bawah seperti gambar di atas, klik aja itu untuk install web app ini, agar mudah aksesnya ga perlu pakai browser. <br> <b> kolom resi wajib diisi jika CASHLESS, COD , DFOD, agar bisa generate label, dan tombol print hanya bisa di pake jika tersambung dengan printer. </b>',
            imageUrl: '/images/add.png',
            imageHeight: 100,
            imageAlt: 'Add to Home Screen',
            confirmButtonColor: '#212529',
            footer: 'hanya suport kertas A6 standart label di semua marketplace'
            
          });
      });