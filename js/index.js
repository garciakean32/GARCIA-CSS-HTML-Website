const setEmail = document.getElementById("email");
const setPassword = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const loginUser = document.getElementById("login");

loginUser.addEventListener("click", function (e) {
    e.preventDefault();

    emailStorage = localStorage.getItem("email");
    passwordStorage = localStorage.getItem("password");
    emailValue = setEmail.value.trim();
    passwordValue = setPassword.value.trim();

    if (setEmail.value == "") {
        emailError.innerHTML = "E-mail input cannot be empty *";
        setEmail.style.border = "2px solid red";
        setPassword.style.border = "0px solid red";
        emailError.style.display = "block";
        passwordError.style.display = "none";
        return false;
    }

    else if (emailValue != emailStorage) {
        setPassword.value = "";
        emailError.innerHTML = "Incorrect Email *";
        setEmail.style.border = "2px solid red";
        setPassword.style.border = "0px solid red";
        emailError.style.display = "block";
        passwordError.style.display = "none";
        return false;
    }

    else {
        emailError.style.display = "none";
        setEmail.style.border = "none";
    }

    if (setPassword.value == "") {
        passwordError.innerHTML = "Password input cannot be empty *";
        setPassword.style.border = "2px solid red";
        passwordError.style.display = "block";
        return false;
    }

    else if (passwordValue != passwordStorage) {
        setPassword.value = "";
        passwordError.innerHTML = "Incorrect Password *";
        setPassword.style.border = "2px solid red";
        passwordError.style.display = "block";
        return false;
    }

    else {
        passwordError.style.display = "none";
        setPassword.style.border = "none";
    }

    if (emailValue == emailStorage && passwordValue == passwordStorage) {
        return window.location.replace("homepage.html");
    }
});