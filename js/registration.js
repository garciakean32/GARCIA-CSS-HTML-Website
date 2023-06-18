const inputSetEmail = document.getElementById("email");
const inputSetPassword = document.getElementById("password");
const inputSetConfirmPassword = document.getElementById("confirmPassword");
const inputSetFullname = document.getElementById("fullname");

const lblEmailError = document.getElementById("emailError");
const lblPasswordError = document.getElementById("passwordError");
const lblConfirmPasswordError = document.getElementById("confirmPasswordError");
const lblNameError = document.getElementById("nameError");

function previousPage() {
    window.location.replace("index.html");
};

let emailError = false
let passwordError = false
let confirmPasswordError = false
let nameError = false

function handleKeyDown(onKeyDownID) {
    const lblInputError = document.getElementById(onKeyDownID);
    lblInputError.style.display = "none";
}

function handleEmailValidation() {
    if (inputSetEmail.value == "") {
        return setError(inputSetEmail, lblEmailError, 'email', "E-mail input cannot be empty")
    }

    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(inputSetEmail.value)) {
        return setError(inputSetEmail, lblEmailError, 'email', "E-mail input must be an email")
    }

    const users = JSON.parse(localStorage.getItem("users"))
    if (users?.find(user => user.email === inputSetEmail.value)) {
        return setError(inputSetEmail, lblEmailError, 'email', "E-mail already exist")
    }

    lblEmailError.style.display = "none";
    inputSetEmail.style.border = "none";
    emailError = false
}

function handlePasswordValidation() {
    if (inputSetPassword.value == "") {
        return setError(inputSetPassword, lblPasswordError, 'password', "Password input cannot be empty")
    }

    inputSetPassword.style.border = "none";
    lblPasswordError.style.display = "none";
    passwordError = false
}

function handleConfirmPasswordValidation() {
    if (inputSetConfirmPassword.value == "") {
        return setError(inputSetConfirmPassword, lblConfirmPasswordError, 'confirmPassword', "Confirm Password input cannot be empty")
    }
    if (inputSetConfirmPassword.value != inputSetPassword.value) {
        inputSetConfirmPassword.value = "";
        return setError(inputSetConfirmPassword, lblConfirmPasswordError, 'confirmPassword', "Password did not match")
    }
    inputSetConfirmPassword.style.border = "none";
    lblConfirmPasswordError.style.display = "none";
    confirmPasswordError = false
}

function handleNameValidation() {
    if (inputSetFullname.value == "") {
        return setError(inputSetFullname, lblNameError, 'name', "Name input cannot be empty")
    }
    lblNameError.style.display = "none";
    inputSetFullname.style.border = "none";
    nameError = false

}

function setError(inputElem, lblElem, errorType, errorName) {
    inputElem.style.border = "2px solid red";
    lblElem.style.display = 'block'
    lblElem.style.color = 'rgb(255, 0, 0)'
    lblElem.innerHTML = errorName

    switch (errorType) {
        case 'email':
            emailError = true
            break;
        case 'password':
            passwordError = true
            break;
        case 'confirmPassword':
            confirmPasswordError = true
            break;
        case 'name':
            nameError = true
            break;
        default:
    }
}

function handleRegister() {
    handleEmailValidation()
    handlePasswordValidation()
    handleConfirmPasswordValidation()
    handleNameValidation()

    const haveError = emailError || passwordError || confirmPasswordError || nameError

    if (!haveError) {
        const user = {
            email: inputSetEmail.value.trim(),
            password: inputSetPassword.value.trim(),
            name: inputSetFullname.value.trim()
        }

        let users = JSON.parse(localStorage.getItem("users"))
        if (!users) users = []
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));
        window.location.replace("index.html");
        return alert("REGISTRATION SUCCESSFUL");
    }
}
