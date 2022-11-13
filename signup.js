let btn = document.querySelector("#submit-btn")
btn.addEventListener("click", function () {
    event.preventDefault();
    login()
})


function login(e) {
    event.preventDefault()
    let email = document.querySelector(".email").value
    let password = document.querySelector(".password").value
    let mailcheck = document.querySelector(".checkmail");
    let passcheck = document.querySelector(".checkpass");

    let user = localStorage.getItem("userdetails");
    let data = JSON.parse(user);

    if (email == "") {
        mailcheck.innerHTML = "email is required"
    }
    if(email != data.email) {
        mailcheck.innerHTML = "wrong username"
    }
    if( password != data.password){
        passcheck.innerHTML = "wrong password"
    }
    if(email == data.email && password == data.password){
        passcheck.innerHTML = "logged in"
    }
    if(passcheck.innerHTML == "logged in"){
      window.location.assign("index.html");
      alert("Login Success")  
    }
}