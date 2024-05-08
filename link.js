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
        if(tgt.id == "featured-items") break;
        tgt = tgt.parentNode;
        if(tgt.classList.contains("add-to-cart")) {
            if(!tgt.style.backgroundColor){
                tgt.style.border = "1px solid green";
                tgt.style.backgroundColor = "green";
            }
            else {
                tgt.style.border = "";
                tgt.style.backgroundColor = "";
            }
        }

    }

})

let btnBrowse = document.getElementById("btn-browseAllProduct");
btnBrowse.addEventListener("click", function() {


    for(let i = 0; i < 16; i++) {
        let browseContent = document.getElementById("browseContent");

        let items = document.createElement("div");
                items.classList.add("items");
            let imgBox = document.createElement("div");
                imgBox.classList.add("img-box");
                imgBox.style.backgroundColor = "grey";
                let img = document.createElement("img");
                    img.classList.add("cart-img");
                let addToCart = document.createElement("div");
                    addToCart.classList.add("add-to-cart");
                    let shopimg = document.createElement("img")
                        shopimg.src = "/img/shopcartwhite.png";
                    let p = document.createElement("p")
                        p.innerHTML = "Add to Cart";
            let description = document.createElement("p");
                description.classList.add("description");
                description.innerHTML = "Mango People T-shirt";
            let price = document.createElement("p");
                price.classList.add("price");
                price.innerHTML = "$52.00";
        
        items.appendChild(imgBox);
            imgBox.appendChild(img);
            imgBox.appendChild(addToCart);
                addToCart.appendChild(shopimg);
                addToCart.appendChild(p);
        items.appendChild(description);
        items.appendChild(price);

        browseContent.appendChild(items);
    }

})