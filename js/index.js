const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

const lblEmailError = document.getElementById("emailError");
const lblPasswordError = document.getElementById("passwordError");

const loginUser = document.getElementById("login");

const loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
    window.location.replace("homepage.html");
}

function handleKeyDown(e, onKeyDownID) {
    if (e.key === "Enter") {
        return login()
    }
    const lblInputError = document.getElementById(onKeyDownID);
    lblInputError.style.display = "none";
}

function handleEmailValidation() {
    if (inputEmail.value == "") {
        return setError(inputEmail, lblEmailError, 'email', "E-mail input cannot be empty")
    }

    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(inputEmail.value)) {
        return setError(inputEmail, lblEmailError, 'email', "E-mail input must be an email")
    }


    lblEmailError.style.display = "none";
    inputEmail.style.border = "none";
    emailError = false
}

function handlePasswordValidation() {
    if (inputPassword.value == "") {
        return setError(inputPassword, lblPasswordError, 'password', "Password input cannot be empty")
    }
    const users = JSON.parse(localStorage.getItem("users"))
    if (users?.find(user => user.password === inputPassword.value))

        inputPassword.style.border = "none";
    lblPasswordError.style.display = "none";
    passwordError = false
}

function findUser() {

    const users = JSON.parse(localStorage.getItem("users"))
    const user = users?.find(user => user.email === inputEmail.value && user.password === inputPassword.value)

    if (!user) {
        setError(inputEmail, lblEmailError, 'email', "Username may be incorrect")
        setError(inputPassword, lblPasswordError, 'password', "Password may be incorrect")
        inputPassword.value = ""
        return
    }
    return user
}

function setError(inputElem, lblElem, errorType, errorName) {
    inputElem.style.border = "2px solid red";
    lblElem.style.display = 'block';
    lblElem.style.color = 'rgb(255, 0, 0)';
    lblElem.innerHTML = errorName;

    switch (errorType) {
        case 'email':
            emailError = true
            break;
        case 'password':
            passwordError = true
            break;
        default:
    }
}

function login() {

    handleEmailValidation()
    handlePasswordValidation()

    const haveError = emailError || passwordError
    if (haveError) return;

    const user = findUser()

    if (!haveError && user) {
        localStorage.setItem("loggedInUser", user.name);
        window.location.replace("homepage.html");
        return alert("LOGIN SUCCESSFUL");
    }
}