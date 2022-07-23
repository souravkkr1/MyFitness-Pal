document.querySelector("form").addEventListener("submit", signupFunc);
let userList = JSON.parse(localStorage.getItem("users")) || [];


function signupFunc(event) {
    event.preventDefault();
    let userDetail = {
        name: document.querySelector("#name").value,
        phone: document.querySelector("#phone").value,
        email: document.querySelector("#email").value,
        pass: document.querySelector("#password").value
    }
    userList.push(userDetail);
    localStorage.setItem("users", JSON.stringify(userList));
    window.location.assign("login.html")
};