let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

//using array
let emailField = document.getElementById("emailField");
const email_inputs_array = [];

loginBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Log in";
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}

signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    loginBtn.classList.add("disable");
    signupBtn.classList.remove("disable");

    email_inputs_array.push(emailField.value);

    emailField.value = "";

    // Using forEach and settimeout
    email_inputs_array.forEach(function (email, index) {
        setTimeout(function () {
            console.log("Email " + (index + 1) + ": " + email);
        }, 3000 * (index + 1));
    });
}