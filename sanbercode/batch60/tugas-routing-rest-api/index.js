const express = require('express');
const app = express();
app.use(express.json()); // Untuk parsing JSON

// Data kategori
let categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' }
];

// Data produk
let products = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' }
];

// 1. GET: Mengembalikan daftar semua kategori
app.get('/categories', (req, res) => {
    res.json(categories);
});

// 2. GET: Mengembalikan detail kategori berdasarkan ID
app.get('/categories/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send('Kategori tidak ditemukan');
    res.json(category);
});

// 3. POST: Menambahkan kategori baru
app.post('/categories', (req, res) => {
    const newCategory = {
        id: categories.length + 1,
        name: req.body.name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

// 4. PUT: Memperbarui kategori berdasarkan ID
app.put('/categories/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send('Kategori tidak ditemukan');

    category.name = req.body.name;
    res.json(category);
});

// 5. DELETE: Menghapus kategori berdasarkan ID
app.delete('/categories/:id', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).send('Kategori tidak ditemukan');

    const index = categories.indexOf(category);
    categories.splice(index, 1);
    res.json({ message: 'Kategori berhasil dihapus' });
});

// 6. GET: Mencari produk berdasarkan nama (query string)
app.get('/products', (req, res) => {
    const name = req.query.name;
    const result = name 
        ? products.filter(p => p.name.toLowerCase().includes(name.toLowerCase())) 
        : products;
    res.json(result);
});

// 7. GET: Mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama (parameter + query string)
app.get('/categories/:categoryName/products', (req, res) => {
    const categoryName = req.params.categoryName;
    const name = req.query.name;

    const filteredProducts = products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());

    if (name) {
        const searchResult = filteredProducts.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        return res.json(searchResult);
    }
    res.json(filteredProducts);
});

// Menjalankan server
app.listen(3000, () => {
    console.log('Server berjalan pada port 3000');
});
