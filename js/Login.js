var email = document.getElementById("email");
var passwrd = document.getElementById("password");
var errortxt = document.getElementById("errortext");
var accounterr = document.getElementById("accounterror");
var emailerr = document.getElementById("emailerror");
var passworderr = document.getElementById("passworderror");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

function RestrictSpace() {
    if (event.keyCode == 32) {
        return false;
    }
  }

function myFunction() {
    if (passwrd.type === "password") {
      passwrd.type = "text";
    } else {
      passwrd.type = "password";
    }
  }


email.onkeyup = function() {
    email.classList.remove("is-invalid");
    emailerr.style.display = "none" ;
    emailerr.classList.remove("invalid-feedback");
}

passwrd.onkeyup = function(){
    passwrd.classList.remove("is-invalid");
    passworderr.style.display = "none" ;
    passworderr.classList.remove("invalid-feedback");
}



var btn = document.getElementById("btn").addEventListener('click' , function(event){

    if (passwrd.type === "text") {
        passwrd.type = "password"; 
      }
 
    if (email.value.trim() === ""){
      email.classList.add("is-invalid");
    }

    if (passwrd.value.trim() === ""){
      passwrd.classList.add("is-invalid");
      passworderr.style.display = "block" ;
      passworderr.classList.add("invalid-feedback"); 
    }

    if(email.value.match(mailformat)){
    email.type = "email";
    return true;
    }

    else{
        email.classList.add("is-invalid");
        emailerr.style.display = "block" ;
        emailerr.classList.add("invalid-feedback"); 
        passwrd.value = "";
    }

    if(passwrd.value.match(passformat)){
        return true;
        }
    
    else{
        passwrd.classList.add("is-invalid");
        pasworderr.style.display = "block" ;
        passworderr.classList.add("invalid-feedback"); 
        passwrd.value = "";
        }

    /*If user's pass or email is incorrect */
    if (passwrd != correct){
        errortxt.style.display = "block";
        errortxt.classList.add("invalid-feedback");
    }
    /*If doesn't have an account */
    if (account != exist){
        accounterr.style.display = "block";
        accounterr.classList.add("invalid-feedback");
    }
    })