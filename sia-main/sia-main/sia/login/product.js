// product.js

// Function to handle Add to Cart button clicks
function addToCart(productName, productPrice) {
    // Get the existing orders from local storage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Create a new order object
    const newOrder = { name: productName, price: productPrice };

    // Add the new order to the orders array
    orders.push(newOrder);

    // Save the updated orders array back to local storage
    localStorage.setItem('orders', JSON.stringify(orders));

    // Show an alert to the user
    alert(`Added ${productName} to cart.\nPrice: ${productPrice}`);
}

// Adding event listeners to all Add to Cart buttons
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product button');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p:nth-of-type(2)').textContent;

            addToCart(productName, productPrice);
        });
    });
});
