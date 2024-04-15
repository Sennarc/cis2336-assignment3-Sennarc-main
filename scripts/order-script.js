// Function to add item to shopping cart
function addToCart(itemName, price, quantityInputId) {
  const quantity = parseInt(document.getElementById(quantityInputId).value);
  if (quantity > 0 && quantity <= 10) {
    const subtotal = price * quantity;
    const cartItem = `<li>${itemName}: $${subtotal.toFixed(2)}</li>`;
    document.getElementById("cart-items").innerHTML += cartItem;
    updateCartTotal();
  } else {
    alert("Please enter a quantity between 1 and 10.");
  }
}

// Function to update total in shopping cart
function updateCartTotal() {
  let total = 0;
  document.querySelectorAll("#cart-items li").forEach((item) => {
    total += parseFloat(item.textContent.replace(/[^\d.-]/g, ""));
  });
  document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
}
// Function to clear order form and shopping cart
function clearOrder() {
  // Reset quantity input fields to default value
  document.querySelectorAll("input[type='number']").forEach((input) => {
    input.value = "1";
  });

  // Clear items in the shopping cart
  document.getElementById("cart-items").innerHTML = "";

  // Update total in shopping cart to $0.00
  document.getElementById("cart-total").textContent = "$0.00";
}

// Event listener for clearing order
document
  .getElementById("clear-order-btn")
  .addEventListener("click", function () {
    clearOrder();
  });

// Function to display confirmation message
function displayConfirmationMessage() {
  const confirmationMessage = document.createElement("p");
  confirmationMessage.textContent = "Your order has been successfully placed!";
  confirmationMessage.classList.add("confirmation-message");

  const shoppingCart = document.getElementById("shopping-cart");
  shoppingCart.appendChild(confirmationMessage);
}

// Event listener for form submission (place order)
document
  .getElementById("order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Check if there are items in the shopping cart
    const cartItems = document.querySelectorAll("#cart-items li");
    if (cartItems.length === 0) {
      alert("Please add items to your cart before placing an order.");
      return; // Exit the function if there are no items in the cart
    }

    // If there are items in the cart, display confirmation message
    displayConfirmationMessage();
  });
