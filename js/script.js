const form = document.getElementById('reservation-form');
const popup = document.getElementById('popup');


form.addEventListener('submit', (event) => {
  event.preventDefault(); // Mencegah form submit secara default

  const nama = document.getElementById('nama').value;
  const nomorHp = document.getElementById('nomor_hp').value;
  const alamat = document.getElementById('alamat').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const jumlahPengunjung = document.getElementById('jumlah_pengunjung').value;

  // Validasi sederhana
  if (nama === '') {
    alert('Nama lengkap harus diisi');
    return;
  }

  if (nomorHp.length < 10) {
    alert('Nomor HP minimal 10 digit');
    return;
  }

  if (alamat === '') {
    alert('Alamat harus diisi');
    return;
  }

  if (checkin === '') {
    alert('Tanggal check-in harus diisi');
    return;
  }

  if (checkout === '') {
    alert('Tanggal check-out harus diisi');
    return;
  }

  if (jumlahPengunjung <= 0) {
    alert('Jumlah pengunjung harus lebih dari 0');
    return;
  }

  // Jika semua valid, lakukan sesuatu (misalnya, kirim data ke server)
  console.log('Data valid:', nama, nomorHp, alamat, checkin, checkout, jumlahPengunjung);
});