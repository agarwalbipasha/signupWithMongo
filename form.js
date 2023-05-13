var submit = document.querySelector('input[type="submit"]');
// console.log(submit);
submit.addEventListener("click", formValidation);

function formValidation(event) {
  event.preventDefault();
  var regexName = /^[A-Za-z]+$/;
  var regexMail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  var firstNameValid = false;
  var lastNameValid = false;
  var emailValid = false;
  var passwordValid = false;
  var confirmValid = false;
  var checkboxValid = false;

  //First name validation
  var fname = document.getElementById("fname").value;
  var firstNameWarning = document.querySelector(".firstName");
  if (!regexName.test(fname)) {
    firstNameWarning.style.display = "block";
    firstNameValid = false;
  } else {
    firstNameWarning.style.display = "none";
    firstNameValid = true;
  }

  //Last name validation
  var lname = document.getElementById("lname").value;
  var lastNameWarning = document.querySelector(".lastName");
  if (!regexName.test(lname)) {
    lastNameWarning.style.display = "block";
    lastNameValid = false;
  } else {
    lastNameWarning.style.display = "none";
    lastNameValid = true;
  }

  //Email validation
  var email = document.getElementById("email").value;
  var emailWarning = document.querySelector(".email");
  if (!regexMail.test(email)) {
    emailWarning.style.display = "block";
    emailValid = false;
  } else {
    emailWarning.style.display = "none";
    emailValid = true;
  }

  //Password validation
  var password = document.getElementById("password").value;
  var passwordWarning = document.querySelector(".password");
  if (!regexPassword.test(password) && password.length < 8) {
    passwordWarning.style.display = "block";
    passwordValid = false;
  } else {
    passwordWarning.style.display = "none";
    passwordValid = true;
  }

  //Confirm validation
  var confirm = document.getElementById("confirm").value;
  var confirmWarning = document.querySelector(".confirm");
  if (password != confirm) {
    confirmWarning.style.display = "block";
    confirmValid = false;
  } else {
    confirmWarning.style.display = "none";
    confirmValid = true;
  }

  //Checkbox Validation
  var checkbox = document.getElementById("checkbox");
  if (checkbox.checked) {
    checkboxValid = true;
  } else {
    checkboxValid = false;
  }

  if (
    firstNameValid &&
    lastNameValid &&
    emailValid &&
    passwordValid &&
    confirmValid &&
    checkboxValid
  ) {
    // alert("The form is submitted");

    document.querySelector("form").reset();
  }
}
