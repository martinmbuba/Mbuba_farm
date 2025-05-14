// app.js (Client-Side JavaScript)
document.addEventListener("DOMContentLoaded", function () {
  // Fetch products from the server
  fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
      products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'bg-gray-100 p-4 rounded shadow';
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover mb-4 rounded">
          <h4 class="text-lg font-semibold text-gray-800">${product.name}</h4>
          <p class="text-green-700 font-bold">$${product.price.toFixed(2)}</p>
          <button class="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(div);
      });

      // Event listener for adding products to the cart
      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart')) {
          const productId = parseInt(e.target.getAttribute('data-id'));
          addToCart(productId);
        }
      });
    });

  // Function to add item to the cart
  function addToCart(productId) {
    fetch('http://localhost:3000/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: productId, quantity: 1 }),
    })
      .then(response => response.json())
      .then(cart => {
        localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in local storage
        updateCartCount(); // Update the cart count in the header
      });
  }

  // Function to update the cart count in the header
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
  }

  // Update cart count on page load
  updateCartCount();
});
