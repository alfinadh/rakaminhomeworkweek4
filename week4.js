// Buat kondisi berdasarkan hasil perhitungan Genap dan Ganjil
if (hitungGenap.min > Genap) {
  console.log("Nilai minimum dari array Genap lebih besar dari semua nilai dalam array Genap.");
}

if (hitungGanjil.max > Ganjil) {
  console.log("Nilai maksimum dari array Ganjil lebih besar dari semua nilai dalam array Ganjil.");
}

if (hitungGenap.total === hitungGanjil.total) {
  console.log("Total dari array Genap dan array Ganjil memiliki nilai yang sama.");
}

if (hitungGanjil.rataRata < hitungGenap.rataRata) {
  console.log("Rata-rata dari array Genap lebih besar dari rata-rata array Ganjil.");
}
