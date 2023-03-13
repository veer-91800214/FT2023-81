
// Function to check only alphabet and spaces in given name field.
function allLetter(fieldName, errorFieldName) {
  document.getElementsByName(fieldName)[0].onchange = function () {
    inputtxt = document.getElementsByName(fieldName)[0].value;
    var pattern = /^[A-Za-z-' ]+$/;
    if (inputtxt.match(pattern)) {
      document.getElementsByName(errorFieldName)[0].innerHTML = "";
    } 
    else {
      document.getElementsByName(errorFieldName)[0].innerHTML =
        "Only letters and white space allowed";
    }
  };
}
// Function to check valid Indian phone no.
function validPhone(fieldName, errorFieldName) {
  document.getElementsByName(fieldName)[0].onkeyup = function () {
    inputtxt = document.getElementsByName(fieldName)[0].value;
    var pattern = /^[+][9][1][6-9][0-9]{9}$/;
    if (inputtxt.match(pattern)) {
      document.getElementsByName(errorFieldName)[0].innerHTML = "";
    } 
    else {
      if (inputtxt.slice(0, 3) != "+91") {
        document.getElementsByName(errorFieldName)[0].innerHTML =
          "Add +91 beggining";
      } 
      else {
        document.getElementsByName(errorFieldName)[0].innerHTML =
          "Invalid Number";
      }
    }
  };
}
// Function to check valid mail id.
function validMail(fieldName, errorFieldName) {
  document.getElementsByName(fieldName)[0].onkeyup = function () {
    inputtxt = document.getElementsByName(fieldName)[0].value;
    var pattern = /^[a-z0-9-.]{1,20}[@][a-z]{1,10}[.][a-z]{2,4}$/;
    if (inputtxt.match(pattern)) {
      document.getElementsByName(errorFieldName)[0].innerHTML = "";
    } 
    else {
      document.getElementsByName(errorFieldName)[0].innerHTML =
        "Invalid Mail Id";
    }
  };
} 
// Function to live update the display field with data from given name field.
function liveUpdate(fieldName) {
  document.getElementsByName(fieldName)[0].onkeyup = function () {
    document.querySelector("#display").value = document
      .getElementsByName("fname")[0]
      .value.toUpperCase()
      .concat(" ", document.getElementsByName("lname")[0].value.toUpperCase());
  };
}

// Function to check valid Indian phone no.
function validUser(fieldName, errorFieldName) {
  document.getElementsByName(fieldName)[0].onkeyup = function () {
    inputtxt = document.getElementsByName(fieldName)[0].value;
    var pattern = /^[A-Za-z-0-9' ]+$/;
    if (inputtxt.match(pattern)) {
      document.getElementsByName(errorFieldName)[0].innerHTML = "";
    } 
    else {
      document.getElementsByName(errorFieldName)[0].innerHTML =
        "User Id should only contain alphabet and number";
    }
  };
}

// Function to check Password has atleast one char,digit and Special character.
function validPass(fieldName, errorFieldName) {
  document.getElementsByName(fieldName)[0].onkeyup = function () {
    inputtxt = document.getElementsByName(fieldName)[0].value;
    var pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (inputtxt.match(pattern)) {
      document.getElementsByName(errorFieldName)[0].innerHTML = "";
    } 
    else {
      // Checks for atleast one digit.
      if (!inputtxt.match(/^(?=.*\d)/))
        document.getElementsByName(errorFieldName)[0].innerHTML =
          "<br>*Password should contain atleast one digit";
      // Checks for atleast one alphabet.
      else if (!inputtxt.match(/^(?=.*[a-z])(?=.*[A-Z])/))
        document.getElementsByName(errorFieldName)[0].innerHTML =
          "<br>*Password should contain atleast one uppercase and lowercase";
      else if (!inputtxt.match(/^(?=.*[!@#$%^&*])/))
        document.getElementsByName(errorFieldName)[0].innerHTML =
          "<br>*Password should contain atleast special character";
      else document.getElementsByName(errorFieldName)[0].innerHTML = "";
      
      if (length(inputtxt) < 8 && length(inputtxt) < 16) {
        document.getElementsByName(errorFieldName)[0].innerHTML =
          "<br>*Password should contain 8 to 16";
      }
    }
  };
}

// Toggle show and hide password script.
function togglePass(buttonField, passField) {
  const togglePassword = document.querySelector(buttonField);
  const password = document.querySelector(passField);

  togglePassword.addEventListener("click", function () {
    // Toggle the type attribute.
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // Toggle the icon.
    this.classList.toggle("bi-eye");
  });
}

// Countdown timer after some delay.
function countDown(displayQuerySelector, delay) {
  const field = document.querySelector(displayQuerySelector);
  let num = parseInt(delay);
  const i = setInterval(() => {
    num -= 1;
    field.innerText = num;
    if (num === 0) clearInterval(i);
  }, 1000);
}
