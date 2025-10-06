function updatePricescake(productId) {
    var quantity = document.getElementById('quantity' + productId).value;
    var pricePerItem = 18.00; // Example price per item
    var totalPrice = quantity * pricePerItem;
    document.getElementById('price' + productId).textContent = 'RM' + totalPrice.toFixed(2);
    updateTotalPrice();
}

function updatePricewcake() {
    var quantity = document.getElementById('quantity').value;
    var pricePerItem = 550.00; // Example price per item
    var totalPrice = quantity * pricePerItem;
    document.getElementById('price').textContent = 'RM' + totalPrice.toFixed(2);
}

function updateTotalPrice(){
    // Get all the price spans
    const priceSpans = document.querySelectorAll('.product-price span');

    // Calculate the total price by summing up all individual prices
    let totalPrice = 0;
    priceSpans.forEach(priceSpan => {
        const price = parseFloat(priceSpan.textContent.replace('RM', ''));
        totalPrice += price;
    });

    // Update the total price span
    document.getElementById('totalPrice').textContent = 'Total Price: RM' + totalPrice.toFixed(2);
    }

function submitForm(){
    var selectedMode = document.querySelector('input[name="mode"]:checked');

    if(selectedMode){
        window.location.href = selectedMode.value + ".html";
    }else{
        alert("Please select delivery or pickup.")
    }
}