document.querySelectorAll('.product-item img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
    });

    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
