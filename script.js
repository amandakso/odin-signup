const btn = document.getElementById('btn');

btn.addEventListener("click", function () {
    let register = document.getElementById("register");
    let first = document.getElementById("first-name");
    let last = document.getElementById("last-name");
    let email = document.getElementById("email");
    let num = document.getElementById("phone-number");
    let password = document.querySelector('[name="password"]').value;
    let confirm = document.querySelector('[name="confirm"]').value;
    
    if(!first.checkValidity() || !last.checkValidity() || !email.checkValidity() || !num.checkValidity()) {
        register.innerHTML = "Invalid response. Try again"
    }
    else if (password == confirm && password != "") {
       register.innerHTML = "You are registered!"
    }
    else {
        register.innerHTML = "Passwords do not match. You are not registered!"
    }
});