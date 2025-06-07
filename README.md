# Mbuba Farm – Fresh Farm Produce Website

**Mbuba Farm** is a simple and modern e-commerce frontend for showcasing and selling fresh farm products. Built with HTML, Tailwind CSS, and JavaScript, the site supports product listing, cart management, and dynamic price formatting in Kenyan Shillings (KES).

## 🌱 Features

- Responsive and clean design using Tailwind CSS
- Dynamic product rendering from a static array and optional backend (`localhost:3000`)
- Shopping cart functionality with persistent storage via `localStorage`
- Real-time cart item counter
- Price conversion from USD to KES
- Easy integration with backend API for products and cart (`/api/products`, `/api/cart`)

## 📂 Project Structure

├── index.html # Main landing page
├── index.js # Included JS logic (optional, some logic is inline)
├── products.html # (Expected) product listing page
├── cart.html # (Expected) cart overview page


## 🛠️ Technologies Used

- HTML5
- Tailwind CSS (CDN)
- JavaScript (ES6)
- Fetch API (for dynamic data)
- LocalStorage (cart persistence)

## 🚀 Getting Started

### Option 1: Run Locally (Static Only)

1. Clone or download this repository.
2. Open `index.html` in your browser to preview the landing page.

### Option 2: Run with Backend

This project optionally fetches data from a backend running on `http://localhost:3000`.

You’ll need to:

1. Create an API that supports:
   - `GET /api/products` – returns a list of product objects.
   - `POST /api/cart` – accepts product ID and quantity to update the cart.
2. Start the server.
3. Open `index.html` in your browser.

> ⚠️ **Note**: If the backend is not available, the page still loads predefined static product data.

MIT License

Copyright (c) 2025 Martin Mbuba

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
