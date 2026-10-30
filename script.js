const stok = 5;
const status = "habis";

if(stok === 5 && status !== "habis") {
    console.log("Cek ketersediaan barang");
} else {
    console.log("stok barang tersedia");
}

const stock = 3;

if (stock === 0) {
    console.log("habis");
} else if (stock <5) {
    console.log("stock menipis");
} else {
    console.log("stock aman");
}

for (let i = 10; i >=1; i--) {
    console.log("perulangan ke-", i);
}

for (let i = 10; i >= 1; i--) {
    if (i % 2 == 0) {
        console.log(i, "adalah Genap");
    } else {
        console.log(i, "adalah Ganjil");
    }
}

const daftarBarang = [
    "laptop",
    "mouse",
    "monitor",
    "keyboard",
];

console.log(daftarBarang.length)
for(let i = 0; i <daftarBarang.length; i++) {
    console.log(daftarBarang[i]);
}

let stockk = 3;

while (stockk > 0) {
    console.log("stok tersisa:", stockk);
    stockk--;
}

function sapa() {
    console.log("asoyy selamat belajar");
}

sapa();

function tentukanStatusStockk(stockk){
    if (stockk === 0) {
        return "Habis";
    } else if (stockk <5) {
        return "Menipis";
    } else {
        return "Aman";
    }
}

console.log(tentukanStatusStockk(0));
console.log(tentukanStatusStockk(3));
console.log(tentukanStatusStockk(15));

