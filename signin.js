let btn = document.querySelector(".submit-btn");
let firstname = document.querySelector(".first-name");
let lastname = document.querySelector(".last-name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let password2 = document.querySelector(".password2");



function signup(e) {
    event.preventDefault();
    let firstname = document.querySelector(".first-name").value
    let lastname = document.querySelector(".last-name").value
    let email = document.querySelector(".email").value
    let password = document.querySelector(".password").value
    let password2 = document.querySelector(".password2").value

    let user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    };

    let json = JSON.stringify(user);
    localStorage.setItem("userdetails", json)
    console.log('user added')

}




btn.addEventListener("click", e => {
    e.preventDefault();
    validateInputs();
    signup();
<<<<<<< HEAD
    window.location.href="signup.html"
=======
>>>>>>> 74d692e99490bc6bd9a618487ccfbbbb93edba9f
});
let setError = (element, message) => {
    let inputControl = element.parentElement
    let errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}
let isValidEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let validateInputs = () => {
    let firstnameValue = firstname.value.trim();
    let lastnameValue = lastname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if (firstnameValue === "") {
        setError(firstname, "Firstname is required")
    // } else {
    //     setSuccess(firstname, true);
     }

    if (lastnameValue === "") {
        setError(lastname, "Lastname is required")
    // } else {
    //     setSuccess(lastname, true);
    }

    if (emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    // } else {
    //     setSuccess(email, true);
    }

    if (passwordValue === "") {
        setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be atleast 8 characters");
    // } else {
    //     setSuccess(password, true)
    }

    if (password2Value === "") {
        setError(password2, "Please confirm your password");
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
    // } else {
    //     setSuccess(password2, true);
    }
}
