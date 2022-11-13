let cartItems = JSON.parse(localStorage.getItem("cartproducts")) || []

displayCard(cartItems)

let totalCost = cartItems.reduce((acc,e) => acc+e.price, 0)
console.log(totalCost)
document.querySelector(".total-mrp").innerText = totalCost

let discount = cartItems.reduce((acc,e) => acc + e.discount, 0)
console.log(discount)
document.querySelector(".total-discount").innerText = "-" + discount;


let totalAmount = totalCost - discount
document.querySelector(".final-amount").innerText = totalAmount


let finalAmount = document.querySelector(".final-amount").innerText;
localStorage.setItem("amount-payable",finalAmount);


function displayCard(data) {
 document.querySelector(".cart-items").innerHTML = "";
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
        price.innerText = "₹" + ele.price

        // let removeButton = document.createElement("button")
        // removeButton.setAttribute("class", "remove-button")
        // removeButton.innerText = "REMOVE"

        let divs4 = document.createElement("divs");
        divs4.setAttribute("id","qty")

        let quantity = document.createElement("p")
        quantity.innerText = ele.quantity
        let minusbtn = document.createElement("button")
        minusbtn.setAttribute("id","minus")
        minusbtn.innerText = "-"
        let plusbtn = document.createElement("button")
        plusbtn.setAttribute("id","plus")
        plusbtn.innerText = "+"

        let line = document.createElement("hr")


        divs.append(divs2, divs3)
        divs2.append(image);
        divs3.append(name, price)
        divs4.append(minusbtn,quantity,plusbtn)
        document.querySelector(".cart-items").append(divs, divs4, line);
    })
} 

let removeCartItems = document.getElementsByClassName("remove-button");
//console.log(removeCartItems)

// for(let i=0; i<removeCartItems.length; i++){
//     let btn = removeCartItems[i]
//     btn.addEventListener("click",function(event){
//         let buttonClicked = event.target
//         buttonClicked.parentElement.remove(i)
//         updateCart();
//     })
// }

let orderButton = document.querySelector(".order-button")
orderButton.addEventListener("click", function(){
    window.location.href="payment.html"
})



let minusbtn = document.querySelector("#minus")
minusbtn.addEventListener("click",function(){
    console.log("working")
})

let plusbtn = document.querySelector("#plus")
plusbtn.addEventListener("click",function(){
    console.log("yess")
})