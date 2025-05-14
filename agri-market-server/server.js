const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Import path module
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'))); // 'public' folder contains your HTML files

// Sample products (replace with actual data or database later)
const products = [
   { id: 1, name: 'Avocados', price: 2.5, image: 'https://img.freepik.com/free-psd/fresh-avocado-with-water-splash-leaves-transparent-background_84443-26275.jpg?ga=GA1.1.785613439.1747211217&semt=ais_hybrid&w=740' },
    { id: 2, name: 'Tomatoes', price: 1.2, image: 'https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?ga=GA1.1.785613439.1747211217&semt=ais_hybrid&w=740' },
    { id: 3, name: 'Beans', price: 3.0, image: 'https://img.freepik.com/free-photo/various-legumes_53876-47070.jpg?ga=GA1.1.785613439.1747211217&semt=ais_hybrid&w=740' },
    { id: 3, name: 'maize', price: 3.0, image: 'https://img.freepik.com/free-vector/corn-cobs-realistic_1284-14091.jpg?ga=GA1.1.785613439.1747211217&semt=ais_hybrid&w=740' },
    { id: 3, name: 'Greens', price: 3.0, image: 'https://img.freepik.com/free-photo/top-view-greens-leaf-vegetables-horizontal_176474-5144.jpg?ga=GA1.1.785613439.1747211217&semt=ais_hybrid&w=740' },
    { id: 3, name: 'Bananas', price: 3.0, image: 'https://img.freepik.com/free-photo/yellow-banana-fruit_74190-4830.jpg?ga=GA1.1.785613439.1747211217&semt=ais_hybrid&w=740' },
    { id: 3, name: 'Honey', price: 3.0, image: 'https://img.freepik.com/free-photo/yellow-banana-fruit_74190-4830.jpg?ga=GA1.1.785613439.1747211217&semt=ais_hybrid&w=740' },
    { id: 3, name: 'Potatoes', price: 3.0, image: 'https://img.freepik.com/free-photo/side-view-raw-potatoes-dish_141793-7235.jpg?ga=GA1.1.785613439.1747211217&semt=ais_hybrid&w=740' },
    { id: 3, name: 'Cassava', price: 3.0, image: 'https://img.freepik.com/premium-photo/fresh-cassava-root-isolated_259266-202.jpg?ga=GA1.1.785613439.1747211217&semt=ais_hybrid&w=740' },
  ];


// Endpoint to get all products
app.get('/api/products', (req, res) => {
  res.sendfile(path.join(__dirname, 'client', 'index.html')); // Serve the HTML file
});

// Endpoint to handle adding items to the cart (mocked as in-memory cart for now)
let cart = [];

app.post('/api/cart', (req, res) => {
  const { id, quantity } = req.body;
  const product = products.find(p => p.id === id);
  
  if (product) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    res.json(cart);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Endpoint to get the cart (so the frontend can display it)
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
