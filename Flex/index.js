document.addEventListener("DOMContentLoaded", function () {
    console.log("JS connected");

   
    const buttons = document.querySelectorAll("button");
    const loginBtn = buttons[0];
    const facebookBtn = buttons[1];
    const googleBtn = buttons[2];

    const signupBtn = document.querySelector("a");

    loginBtn.addEventListener("click", function () {
        alert("Login clicked (demo)");
    }); 
    
  
    facebookBtn.addEventListener("click", function () {
        window.location.href = "https://www.facebook.com/login/";
    });

    
    googleBtn.addEventListener("click", function () {
        window.location.href = "https://accounts.google.com/";
    });

    
    signupBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "signup.html"; 
    });
});
