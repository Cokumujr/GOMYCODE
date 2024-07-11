document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const cartTotalElement = document.getElementById('cart-total');

    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantityElement = item.querySelector('.quantity-value');
        const itemTotalElement = item.querySelector('.item-total');

        item.querySelector('.plus-btn').addEventListener('click', () => {
            updateQuantity(item, 1);
        });

        item.querySelector('.minus-btn').addEventListener('click', () => {
            updateQuantity(item, -1);
        });

        item.querySelector('.delete-btn').addEventListener('click', () => {
            item.remove();
            updateCartTotal();
        });

        
        item.querySelector('.like-btn').addEventListener('click', (e) => {
            e.target.classList.toggle('liked');
            e.target.textContent = e.target.classList.contains('liked') ? '❤️' : '♡';
        });

        function updateQuantity(item, change) {
            let quantity = parseInt(quantityElement.textContent);
            quantity = Math.max(1, quantity + change);
            quantityElement.textContent = quantity;
            itemTotalElement.textContent = `Total: $${(price * quantity).toFixed(2)}`;
            updateCartTotal();
        }
    });

    function updateCartTotal() {
        let cartTotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('.quantity-value').textContent);
            cartTotal += price * quantity;
        });
        cartTotalElement.textContent = `Cart Total: $${cartTotal.toFixed(2)}`;
    }

    updateCartTotal(); // Initial calculation
});


