document.querySelector("form").addEventListener("submit", loginFunction);
let userList = JSON.parse(localStorage.getItem("users"));

function loginFunction(event) {
    event.preventDefault();

    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;

    let flag = false;
    for (let i = 0; i < userList.length; i++) {
        if (email == userList[i].email && pass == userList[i].pass) {
            flag = true;
            localStorage.setItem("loggedInUser", JSON.stringify(userList[i]));
        }
    }
    if (flag == true) {
        alert("Log in successful")
        window.location.assign("app.html");
    } else {
        alert("Wrong email or password");
    }
}