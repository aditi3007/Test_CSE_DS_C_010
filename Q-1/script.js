const productPrice = 15;

function updateTotalPrice() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = productPrice * quantity;
    document.getElementById("total-price").innerText = totalPrice;
}

function addToCart() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = productPrice * quantity;
    alert(`You added ${quantity} item(s) to your cart for Rs. ${totalPrice}.`);
}
