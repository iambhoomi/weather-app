// script.js
// Get the popup button and popup container
const popupBtn = document.getElementById('popup-btn');
const popupContainer = document.getElementById('popup');

// Add event listener to the popup button
popupBtn.addEventListener('click', () => {
  // Toggle the popup container's visibility
  popupContainer.classList.toggle('show-popup');
});

// Get the close popup button
const closePopupBtn = document.querySelector('.close-popup');

// Add event listener to the close popup button
closePopupBtn.addEventListener('click', () => {
  // Toggle the popup container's visibility
  popupContainer.classList.toggle('show-popup');
});

// Get the add to cart buttons
const addToCartBtns = document.querySelectorAll('.add-to-cart');

// Add event listener to each add to cart button
addToCartBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Alert the user that the item has been added to cart
    alert('Item added to cart!');
  });
});

// Get the payment form
const paymentForm = document.getElementById('payment-form');

// Add event listener to the payment form's submit event
paymentForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the payment form data
  const cardNumber = document.getElementById('card-number').value;
  const expirationDate = document.getElementById('expiration-date').value;
  const cvv = document.getElementById('cvv').value;

  // Alert the user that the payment has been processed
  alert(`Payment processed! Card number: ${cardNumber}, Expiration date: ${expirationDate}, CVV: ${cvv}`);
});
