const userName = document.getElementById("userName");

// user's name will appear on the page
const loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
    userName.innerHTML = "Welcome, " + loggedInUser;
}

if (!loggedInUser) {
    window.location.replace("index.html");
}

function logOut() {
    localStorage.removeItem("loggedInUser");
    window.location.replace("index.html");
};
