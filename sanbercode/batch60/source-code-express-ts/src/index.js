const express = require('express');
const path = require('path');
const app = express();

// Route untuk /hello
app.get('/hello', (req, res) => {
  res.json({
    message: "Success fetch message",
    data: "Hello World!"
  });
});

// Route untuk /user
app.get('/user', (req, res) => {
  res.json({
    message: "Success fetch user",
    data: {
      id: 1,
      name: "Budi",
      username: "budidu",
      email: "budidu@mail.com"
    }
  });
});

// Middleware untuk serve file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
