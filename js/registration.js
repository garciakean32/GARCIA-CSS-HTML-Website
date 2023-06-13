const setEmail = document.getElementById("email");
const setPassword = document.getElementById("password");
const setConfirmPassword = document.getElementById("confirmPassword");
const setFullname = document.getElementById("fullname");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const nameError = document.getElementById("nameError");

const registerUser = document.getElementById("register");

const back = document.getElementById("arrowBack");

back.addEventListener("click", previousPage);

function previousPage() {
    window.location.replace("index.html");
};

registerUser.addEventListener("click", function (e) {
    e.preventDefault();

    if (setEmail.value == "") {
        setEmail.style.border = "2px solid red";
        emailError.style.display = "block"
        return false;
    }
    else {
        emailError.style.display = "none";
        setEmail.style.border = "none";
    }

    if (setPassword.value == "") {
        setPassword.style.border = "2px solid red";
        passwordError.style.display = "block"
        return false;
    }
    else {
        passwordError.style.display = "none";
        setPassword.style.border = "none";
    }

    if (setConfirmPassword.value == "") {
        confirmPasswordError.innerHTML = "Confirm password cannot be empty *";
        setConfirmPassword.style.border = "2px solid red";
        confirmPasswordError.style.display = "block"
        return false;
    }

    else if (setConfirmPassword.value != setPassword.value) {
        confirmPasswordError.innerHTML = "Incorrect confirm password *";
        setConfirmPassword.style.border = "2px solid red";
        confirmPasswordError.style.display = "block"
        return false;
    }

    else {
        setConfirmPassword.style.border = "none";
        confirmPasswordError.style.display = "none";
    }

    if (setFullname.value == "") {
        setFullname.style.border = "2px solid red";
        nameError.style.display = "block"
        return false;
    }
    else {
        emailValue = setEmail.value.trim();
        localStorage.setItem("email", emailValue);
        passwordValue = setPassword.value.trim();
        localStorage.setItem("password", passwordValue);
        fullnameValue = setFullname.value.trim();
        localStorage.setItem("fullname", fullnameValue);
        nameError.style.display = "none";
        setFullname.style.border = "none";
    }

    if (setEmail.value != "" && setPassword.value != "" && setConfirmPassword.value != "" && setFullname.value != "") {
        window.location.replace("index.html");
        return alert("REGISTRATION SUCCESSFUL");
    }
});