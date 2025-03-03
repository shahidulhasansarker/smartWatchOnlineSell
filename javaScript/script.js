// This function is for click circle button and it will bordered and product photo will be change
const ringButtons = document.querySelectorAll('.ring-button');
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
document.getElementById('add-to-cart').addEventListener('click', function(){
    const quantity = parseInt(document.getElementById('quantity').innerText);
    if(quantity > 0){
    document.getElementById('checkout-container').classList.remove('hidden');
    cartCount = cartCount + quantity;
    document.getElementById('cart-count').innerText = cartCount;
    }
    else alert('You Have to select Minimum 1 Pic Product. Thank you!!')
})