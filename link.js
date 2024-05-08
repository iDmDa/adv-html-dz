let demolink1 = document.querySelectorAll(".MegaMenu li");
demolink1.forEach(function(item) {
    item.addEventListener("click", function() {
        window.location.href = "product.html";
    });
});

let shoppingcart_menu = document.querySelectorAll("#shoppingcart-menu li");
shoppingcart_menu.forEach(function(item) {
    item.addEventListener("click", function() {
        window.location.href = "single_page.html";
    });
});

let checkout = document.querySelector("#shoppingcart-menu .checkout");
checkout.addEventListener("click", function() {
    window.location.href = "checkout.html";
});

let gotocadt = document.querySelector("#shoppingcart-menu .gotocadt");
gotocadt.addEventListener("click", function() {
    window.location.href = "shopping_cart.html";
});

let index_link = document.getElementById("header-top-logo");
index_link.addEventListener("click", function() {
    window.location.href = "index.html";
})

let addToCart = document.getElementById("featured-items");
addToCart.addEventListener("click", function(e) {
    console.log(e);
    let tgt = e.target;
    while (!tgt.classList.contains("add-to-cart")) {
        tgt = tgt.parentNode
    }
    if(!tgt.style.backgroundColor){
        tgt.style.border = "1px solid green";
        tgt.style.backgroundColor = "green";
    }
    else {
        tgt.style.border = "";
        tgt.style.backgroundColor = "";
    }


})