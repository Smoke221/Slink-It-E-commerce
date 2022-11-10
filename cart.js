let cartItems = JSON.parse(localStorage.getItem("cartproducts"))
let count = 0;
console.log(cartItems);
console.log(count)
displayCard(cartItems)

let totalCost = cartItems.reduce((acc,e) => acc+e.price, 0)
console.log(totalCost)
document.querySelector(".total-mrp").innerText = totalCost

let discount = cartItems.reduce((acc,e) => acc + e.discount, 0)
console.log(discount)
document.querySelector(".total-discount").innerText = discount;


let totalAmount = totalCost - discount
document.querySelector(".final-amount").innerText = totalAmount







function displayCard(data) {
    // document.querySelector("grocery-items").innerHTML = "";
    data.forEach(function (ele) {
        
        let divs = document.createElement("div")
        divs.setAttribute("class", "cItems")

        let divs2 = document.createElement("div")
        divs2.setAttribute("class", "item-image")

        let divs3 = document.createElement("div")
        divs3.setAttribute("class", "item-info")

        let image = document.createElement("img")
        image.setAttribute("src", ele.image)

        let name = document.createElement("h2")
        name.innerText = ele.name

        let price = document.createElement("p")
        price.innerText = ele.price

        let line = document.createElement("hr")


        divs.append(divs2, divs3)
        divs2.append(image);
        divs3.append(name, price)
        document.querySelector(".cart-items").append(divs, line);
    })
} 