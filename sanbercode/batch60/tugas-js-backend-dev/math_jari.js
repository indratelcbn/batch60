function hitungLuasLingkaran(jariJari) {
    const luas = Math.PI * Math.pow(jariJari, 2);
    return luas;
}

// Contoh penggunaan
const jariJari = 7;
console.log(`Luas lingkaran dengan jari-jari ${jariJari} adalah ${hitungLuasLingkaran(jariJari).toFixed(2)}`);
