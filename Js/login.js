document.querySelector("form").addEventListener("submit", loginFunction);
let userList=JSON.parse(localStorage.getItem("users"));

function loginFunction(event){
    event.preventDefault();

    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#password").value;

    let flag=false;
    for(let i=0; i<userList.length; i++){
        if(email==userList[i].email && pass==userList[i].pass){
            flag=true;
        }
    }
    if(flag==true){
            alert("Log in successful")
            window.location.assign("about.html");
    }else{
        alert("Wrong email or password");
    }
}