let bag = [];
let count = 0;
let cartItems = JSON.parse(localStorage.getItem("cartproducts")) || [];
fetch("https://6369e566c07d8f936d8de18f.mockapi.io/products")
    .then((fromResolve) => fromResolve.json())
    .then((data) => {
        bag = data;
        // console.log(data);
        displayCard(data);
    });



function displayCard(data) {
    document.querySelector(".grocery-items").innerHTML = "";
    data.forEach(function (ele) {
        let divs = document.createElement("div")
        divs.setAttribute("class", "prod-content")
        let image = document.createElement("img")
        image.setAttribute("src", ele.image)
        let name = document.createElement("h2")
        name.innerText = ele.name
        let price = document.createElement("p")
        price.innerText = "MRP rs:" + ele.price 
        let cart = document.createElement("button")
        cart.setAttribute("class", "groc-btn")
        cart.innerText = "Add to Cart"

        cart.addEventListener("click", function () {
            console.log(ele)
            addToCart(ele)
            addedToCart(ele)
        })
        // cart.addEventListener() {
        //     addToCart(ele)
        //     console.log(ele)
        //     cartItems.push(ele)
        //     // localStorage.setItem("cartproducts", JSON.stringify(cartItems)) 
        // })
        let anchor = document.createElement("a")
        anchor.setAttribute("href", "cart.html")
        let cartext = document.createElement("p")
        let emptyptag = document.createElement("p")
        let addedtocart = document.createElement("div")
        addedtocart.setAttribute("id","added")
        let counticon = document.createElement("ion-icon")
        counticon.setAttribute("name", "add-outline")
        cart.append(cartext, emptyptag, counticon, anchor)
        divs.append(image, name, price, cart)
        document.querySelector(".grocery-items").append(divs)
    })
}
// console.log(count)
function search() {
    // console.log("typing")
    let a = document.querySelector(".search-input").value
    console.log(a)
    let newData = bag.filter(function (ele) {
        return ele.name.toLowerCase().includes(a.toLowerCase())
    })
    console.log(newData)
    displayCard(newData)
}

function handleSort() {
    let selected = document.querySelector("select").value;
  
    if (selected === "HTL") {
      bag.sort((a, b) => b.price - a.price);
    } else if (selected === "LTH") {
      bag.sort((a, b) => a.price - b.price);
    } else if (selected === "AZ") {
      bag.sort((a, b) => {
        if (a.name && b.name) {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
    } else if (selected === "ZA") {
      bag.sort((a, b) => {
        if (a.name && b.name) {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
    }
  
    displayCard(bag);
  }


// let noti = document.querySelector(".fafa");
// let select = document.querySelector(".select");
// let button = document.querySelector(".groc-btn")

// for(but of button){
//     but.addEventListener("click", (e) => {
//         let add = Number(noti.getAttribute("data-count")|| 0);
//         noti.setAttribute("data-count", add + 1);
//         noti.classList.add("zero")
//     })
// }

function addToCart(ele) {
    let cartData = JSON.parse(localStorage.getItem("cartproducts")) || [];
    // console.log(cartData) 
    // console.log(ele)
    let flag = false;
    if (cartData.length === 0) {
        ele.quantity = 1;
        cartData.push(ele)
    } else {
        for (let i = 0; i < cartData.length; i++) {
            if (flag == true) {
                break;
            }
            else if (cartData[i].id == ele.id) {
                flag = true;
                cartData[i].quantity++;
                console.log("working")
            }
        }
        if (flag == false) {
            ele.quantity = 1;
            cartData.push(ele);
        }
    }
    // console.log(cartData.length)

    cartData = JSON.stringify(cartData)
    localStorage.setItem("cartproducts", cartData)
}

function addedToCart(ele){
    document.querySelector("#added").innerHTML = "Added To Cart"
}