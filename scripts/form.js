const form = document.getElementById("form");
const mainform = document.getElementById("main-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formButtons = document.querySelectorAll(".form-subscribe");

function showError(input, message) {
  const formControl = $(input).parent()[0];
  $(formControl).addClass("form-control error");
  const small = $(formControl).find("small")[0];
  $(small).text(message);
}

function showSuccess(input) {
  const formControl = $(input).parent()[0];
  $(formControl).removeClass("error");
  $(formControl).addClass("form-control success");
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email.value).toLowerCase())) {
    showError(email, "invalid email");
  } else {
    showSuccess(email);
  }
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
  if (input2.value === "") {
    showError(input2, "please enter password");
  } else if (input1.value !== input2.value) {
    showError(input2, `Password dosn't match`);
  } else {
    showSuccess(input2);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function submitSucess() {
  const properSubmittions = $(".success", "#form");
  const filledOptions = $(".form-control", "#form");
  if (properSubmittions.length === filledOptions.length) {
    $("#form-submission").text("SUBMISSION SUCCESS");
    setTimeout(() => {
      $("#form-submission").text("Submit");
    }, 3200);
    email.value = "";
    email.classList.remove(".success");
    username.value = "";
    username.classList.remove(".success");
    password.value = "";
    password.classList.remove(".success");
    password2.value = "";
    password2.classList.remove(".success");
  }
}

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  isValidEmail(email);
  checkInputLegth(username, 4, 15);
  checkInputLegth(password, 4, 20);
  passwordMatchCheck(password, password2);
  submitSucess();
});

for (let i = 0; i < formButtons.length; i++) {
  formButtons[i].addEventListener("click", () => {
    mainform.classList.toggle("reveal");
  });
}
