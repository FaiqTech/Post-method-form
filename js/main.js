let form = document.querySelector("#form");
let name = document.querySelector(".user__name-inpt");
let surname = document.querySelector(".user__surname-inpt");
let fathername = document.querySelector(".user__fathername-inpt");
let email = document.querySelector(".user__email-inpt");
let number = document.querySelector(".user__phone");
let selectElement = document.querySelector(".request__select");
let requestSelect = document.querySelector("#requestSelect");
let request = document.querySelector(".request__textarea");
let message = document.querySelector(".message");
let warning = document.querySelector(".warning");
let error = document.querySelector(".error");
let errorMessage = document.querySelector(".errorMessage");
let warningMessage = document.querySelector(".warningMessage");
let bug = document.querySelector(".bug");
let selectError = document.querySelector(".selectError");
let selectWarning = document.querySelector(".selectWarning");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (name.value.trim() === "") {
    message.textContent = "Ad sahəsini doldurun";
    message.style.color = "red";
    name.style.border = "1px solid red";
  } else {
    message.textContent = "";
    name.style.border = "0.5px solid black";
  }

  if (surname.value.trim() === "") {
    warning.textContent = "Soyad sahəsini doldurun";
    warning.style.color = "red";
    surname.style.border = "1px solid red";
  } else {
    warning.textContent = "";
    surname.style.border = "0.5px solid black";
  }

  if (fathername.value.trim() === "") {
    error.textContent = "Ata adı sahəsini doldurun";
    error.style.color = "red";
    fathername.style.border = "1px solid red";
  } else {
    error.textContent = "";
    fathername.style.border = "0.5px solid black";
  }

  if (email.value.trim() === "") {
    errorMessage.textContent = "E-mail ünvanı sahəsini doldurun";
    errorMessage.style.color = "red";
    email.style.border = "1px solid red";
  } else {
    errorMessage.textContent = "";
    email.style.border = "0.5px solid black";
    if (!email.value.includes("@")) {
      errorMessage.textContent = "@ işarəsi daxil edin";
      errorMessage.style.color = "red";
      email.style.border = "1px solid red";
    }
  }

  if (number.value.trim() === "") {
    warningMessage.textContent = "Mobil nömrə sahəsini doldurun";
    warningMessage.style.color = "red";
    number.style.border = "1px solid red";
  } else {
    warningMessage.textContent = "";
    number.border = "0.5px solid black";
  }

  if (request.value.trim() === "") {
    bug.textContent = "Müraciət sahəsini doldurun";
    bug.style.color = "red";
    request.style.border = "1px solid red";
  } else {
    bug.textContent = "";
    request.style.border = "0.5px solid black";
  }

  if (selectElement.value === "0") {
    selectError.textContent = "Müraciət növünü seçin";
    selectError.style.color = "red";
    selectElement.style.border = "1px solid red";
  } else {
    selectError.textContent = "";
    selectElement.style.border = "0.5px solid black";
  }

  if (requestSelect.value === "0") {
    selectWarning.textContent = "Müraciətin qısa məzmununu seçin";
    selectWarning.style.color = "red";
    requestSelect.style.border = "1px solid red";
  } else {
    selectWarning.textContent = "";
    requestSelect.style.border = "0.5px solid black";
  }
});
