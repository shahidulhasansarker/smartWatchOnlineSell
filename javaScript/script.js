const ringButtons = document.querySelectorAll('.ring-button');
for (i = 0; i < ringButtons.length; i++) {
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener('click', function(event){
        for (let j = 0; j < ringButtons.length; j++){
            ringButtons[j].classList.remove("border-purple-700");
            // ringButtons[j].classList.add("border-red-700");
        }


        // color add wortest
        event.target.classList.add("border-purple-700");
        // event.target.classList.remove("border-red-700");

        const productImage = document.getElementById("product-image");
        productImage.src = "../images/gray.png";
    });
}