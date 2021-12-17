"use strict";

//rellenar form
const nameInput = document.querySelector(".js-fullname");
const nameCard = document.querySelector(".js-nameInput");
const jobInput = document.querySelector(".js-job");
const jobCard = document.querySelector(".js-jobInput");
const emailInput = document.querySelector(".js-email");
const emailPreview = document.querySelector(".js_preview_email");
const allInput = document.querySelectorAll(".fill__input-js");
//handler
/*function writeName() {
  if (nameInput.value === ''){
    nameCard.innerHTML = 'Nombre Apellido';
  } else {
    nameCard.innerHTML = nameInput.value;
  }
}
function writeJob() {
  if (jobInput.value === '') {
    jobCard.innerHTML = 'Front-end developer';
  } else {
    jobCard.innerHTML = jobInput.value;
  }
}
function handleKeyEmail() {
  emailPreview.href = `mailto:${emailInput.value}`;
}

//listener
nameInput.addEventListener('input', writeName);
jobInput.addEventListener('input', writeJob);
emailInput.addEventListener('keyup', handleKeyEmail);*/

let data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

function getUserData(input) {
  let userInputName = input.currentTarget.name;
  let userInputValue = input.currentTarget.value;
  if (userInputName === "name") {
    data.name = userInputValue;
    console.log(userInputValue);
  } else if (userInputName === "job") {
    data.job = userInputValue;
  } else if (userInputName === "phone") {
    data.phone = userInputValue;
  } else if (userInputName === "email") {
    data.email = userInputValue;
  } else if (userInputName === "linkedin") {
    data.linkedin = userInputValue;
  } else if (userInputName === "github") {
    data.github = userInputValue;
  }
}
function handleInputData(event) {
  event.preventDefault();
  getUserData(event);
}

//Listener form
for (const eachInput of allInput) {
  eachInput.addEventListener("keyup", handleInputData);
}

//Botón reset
const resetBtn = document.querySelector(".js-resetBtn");
resetBtn.addEventListener("click", () => {
  nameCard.innerHTML = "Nombre Apellido";
  jobCard.innerHTML = "Front-end developer";
});