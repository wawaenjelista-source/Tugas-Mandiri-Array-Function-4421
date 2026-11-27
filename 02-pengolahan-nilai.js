const nilaiPraktik = [80, 70, 90, 65, 75, 85];
const batasTuntas = 75;

// Tahap 1 - Menampilkan Nilai
function tampilkanNilai(nilai) {
    console.log("\n=== NILAI PRAKTIK SISWA ===");

    for (let i = 0; i < nilai.length; i++) {
        console.log("Siswa " + (i + 1) + ": " + nilai[i]);
    }
}

// Tahap 2 - Menghitung Rata-Rata
function hitungRataRata(nilai) {
    if (nilai.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];
    }

    return total / nilai.length;
}

// Tahap 3 - Menghitung Jumlah Siswa Tuntas
function hitungJumlahTuntas(nilai, batas) {
    let jumlah = 0;

    for (let i = 0; i < nilai.length; i++) {
        if (nilai[i] >= batas) {
            jumlah++;
        }
    }

    return jumlah;
}

// Tahap 4 - Menampilkan Rekapitulasi
console.log("=== PENGOLAHAN NILAI PRAKTIK SISWA ===");

tampilkanNilai(nilaiPraktik);

let jumlahSiswa = nilaiPraktik.length;
let rataRata = hitungRataRata(nilaiPraktik);
let jumlahTuntas = hitungJumlahTuntas(nilaiPraktik, batasTuntas);
let jumlahBelumTuntas = jumlahSiswa - jumlahTuntas;

console.log("\n=== REKAPITULASI ===");
console.log("Jumlah Siswa: " + jumlahSiswa);
console.log("Nilai Rata-Rata: " + rataRata);
console.log("Jumlah Tuntas: " + jumlahTuntas);
console.log("Jumlah Belum Tuntas: " + jumlahBelumTuntas);

// Tahap 5 - Pengujian Program
console.log("\n=== PENGUJIAN PROGRAM ===");

const nilaiPengujian = [60, 65, 70, 80, 90];

tampilkanNilai(nilaiPengujian);

let jumlahUji = nilaiPengujian.length;
let rataUji = hitungRataRata(nilaiPengujian);
let tuntasUji = hitungJumlahTuntas(nilaiPengujian, batasTuntas);
let belumTuntasUji = jumlahUji - tuntasUji;

console.log("\n=== HASIL PENGUJIAN ===");
console.log("Jumlah Siswa: " + jumlahUji);
console.log("Nilai Rata-Rata: " + rataUji);
console.log("Jumlah Siswa Tuntas: " + tuntasUji);
console.log("Jumlah Siswa Belum Tuntas: " + belumTuntasUji);