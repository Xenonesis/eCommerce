document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('review-form');
    const reviewList = document.getElementById('review-list');

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('reviewer-name').value;
        const review = document.getElementById('review-text').value;

        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `<strong>${name}:</strong> ${review}`;
        reviewList.appendChild(reviewItem);

        // Clear the form
        reviewForm.reset();
    });
});
