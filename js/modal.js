const topnavIcon = document.querySelector("#icon");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    // topnavIcon.style.display = "none";
  } else {
    x.className = "topnav";
    //topnavIcon.style.display = "flex";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelector(".close");
const loginForm = document.querySelector("#loginForm");
const submitButton = document.querySelector(".btn-submit");
const modalbdy = document.querySelector(".modal-body");
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const email = document.querySelector("#email");
const birth = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const cityForm = document.querySelector(".cityForm");
const terms = document.querySelector("#checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal

function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
modalCross.addEventListener("click", closeModal);

// **********************************
// Form validation submit
// **********************************
const formSucces = document.createElement("div");

const formSuccesh1 = document.createElement("div");
const formSuccesh2 = document.createElement("div");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    validatePrenom() &&
    validateNom() &&
    validateEmail() &&
    validBirthdate() &&
    validateQuantity() &&
    validateLocation() &&
    validTerms()
  ) {
    loginForm.remove();
    formSucces.classList.add("succes");
    modalbdy.parentElement.appendChild(formSucces);
    formSucces.append(formSuccesh1);
    formSuccesh1.classList.add("succesMessageh1");
    formSuccesh1.textContent = "Bravo !";
    formSucces.append(formSuccesh2);
    formSuccesh2.classList.add("succesMessageh2");
    formSuccesh2.textContent = "Votre inscription à bien été prise en compte.";
  } else {
    validatePrenom();
    validateNom();
    validateEmail();
    validBirthdate();
    validateQuantity();
    validateLocation();
    validTerms();
  }
});

// **********************************
// Form validation RegExp
// **********************************

// *********Validation Prénom ********************
// 'p' creation for error message display

const prenomErrorMessage = document.createElement("p");

//Listening to modification
prenom.addEventListener("keyup", validatePrenom);

//Fonction & RegExp

//prenom regExp
function validatePrenom() {
  const prenomRegExp = /^[a-zA-ZÀ-ÿ-]+$/;

  //****check 'prenom' value lenth****
  if (prenom.value.length < 2) {
    //apply red border
    prenom.style.border = "3px solid crimson";
    //error message
    prenomErrorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le prénom.";
    //apply css class
    prenomErrorMessage.classList.add("errorClass");
    //Inject 'p' for error message display
    prenom.parentElement.appendChild(prenomErrorMessage);
    //return false in order to impeed form validation
    return false;

    //****check regExp validation****
  } else if (!prenomRegExp.test(prenom.value)) {
    //if RegExp non valid
    //apply red border
    prenom.style.border = "3px solid red";
    //error message
    prenomErrorMessage.textContent =
      "Le prénom ne peut pas contenir de chiffres, de caractères spéciaux ni d'espace.";
    //apply css class
    prenomErrorMessage.classList.add("errorClass");
    //inject 'p' for error message display
    prenom.parentElement.appendChild(prenomErrorMessage);
    impeed;
    //return false in order to impeed form validation
    return false;
  } else {
    //If none of above conditions are valids, user has put a correct firstname so:
    //apply green border
    prenom.style.border = "3px solid green";
    //Remove error message
    prenomErrorMessage.classList.remove("errorClass");
    prenomErrorMessage.textContent = "";
    //return true for submit form
    return true;
  }
}

// *********Validation Nom ********************
//'p' creation for error message display

const nomErrorMessage = document.createElement("p");

// //Listening to modification

nom.addEventListener("keyup", validateNom);

//Fonction et RegExp

//nom regExp
function validateNom() {
  const nomRegExp = /^[a-zA-ZÀ-ÿ-]+$/;

  //check value length
  if (nom.value.length < 2) {
    //apply red border
    nom.style.border = "3px solid red";
    //error message
    nomErrorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le nom.";
    //apply css class
    nomErrorMessage.classList.add("errorClass");
    //inject 'p' for error message display
    nom.parentElement.appendChild(nomErrorMessage);
    //return false in order to impeed form validation
    return false;

    //****check regExp validation****
  } else if (!nomRegExp.test(nom.value)) {
    //if RegExp non valid
    //apply red border
    nom.style.border = "3px solid red";
    //error message
    nomErrorMessage.textContent =
      "Le nom ne peut pas contenir de chiffres, de caractères spéciaux ni d'espace.";
    //apply css class
    nomErrorMessage.classList.add("errorClass");
    //inject 'p' for error message display
    nom.parentElement.appendChild(nomErrorMessage);
    //return false in order to impeed form validation
    return false;
  } else {
    //If none of above conditions are valids, user has put a correct lasttname so:
    //apply green border
    nom.style.border = "3px solid green";
    //Remove error message
    nomErrorMessage.classList.remove("errorClass");
    nomErrorMessage.textContent = "";
    //return true for submit form
    return true;
  }
}

// *********Validation email ********************
// 'p' creation for error message display
const emailErrorMessage = document.createElement("p");

//Listening to modification

email.addEventListener("keyup", validateEmail);

//Fonction et RegExp

function validateEmail() {
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //****check regExp validation****

  //If regExp is not valid : Apply red border & error message
  if (!emailRegExp.test(email.value)) {
    email.style.border = "3px solid red";
    emailErrorMessage.textContent = "Veuillez saisir une adresse email valide";
    emailErrorMessage.classList.add("errorClass");
    email.parentElement.appendChild(emailErrorMessage);
    return false;
    //If regExp is valid : Apply green border & remove error message
  } else {
    email.style.border = "3px solid green";
    emailErrorMessage.classList.remove("errorClass");
    emailErrorMessage.textContent = "";
    return true;
  }
}

// *********Validation birthdate ********************

//Define current year
let currentYear = new Date().getFullYear();

// 'p' creation for error message display
const birthError = document.createElement("p");

//Listening to modification
birth.addEventListener("change", validBirthdate);

//Fonction & RegExp

//birthdate regExp
function validBirthdate() {
  const birthRegExp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

  //****check regExp validation****
  //If regExp is not valid : Apply red border & error message
  if (!birthRegExp.test(birth.value)) {
    birth.style.border = "3px solid red";
    birthError.textContent = "Veuilez entrer une date de naissance valide";
    birthError.classList.add("errorClass");
    birth.parentElement.appendChild(birthError);
    return false;
    //check if user has 18 y/o
  } else if (birthdate.value.split("-")[0] > currentYear - 18) {
    // if user has less than 18 y/o : Apply red border & error message
    birth.style.border = "3px solid red";
    birthError.textContent = "Veuilez entrer une date de naissance valide";
    birthError.classList.add("errorClass");
    birth.parentElement.appendChild(birthError);
    return false;
    //check if birthdate is bellow 150 y/o
    // if user has put a +150years birthdate : Apply red border & error message
  } else if (birthdate.value.split("-")[0] < currentYear - 150) {
    birth.style.border = "3px solid red";
    birthError.textContent = "Veuilez entrer une date de naissance valide";
    birthError.classList.add("errorClass");
    birth.parentElement.appendChild(birthError);
    return false;
    //if all conditions valid : Apply green border & remove error message
  } else {
    birth.style.border = "3px solid green";
    birthError.textContent = "";
    return true;
  }
}
// *********Validation tournois ********************
// 'p' creation for error message display
const quantityErrorMessage = document.createElement("p");

// //Listening to modification
quantity.addEventListener("change", validateQuantity);

//Fonction et RegExp

function validateQuantity() {
  const quantityRegExp = /^[0-99][0-9]?$/;

  //check regExp validation

  //If regExp is not valid : Apply red border & error message
  if (!quantityRegExp.test(quantity.value)) {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.classList.add("errorClass");
    quantityErrorMessage.textContent =
      "Veuillez entrer une valeur entre 0 et 100";
    quantity.parentElement.appendChild(quantityErrorMessage);
    return false;
    //If regExp is valid : Apply green border & remove error message
  } else {
    quantity.style.border = "3px solid green";
    quantityErrorMessage.classList.remove("errorClass");
    quantityErrorMessage.textContent = "";
    return true;
  }
}

// *********Validation villes ********************
// 'p' creation for error message display
const cityFormErrorMessage = document.createElement("p");

//Listening to modification
cityForm.addEventListener("change", validateLocation);

//Fonction
function validateLocation() {
  //Check if user has check a city
  if (document.querySelector("input[name='location']:checked") === null) {
    //if user has not check a city : Apply red border & error message
    cityFormErrorMessage.textContent = "Veuillez sélectionner une ville.";
    cityFormErrorMessage.classList.add("errorClass");
    cityForm.appendChild(cityFormErrorMessage);
    return false;
  } else {
    //if user has check a city : Apply green border & error message
    cityFormErrorMessage.classList.remove("errorClass");
    cityFormErrorMessage.textContent = "";
    return true;
  }
}

// // // *********Validation Terms ********************
// 'p' creation for error message display
const errorMsg = document.createElement("p");

//Listening to modification
terms.addEventListener("change", validTerms);

//check if user has accept the terms
function validTerms() {
  if (terms.checked) {
    //if user has check the terms : Apply green border & remove error message
    errorMsg.classList.remove("errorClass");
    errorMsg.textContent = "";
    return true;
  } else {
    //if user has not check the terms : Apply red border & remove error message
    errorMsg.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorMsg.classList.add("errorClass");
    terms.parentElement.appendChild(errorMsg);
    return false;
  }
}
