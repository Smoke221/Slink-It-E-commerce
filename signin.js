let btn = document.querySelector(".submit-btn");
let firstname = document.querySelector(".first-name");
let lastname = document.querySelector(".last-name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let password2 = document.querySelector(".password2")


btn.addEventListener("click", e => {
   e.preventDefault();
    console.log("wor")
    validateInputs();
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
    } else {
        setSuccess(firstname);
    }

    if (lastnameValue === "") {
        setError(lastname, "Lastname is required")
    } else {
        setSuccess(lastname);
    }

    if(emailValue === "") {
        setError(email, "Email is required");
    }else if(!isValidEmail(emailValue)){
        setError(email, "Provide a valid email address");
    }else {
        setSuccess(email);
    }

    if(passwordValue === "") {
        setError(password, "Password is required");
    }else if(passwordValue.length < 8) {
        setError(password, "Password must be atleast 8 characters");
    }else {
        setSuccess(password)
    }

    if(password2Value ==="") {
        setError(password2, "Please confirm your password");
    }else if(password2Value !== passwordValue){
        setError(password2, "Passwords don't match");
    }else {
        setSuccess(password2);
    }
}
