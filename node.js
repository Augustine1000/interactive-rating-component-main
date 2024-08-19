const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const ratingContainer = document.querySelector('.rating-container');
const thankYouMessage = document.querySelector('.thank-you-message');
const selectedRatingText = document.querySelector('.selected-rating');

let selectedRating = 0;

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedRating = button.getAttribute('data-rating');
        submitButton.disabled = false;
    });
});

submitButton.addEventListener('click', () => {
    ratingContainer.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
});
