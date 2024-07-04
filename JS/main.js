document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const product = event.target.closest('.product-item');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;

        const cartItem = {
            name: productName,
            price: productPrice
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} has been added to your cart!`);
    }

    // Animation effect on "Add to Cart" button click
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('pulse');
            setTimeout(() => {
                button.classList.remove('pulse');
            }, 300);
        });
    });
});
