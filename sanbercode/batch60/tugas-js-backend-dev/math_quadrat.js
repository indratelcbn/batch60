function kuadratkanArray(arr) {
    return arr.map(number => Math.pow(number, 2));
}

// Contoh penggunaan
const angkaArray = [1, 2, 3, 4, 5];
const hasilKuadrat = kuadratkanArray(angkaArray);
console.log("Array asli:", angkaArray);
console.log("Array dikuadratkan:", hasilKuadrat);
