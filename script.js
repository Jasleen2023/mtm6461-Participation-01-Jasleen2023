// Array to hold cart items
let cartItems = [];
let totalPrice = 0;

// Function to add items to cart
function addToCart(productName, productPrice) {
  const itemIndex = cartItems.findIndex(item => item.name === productName);
  
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity += 1;
  } else {
    cartItems.push({ name: productName, price: productPrice, quantity: 1 });
  }

  totalPrice += productPrice;

  updateCartUI();
}

// Function to update the cart display
function updateCartUI() {
  const cartItemsList = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const cartCountElement = document.querySelector('.cart-count');

  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
    cartItemsList.appendChild(listItem);
  });

  totalPriceElement.textContent = totalPrice.toFixed(2);
  cartCountElement.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
}

// Function to toggle the cart popup
function toggleCartPopup() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

// Checkout function
document.getElementById('checkout').addEventListener('click', () => {
  if (cartItems.length > 0) {
    alert(`Total amount to be paid: $${totalPrice.toFixed(2)}`);
    cartItems = [];
    totalPrice = 0;
    updateCartUI();
    toggleCartPopup(); // Close the popup after checkout
  } else {
    alert('Your cart is empty!');
  }
});
