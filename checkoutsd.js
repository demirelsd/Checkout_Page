const products = document.querySelector('.products')
let subtotalEl = document.getElementById("cart-subtotal").lastElementChild
let cartTax = +document.getElementById("cart-tax").lastElementChild.innerHTML
let cartTaxEl = document.getElementById("cart-tax").lastElementChild;
let shipping = +document.getElementById("cart-shipping").lastElementChild.innerHTML
let shippingEl =
  document.getElementById("cart-shipping").lastElementChild;
let total = +document.getElementById("cart-total").lastElementChild.innerHTML;
let totalEl = document.getElementById("cart-total").lastElementChild;
let subTotal = +document.getElementById("cart-subtotal").lastElementChild.innerHTML
const productDiv = document.querySelectorAll(".product");
 const productLinePriceDivs = document.querySelectorAll(".product-line-price");

let quantity,productPrice,productTotal;


window.onload=()=>{
   changeSum();
}
products.onclick =(e)=>{     
productPrice = +e.target
  .closest(".product-info")
  .querySelector("div.product-price strong").innerText;

    if (e.target.classList.contains('fa-plus')){
        increase(e)
    
    }else if(e.target.classList.contains('fa-minus')){
        decrease(e)
    }else if (e.target.classList.contains('remove-product')){
        removeItem(e)
    }
    
   changeItem(e)
   changeSum()
   
    
}
function changeSum(){
   
    subTotal =0
    productLinePriceDivs.forEach((div) => {
      subTotal += +div.innerText;
    }); 
    cartTax = subTotal* 0.18
    shipping ||= 15
    total  =subTotal + cartTax 
    subtotalEl.innerHTML = subTotal.toFixed(2);
    cartTaxEl.innerHTML =cartTax.toFixed(2)
    shippingEl.innerHTML = shipping
    totalEl.innerHTML = total.toFixed(2)

}
function changeItem(e) {
    productTotal = productPrice * quantity;
    e.target.closest(".product-info").lastElementChild.innerHTML =  productTotal.toFixed(2);
}

function increase (e){
    quantity = +e.target.previousElementSibling.innerHTML +1  
    e.target.previousElementSibling.innerHTML = quantity;
      
  
}
function decrease (e){
    quantity = +e.target.nextElementSibling.innerHTML -1; 
    if (quantity === 0 ){
        let myConfirm =confirm('do you want to remove item?');
        myConfirm && removeItem(e);
        return;
    }
    
    e.target.nextElementSibling.innerHTML = quantity;
 
}
 function removeItem(e){
  
     e.target.closest(".product").remove();
 }

console.log(quantity);
  productsList = productsList.map(
    ({ quantity, productTotal, productPrice, name }) => ({
      quantity: quantity,
      productTotal: productPrice * quantity,
      name: name,
      productPrice: productPrice,
    })
  ); 
  

