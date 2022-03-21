var paswrd = document.getElementById("pwrd");
var myInput = document.getElementById("pwrd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var fname = document.getElementById("fullname");
var email = document.getElementById("email");  
var form = document.getElementById("regform")

function RestrictSpace() {
  if (event.key == "spacebar") {
      return false;
  }
}



function myFunction() {
    if (paswrd.type === "password") {
      paswrd.type = "text";
    } else {
      paswrd.type = "password";
    }
  }






// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  if((letter.className === "valid") && (capital.className === "valid") && (number.className === "valid") && (length.className === "valid")){
    document.getElementById("message").style.display = "none";
  }
  else{
  document.getElementById("message").style.display = "block";
  }
}


// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters

  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }



  if ((letter.className === "valid") && (capital.className === "valid") && (number.className === "valid") && (length.className === "valid")){
    document.getElementById("message").style.display = "none";
  }
  else{
    document.getElementById("message").style.display = "block";
    }

}



var btn = document.getElementById("btn").addEventListener('click' , function(event){
  
  if (paswrd.type === "text") {
    paswrd.type = "password"; 
  }

  if(fname.value.trim() === ""){
    fname.value = "";
    fname.classList.add("is-invalid");
  }

  if (email.value.trim() === ""){
    email.classList.add("is-invalid");
    
  }

  if (paswrd.value.trim() === ""){
    paswrd.classList.add("is-invalid"); 
  }

})




