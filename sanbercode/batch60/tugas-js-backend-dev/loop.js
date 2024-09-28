// Membuat array berisi angka 1 sampai 10
const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

// Menggunakan forEach untuk mencetak setiap angka
numbers.forEach(number => {
    console.log(number);
});
