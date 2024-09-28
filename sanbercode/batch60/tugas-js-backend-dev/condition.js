const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log("Input bukan angka.");
    } else {
        if (number % 2 === 0) {
            console.log(`${number} adalah angka genap.`);
        } else {
            console.log(`${number} adalah angka ganjil.`);
        }
    }

    rl.close();
});
