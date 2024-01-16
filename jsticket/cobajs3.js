    // Menghilangkan animasi loading dan menampilkan konten utama setelah 3 detik
    setTimeout(function () {
        document.getElementById('loader-wrapper').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
      }, 1500); 