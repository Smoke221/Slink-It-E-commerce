let bag = [];
let count = 0;
let cartItems=JSON.parse(localStorage.getItem("cartproducts")) || [] ;
fetch("https://6369e566c07d8f936d8de18f.mockapi.io/products")
    .then((fromResolve) => fromResolve.json())
    .then((data) => {
        bag = data;
        console.log(data);
        displayCard(data);
    });

function displayCard(data) {
    // document.querySelector("grocery-items").innerHTML = "";
    data.forEach(function (ele) {
        let divs = document.createElement("div")
        divs.setAttribute("class", "prod-content")
        let image = document.createElement("img")
        image.setAttribute("src", ele.image)
        let name = document.createElement("h2")
        name.innerText = ele.name
        let price = document.createElement("p")
        price.innerText = ele.price
        let cart = document.createElement("button")
        cart.setAttribute("class", "groc-btn")
        cart.innerText = "Add to Cart"
        cart.addEventListener("click", function () {
            cartItems.push(ele)
            localStorage.setItem("cartproducts", JSON.stringify(cartItems))
        })
        let anchor = document.createElement("a")
        anchor.setAttribute("href","cart.html")
        let cartext = document.createElement("p")
        let counticon = document.createElement("ion-icon")
        counticon.setAttribute("name", "add-outline")
        cart.append(cartext, counticon,anchor)
        divs.append(image, name, price, cart)
        document.querySelector(".grocery-items").append(divs)
    })
}