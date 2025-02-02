

document.addEventListener("DOMContentLoaded", () => {
  
  const menu = document.querySelector(".menu");
  const menuBtns = document.querySelectorAll(".menu-btn");
  const logo = document.querySelectorAll(".logo"); // Select all menu buttons
  const body = document.body;
  const header = document.querySelector(".header")

  if (header.classList.contains("scroll")) {
      
  }

  if (menu && menuBtns.length > 0) {
    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Toggle the menu visibility
        if (menu.classList.contains("block")) {
          // Hide the menu
          menu.classList.remove("block");
          body.classList.remove("menu-open");
          

          // Revert all buttons to "MENU"
          menuBtns.forEach((btn) => {
            btn.textContent = "MENU";
          });
        } else {
          
          // Show the menu
          menu.classList.add("block");
          body.classList.add("menu-open");
          header.classList.remove("scroll")

          // Change all buttons to "CLOSE"
          menuBtns.forEach((btn) => {
            btn.textContent = "CLOSE";
          });
        }
      });
    });
  } 








});










const variantA = document.querySelectorAll(".va")[0];
const variantB = document.querySelectorAll(".va")[1];
const variantC = document.querySelectorAll(".va")[2];
let price = document.getElementById("product-price")
variantA.classList.add("active");

variantB.addEventListener("click", (e) => {
  e.preventDefault()

  if ( variantA.classList.contains("active") || variantC.classList.contains("active")) {
    variantA.classList.remove("active");
    variantC.classList.remove("active");
  }
  
  variantB.classList.add("active");
   selectedPrice = variantB.getAttribute("data-price")
   price.innerText = selectedPrice


})

variantC.addEventListener("click", (e) => {
  e.preventDefault()

  if ( variantA.classList.contains("active") || variantB.classList.contains("active")) {
    variantA.classList.remove("active");
    variantB.classList.remove("active");
  }
  
  variantC.classList.add("active");
  selectedPrice = variantC.getAttribute("data-price")
   price.innerText = selectedPrice

})

variantA.addEventListener("click", (e) => {
  e.preventDefault()

  if ( variantC.classList.contains("active") || variantB.classList.contains("active")) {
    variantC.classList.remove("active");
    variantB.classList.remove("active");
  }
  
  variantA.classList.add("active");
  selectedPrice = variantA.getAttribute("data-price")
  price.innerText = selectedPrice

})


const add = document.querySelector(".add")
const remove = document.querySelector(".remove")
let quantity = document.querySelector(".quantity-input")


add.addEventListener("click", (e) => {
  e.preventDefault()
   quantityValue = parseInt(quantity.value)
   if (quantity.value === NaN || quantity.value < 1) {
      quantity.value = 1
   }else{
    quantity.value = quantityValue + 1
   }
})

remove.addEventListener("click", (e) => {
  e.preventDefault()
   quantityValue = parseInt(quantity.value)
   if (quantity.value == NaN || quantity.value < 1 || quantity.value == 1) {
      alert("you can't bro pleas select a quantity")
      
   }else{
    quantity.value = quantityValue - 1
   }
})






