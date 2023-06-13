const userName = document.getElementById("userName");

// user's name will appear on the page
fullNameStorage = localStorage.getItem("fullname");
userName.innerHTML = "Welcome, " + fullNameStorage;

const logOut = document.getElementById("logout");

logOut.addEventListener("click", LoggingOut);

function LoggingOut() {
    window.location.replace("index.html");
};
