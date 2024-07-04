document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.getElementById('sort');
    const filterButton = document.getElementById('apply-filter');

    sortSelect.addEventListener('change', sortProducts);
    filterButton.addEventListener('click', filterProducts);

    function sortProducts() {
        const sortValue = sortSelect.value;
        const productItems = [...document.querySelectorAll('.product-item')];
        const sortedItems = productItems.sort((a, b) => {
            if (sortValue === 'price') {
                return parseFloat(a.querySelector('p').textContent.substring(1)) - parseFloat(b.querySelector('p').textContent.substring(1));
            } else {
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
            }
        });

        const productCatalog = document.querySelector('.product-catalog');
        productCatalog.innerHTML = '';
        sortedItems.forEach(item => productCatalog.appendChild(item));
    }

    function filterProducts() {
        const minPrice = parseFloat(document.getElementById('min-price').value);
        const maxPrice = parseFloat(document.getElementById('max-price').value);
        const productItems = document.querySelectorAll('.product-item');

        productItems.forEach(item => {
            const price = parseFloat(item.querySelector('p').textContent.substring(1));
            if ((isNaN(minPrice) || price >= minPrice) && (isNaN(maxPrice) || price <= maxPrice)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
