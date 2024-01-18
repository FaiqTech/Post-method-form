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
const succes = document.querySelector(".succes");
const notFound = document.querySelector(".notFound");

var a = true; // Bu değişken, gönderim (submit) işleminin yapılıp yapılmayacağını kontrol eder.

const baseUrl = "https://jsonplaceholder.typicode.com/posts"; // JSONPlaceholder'a gönderilecek POST isteğinin URL'si.

function submit(e, formData) {
  e.preventDefault(); // Formun varsayılan submit işlemini engeller.

  // Eğer 'a' değişkeni true ise, yani gönderim yapılacaksa:
  if (a == true) {
    // display() fonksiyonu, gönderim sonrası formu sıfırlar, gizler, bir mesaj gösterir ve ardından tekrar görünür yapar.
    function display() {
      form.reset(); // Formu sıfırlar.
      form.style.display = "none"; // Formu gizler.
      succes.style.display = "block"; // Mesajı görünür yapar.
      setTimeout(() => {
        form.style.display = "flex"; // Belirli bir süre sonra formu tekrar görünür yapar.
        succes.style.display = "none"; // Mesajı gizler.
      }, 2000); // 2000 milisaniye (2 saniye) sonra yukarıdaki işlemleri gerçekleştirir.
    }

    // fetch() fonksiyonu ile belirtilen URL'ye POST isteği yapılır.
    fetch(baseUrl, {
      method: "POST", // POST isteği.
      body: formData, // Form verilerini içeren FormData nesnesi gönderilir.
    })
      .then((response) => {
        console.log(response);
        display(); // İstek başarılı olursa display() fonksiyonu çağrılır.
        return response.json(); // JSON verisini döndürür.
      })
      .catch((error) => {
        console.log(error);
        form.style.display = "none"; // Eğer hata olursa formu gizler.
        notFound.style.display = "flex"; // Hata mesajını görünür yapar.
        display_error(); // display_error() fonksiyonunu çağrılır.
      });
  } else {
    // Eğer 'a' değişkeni false ise, yani gönderim yapılmayacaksa:
    display_error(); // display_error() fonksiyonunu çağrılır.
    function display_error() {
      form.style.display = "none"; // Formu gizler.
      notFound.style.display = "flex"; // Hata mesajını görünür yapar.

      // Belirli bir süre sonra formu tekrar görünür yapar ve hata mesajını gizler.
      setTimeout(() => {
        form.style.display = "flex";
        notFound.style.display = "none";
      }, 2000);
    }
  }
}

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
    number.style.border = "0.5px solid black";
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
  let form = this;
  let formData = new FormData(form);
  submit(e, formData);
});
