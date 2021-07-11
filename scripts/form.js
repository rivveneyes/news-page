const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = $(input).parent()[0];
  console.log(formControl);
  $(formControl).addClass("form-control error");
  const small = $(formControl).find("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(String(email.value).toLowerCase()));
  re.test(String(email.value).toLowerCase())
    ? console.log(getFieldName(email) + "working on email")
    : console.log("other");
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
function checkInputLegth(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} is less than ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} is more than ${max} characters`);
  } else {
    showSuccess(input);
  }
}
function passwordMatchCheck(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Password dosn't match`);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkInputLegth(username, 4, 15);
  checkInputLegth(password, 4, 20);
  isValidEmail(email);
  passwordMatchCheck(password, password2);
});
