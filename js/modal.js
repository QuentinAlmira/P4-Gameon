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

const email = document.querySelector("#email");

const emailErrorMessage = document.createElement("p");

email.addEventListener("keyup", validateEmail);

//Fonction et RegExp

function validateEmail() {
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegExp.test(email.value)) {
    email.style.border = "3px solid red";

    emailErrorMessage.textContent = "Veuillez saisir une adresse email valide";

    emailErrorMessage.classList.add("errorClass");

    email.parentElement.appendChild(emailErrorMessage);

    return false;
  } else {
    email.style.border = "3px solid green";
    emailErrorMessage.classList.remove("errorClass");
    emailErrorMessage.textContent = "";

    return true;
  }
}

//Validation date de naissance

// function isBirthdateValid()
// {
// 	const regexbirthdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
// 	const currentYear = new Date().getFullYear();
// 	if (!regexbirthdate.test(birthdate.value))
// 	{
// 		return false;
// 	}
// 	if (birthdate.value.split('-')[0] > (currentYear - 20))
// 	{
// 		return false
// 	}
// 	if (birthdate.value.split('-')[0] < (currentYear - 150))
// 	{
// 		return false
// 	}
// 	return true;
// }

// *********Validation tournois ********************

const quantity = document.querySelector("#quantity");

quantity.addEventListener("change", validateUpDown);

const quantityErrorMessage = document.createElement("p");

function validateUpDown() {
  if (quantity.value >= 0 && quantity.value <= 99) {
    quantity.style.border = "3px solid green";
    quantityErrorMessage.classList.remove("errorClass");
    quantityErrorMessage.textContent = "";
  } else {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.textContent =
      "Veuillez entrer un nombre entre 1 et 99.";
    quantityErrorMessage.classList.add("errorClass");
    quantity.parentElement.appendChild(quantityErrorMessage);
  }
}

// *********Validation villes ********************

// //création de la constante city

// const cityForm = document.querySelector("#location");

// // Création de la balise p pour affichage message d'erreur

// const cityFormErrorMessage = document.createElement("p");

// // //Ecouter la modification

// cityForm.addEventListener("change", validateLocation);

// function validateLocation() {
//   if (document.querySelector("input[name='location']:checked") === null) {
//     cityFormErrorMessage.textContent = "Veuillez sélectionner une ville.";
//     cityFormErrorMessage.classList.add("errorClass");
//     cityForm.appendChild(cityFormErrorMessage);
//   } else {
//     cityFormErrorMessage.classList.remove("errorClass");
//     cityFormErrorMessage.textContent = "";
//   }
// }

// // // *********Validation Terms ********************

const terms = document.querySelector("#checkbox1");

const errorMsg = document.createElement("p");

terms.addEventListener("change", validTerms);

function validTerms() {
  if (terms.checked) {
    errorMsg.classList.remove("errorClass");
    errorMsg.textContent = "";
    return true;
  } else {
    errorMsg.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorMsg.classList.add("errorClass");
    terms.parentElement.appendChild(errorMsg);
    return false;
  }
}
