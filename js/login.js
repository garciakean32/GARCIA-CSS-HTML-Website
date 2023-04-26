const login = (username, password) => {
    const txtUsername = document.getElementById('username')
    const txtPassword = document.getElementById('password')
    const usernameInputValue = txtUsername.value
    const passwordInputValue = txtPassword.value
    // alert(`Username => ${usernameInputValue}\nPasword => ${passwordInputValue}`)
    alert(`Successfully Login!`)
    window.location.replace("index.html");
    // console.log("Username =>", username)
    // console.log("Password =>", password)
}