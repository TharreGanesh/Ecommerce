

let cart = [];

// Function to add item to cart
function addItemToCart(item) {
    cart.push(item);
    updateCart();
}

// Function to update cart
function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    let cartItems = "";
    let cartTotal = 0;

    cart.forEach((item, index) => {
        cartItems += `${index + 1}. ${item.name} - $${item.price}\n`;
        cartTotal += item.price;
    });

    cartItemsElement.innerText = cartItems;
    cartTotalElement.innerText = `Total: $${cartTotal}`;
}

// Add event listeners to add to cart buttons
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productElement = button.parentElement;
            const productName = productElement.querySelector("h3").innerText;
            const productPrice = parseFloat(productElement.querySelector("p").innerText.replace("Price: $", ""));

            addItemToCart({ name: productName, price: productPrice });
        });
    });
});
