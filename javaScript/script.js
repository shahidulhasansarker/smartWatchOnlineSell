// This function is for click circle button and it will bordered and product photo will be change
const ringButtons = document.querySelectorAll('.ring-button');
let productImageBase = "../images/"
for (i = 0; i < ringButtons.length; i++) {
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener('click', function(event){
        const color = event.target.id.replace("-color","")
        // console.log('color')
        for (let j = 0; j < ringButtons.length; j++){
            ringButtons[j].classList.remove("border-purple-700");
            // ringButtons[j].classList.add("border-red-700");
        }
        // color add wortest
        event.target.classList.add("border-purple-700");
        // event.target.classList.remove("border-red-700");
        const productImage = document.getElementById("product-image");
        // productImage.src = "../images/gray.png";
        productImage.src = "../images/" + color + ".png";
    });
}
// This function is for click round button and it will be select plus it will be bordered
function selectWristSize(size){
    const sizes = ['S', 'M', 'L', 'XL'];
    for (let i =0; i < sizes.length; i++){
        // console.log(sizes)
        const abc = sizes[i];
        // console.log(abc)
        const button = document.getElementById("size-" + sizes[i]);
        // size-S; size-M; size-L; size-XL
        // console.log(button)
        const element = sizes[i];
        if(size === element){
            button.classList.add("border-purple-700");
        }
        else{
            button.classList.remove("border-purple-700");
        }
    }
}
// This function is for increase/decrease product quentity
const quantityElements = document.querySelectorAll('.quantity-button');
for (let btn of quantityElements){
    // console.log(btn)
    btn.addEventListener('click', function(event) {
        // console.log(event.target.innerText)
        const amount = event.target.innerText === '+' ? 1 : -1;
        // console.log(amount)
        const quantityElement = document.getElementById('quantity');
        const currentQuentity = parseInt(quantityElement.innerText);
        const newQuantity = Math.max(0, currentQuentity + amount);
        quantityElement.innerText = newQuantity;
    })
}
// Add to cart

let cartCount = 0;
let cardItems = [];
document.getElementById('add-to-cart').addEventListener('click', function(){
    const quantity = parseInt(document.getElementById('quantity').innerText);
    if(quantity > 0){
    document.getElementById('checkout-container').classList.remove('hidden');
    cartCount = cartCount + quantity;
    document.getElementById('cart-count').innerText = cartCount;

    const selectedColorButton = document.querySelector('button.border-purple-700.w-6');
    const selectedColor = selectedColorButton.id.split("-")[0];
    const selectedSizeButton = document.querySelector("button.border-purple-700:not(.w-6)");
    const selectedSize = selectedSizeButton.innerText.split(" ")[0];
    const selectedPrice = selectedSizeButton.innerText.split(" ")[1].split("$")[1];

    
    

    cardItems.push({
        image: selectedColor + ".png",
        title : "Classy Modern Smart Watch",
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: quantity * parseInt(selectedPrice),

    });
    console.log(cardItems);
    
    }
    else alert('You Have to select Minimum 1 Pic Product. Thank you!!');
})

document.getElementById("checkout-btn").addEventListener('click', function(){
    const cartModal = document.getElementById("cart-modal");
    const cartContainer = document.getElementById("cart-items");

    for(let i = 0; i < cardItems.length; i++){
    const item = cardItems[i];
    console.log(item);
    const row = document.createElement('tr');
    row.classList.add("border-b");

    row.innerHTML = `
    <td>
        <div class = "flex items-center space-x-2">
        <img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${item.image}" alt="">
        <span class = "font-semibold">${item.title}</span>
        </div>
    </td>
    <td class="py-2 px-4">${item.size}</td>
    <td class="py-2 px-4">${item.color}</td>
    <td class="py-2 px-4">${item.quantity}</td>
    <td class="py-2 px-4">$${item.price}</td>
    `;
    cartContainer.appendChild(row);
    };
    

    cartModal.classList.remove('hidden');
});
