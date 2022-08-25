function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelector(".close");

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
// Form validation RegExp
// **********************************

// *********Validation Prénom ********************

//création de la constante prenom

const prenom = document.querySelector("#first");

// Création de la balise p pour affichage message d'erreur

const prenomErrorMessage = document.createElement("p");

// //Ecouter la modification

prenom.addEventListener("keyup", validatePrenom);

//Fonction et RegExp

function validatePrenom() {
  const prenomRegExp = /^[a-zA-ZÀ-ÿ-]+$/;

  //Vérification du nombre de caractères saisis
  if (prenom.value.length < 2) {
    //Bordures en rouge si prénom < 2 caractère
    prenom.style.border = "3px solid red";
    //Message d'erreur
    prenomErrorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le prénom.";
    //Application de la class CSS
    prenomErrorMessage.classList.add("errorClass");
    //Injection de la balise 'p' dans le composant parent de l'input prenom
    prenom.parentElement.appendChild(prenomErrorMessage);
    //Retour faux pour la validation du formulaire
    return false;

    //Vérification du type de caractère saisis
  } else if (!prenomRegExp.test(prenom.value)) {
    //Si les paramamètres de la RegExp non respectés
    //Bordures en rouge
    prenom.style.border = "3px solid red";
    //Message d'erreur
    prenomErrorMessage.textContent =
      "Le prénom ne peut pas contenir de chiffres, de caractères spéciaux ni d'espace.";
    //Application de la class CSS
    prenomErrorMessage.classList.add("errorClass");
    //Injection de la balise 'p' dans le composant parent de l'input prenom
    prenom.parentElement.appendChild(prenomErrorMessage);
    //return false in order to impeed form validation
    return false;
  } else {
    //Si aucune des conditions ci-dessous ne sont validées, cela signifie que l'utilisateur à saisi un prénom correct
    //Bordures en rouge
    prenom.style.border = "3px solid green";
    //Retirer message d'erreur / Ne rien afficher
    prenomErrorMessage.classList.remove("errorClass");
    prenomErrorMessage.textContent = "";
    //Retour vrai pour la validation du formulaire
    return true;
  }
}

// *********Validation Nom ********************

//création de la constante nom

const nom = document.querySelector("#last");

// Création de la balise p pour affichage message d'erreur

const nomErrorMessage = document.createElement("p");

// //Ecouter la modification

nom.addEventListener("keyup", validateNom);

//Fonction et RegExp

function validateNom() {
  const nomRegExp = /^[a-zA-ZÀ-ÿ-]+$/;

  //Vérification du nombre de caractères saisis
  if (nom.value.length < 2) {
    //Bordures en rouge si prénom < 2 caractère
    nom.style.border = "3px solid red";
    //Message d'erreur
    nomErrorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le nom.";
    //Application de la class CSS
    nomErrorMessage.classList.add("errorClass");
    //Injection de la balise 'p' dans le composant parent de l'input nom
    nom.parentElement.appendChild(nomErrorMessage);
    //Retour faux pour la validation du formulaire
    return false;

    //Vérification du type de caractère saisis
  } else if (!nomRegExp.test(nom.value)) {
    //Si les paramamètres de la RegExp non respectés
    //Bordures en rouge
    nom.style.border = "3px solid red";
    //Message d'erreur
    nomErrorMessage.textContent =
      "Le nom ne peut pas contenir de chiffres, de caractères spéciaux ni d'espace.";
    //Application de la class CSS
    nomErrorMessage.classList.add("errorClass");
    //Injection de la balise 'p' dans le composant parent de l'input nom
    nom.parentElement.appendChild(nomErrorMessage);
    //return false in order to impeed form validation
    return false;
  } else {
    //Si aucune des conditions ci-dessous ne sont validées, cela signifie que l'utilisateur à saisi un prénom correct
    //Bordures en rouge
    nom.style.border = "3px solid green";
    //Retirer message d'erreur / Ne rien afficher
    nomErrorMessage.classList.remove("errorClass");
    nomErrorMessage.textContent = "";
    //Retour vrai pour la validation du formulaire
    return true;
  }
}

// *********Validation email ********************

let email = document.querySelector("#email");

const EmailFormErrorMessage = document.createElement("p");

//Ecouter la modification de l'e-mail

email.addEventListener("change", function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  //création de la regex pour la validation email

  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  let testEmail = emailRegExp.test(inputEmail.value);

  // Test de la regex

  if (testEmail) {
    email.style.border = "3px solid green";
  } else {
    email.appendChild(EmailFormErrorMessage);
    email.style.border = "3px solid red";
    EmailFormErrorMessage.classList.add("errorClass");
    EmailFormErrorMessage.textContent = "Adresse email non valide";
  }
};

// *********Validation tournois ********************

const quantity = document.querySelector("#quantity");

quantity.addEventListener("change", validateUpDown);

const quantityErrorMessage = document.createElement("p");
//this function only applies to the up and down arrows of the quantity input
function validateUpDown() {
  //if e.target.value is >=0, then success message
  if (quantity.value >= 0 && quantity.value <= 99) {
    quantity.style.border = "3px solid green";
    quantityErrorMessage.classList.remove("errorClass");
    quantityErrorMessage.textContent = "";
  }
  //if e.target.value is undefined or <0, then error message
  else {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.textContent =
      "Veuillez entrer un nombre entre 1 et 99.";
    quantityErrorMessage.classList.add("errorClass");
    quantity.parentElement.appendChild(quantityErrorMessage);
  }
}

// *********Validation villes ********************

//création de la constante city

const cityForm = document.querySelector("#location");

// Création de la balise p pour affichage message d'erreur

const cityFormErrorMessage = document.createElement("p");

// //Ecouter la modification

cityForm.addEventListener("change", validateLocation);

function validateLocation() {
  if (document.querySelector("input[name='location']:checked") === null) {
    cityFormErrorMessage.textContent = "Veuillez sélectionner une ville.";
    cityFormErrorMessage.classList.add("errorClass");
    cityForm.appendChild(cityFormErrorMessage);
  } else {
    cityFormErrorMessage.classList.remove("errorClass");
    cityFormErrorMessage.textContent = "";
  }
}

// // // *********Validation Terms ********************

const checkboxTerms = document.querySelector("#checkbox1");

const termsErrorMessage = document.createElement("p");

checkboxTerms.addEventListener("change", validCheckbox);

function validCheckbox() {
  if (document.getElementById("checkbox1").checked) {
    termsErrorMessage.classList.remove("errorClass");
    termsErrorMessage.textContent = "";
    return true;
  } else {
    termsErrorMessage.textContent =
      "Le nom ne peut pas contenir de chiffres, de caractères spéciaux ni d'espace.";
    termsErrorMessage.classList.add("errorClass");
    termsErrorMessage.appendChild(termsErrorMessage);
    return false;
  }
}

console.log(validCheckbox);
