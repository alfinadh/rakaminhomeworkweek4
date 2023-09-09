// buat 100 nilai random (1-50) pada 1 array
const nilaiRandom = [];

for (let i=0; i < 100; i++) {
    nilaiRandom[i] = Math.floor(Math.random() *50) + 1;
}

/*console.log(nilaiRandom);*/

// pecahkan menjadi 2 array berdasarkan index ganjil genap

const Genap = [];
const Ganjil = [];

for ( i = 0; i < nilaiRandom.length; i++){
    if (nilaiRandom[i] %2 == 0) {
        Genap.push(nilaiRandom[i]);
    } else {
        Ganjil.push(nilaiRandom[i]);
    }
}

/*console.log("Index Genap" + Genap);
console.log("Index Ganjil" + Ganjil);*/

// gunakan kedua array untuk mendapatkan nilai min, max, total, rata-rata
function perhitungan(hasil) {
    let min = hasil[0];
    let max = hasil[0];
    let total = 0;

    for (let i = 0; i < hasil.length; i++) {
        const nilai = hasil[i];

    //nilai min
    if (nilai < min) {
        min = nilai;
    }

    //nilai max
    if (nilai > max) {
        max=nilai;
    }

    //nilai total
    total += nilai;
    }

    const rataRata = total / hasil.length;

    return {min, max, total, rataRata};
}

const hitungGenap = perhitungan(Genap);
const hitungGanjil = perhitungan(Ganjil);


console.log("Hasil Genap", hitungGenap);
console.log("Hasil Ganjil", hitungGanjil);

// bandingkan kedua buah array
if (hitungGanjil.min > hitungGenap.total) {
    console.log("Nilai minimum dari array Ganjil lebih kecil dari total nilai array Genap");
} else if (hitungGenap.max > hitungGanjil.max) {
    console.log("Nilai maximum dari array Ganjil lebih besar dari nilai maximum array Genap")
} else if (hitungGenap.total == hitungGanjil.total) {
    console.log("Jumlah total array Genap sama dengan nilai tetap array Ganjil");
} else if (hitungGanjil.rataRata > hitungGenap.rataRata) {
    console.log("Nilai rata-rata array ganjil lebih besar dari nilai rata-rata array genap")
} else {
    console.log("Tidak ada kondisi terpenuhi");
}