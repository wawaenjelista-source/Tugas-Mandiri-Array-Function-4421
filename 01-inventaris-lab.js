const barangLab = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Kabel HDMI"
];

// Tahap 1 - Menampilkan Data
function tampilkanBarang(daftarBarang) {
    console.log("\nDaftar Barang:");

    if (daftarBarang.length === 0) {
        console.log("Daftar barang kosong");
    } else {
        for (let i = 0; i < daftarBarang.length; i++) {
            console.log((i + 1) + ". " + daftarBarang[i]);
        }
    }

    console.log("Jumlah Barang: " + daftarBarang.length);
}

// Tahap 2 - Menambahkan Data
function tambahBarang(daftarBarang, namaBarang) {
    if (namaBarang.trim() === "") {
        return false;
    }

    if (daftarBarang.includes(namaBarang)) {
        return false;
    }

    daftarBarang.push(namaBarang);
    return true;
}

// Tahap 3 - Mencari Data
function cariBarang(daftarBarang, namaBarang) {
    let indeks = daftarBarang.indexOf(namaBarang);
    return indeks;
}

// Tahap 4 - Menghapus Data
function hapusBarang(daftarBarang, namaBarang) {
    let indeks = cariBarang(daftarBarang, namaBarang);

    if (indeks === -1) {
        return false;
    }

    daftarBarang.splice(indeks, 1);
    return true;
}

// Tahap 5 - Mengintegrasikan Semua Function
console.log("=== INVENTARIS LABORATORIUM ===");

console.log("\nDaftar Barang Awal:");
tampilkanBarang(barangLab);

console.log("\n[Tambah Barang]");
if (tambahBarang(barangLab, "Webcam")) {
    console.log("Webcam berhasil ditambahkan.");
} else {
    console.log("Penambahan ditolak.");
}

console.log("\n[Cari Barang]");
let hasilCari = cariBarang(barangLab, "Monitor");

if (hasilCari !== -1) {
    console.log("Monitor ditemukan pada indeks " + hasilCari + ".");
} else {
    console.log("Monitor tidak ditemukan.");
}

console.log("\n[Hapus Barang]");
if (hapusBarang(barangLab, "Mouse")) {
    console.log("Mouse berhasil dihapus.");
} else {
    console.log("Penghapusan gagal.");
}

console.log("\nDaftar Barang Terbaru:");
tampilkanBarang(barangLab);