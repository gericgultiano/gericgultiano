document.addEventListener('DOMContentLoaded', () => {
    const ordersContainer = document.querySelector('.order-container');

    // Sample data for orders
    const orders = [
        {
            id: 1,
            product: "Product 1",
            quantity: 2,
            price: "$20",
            date: "2023-06-01"
        },
        {
            id: 2,
            product: "Product 2",
            quantity: 1,
            price: "$50",
            date: "2023-06-03"
        },
        {
            id: 3,
            product: "Product 3",
            quantity: 3,
            price: "$15",
            date: "2023-06-05"
        }
    ];

    // Function to display orders
    function displayOrders() {
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <h3>Order #${order.id}</h3>
                <p>Product: ${order.product}</p>
                <p>Quantity: ${order.quantity}</p>
                <p>Price: ${order.price}</p>
                <span>Date: ${order.date}</span>
            `;
            ordersContainer.appendChild(orderItem);
        });
    }

    displayOrders();
});
