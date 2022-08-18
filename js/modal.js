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

// *****Email*****

let form = document.querySelector('#loginForm');

console.log(form.email);

//Ecouter la modification de l'e-mail

form.email.addEventListener('change', function() {
    validEmail(this);
});

// *********Validation Email********************

const validEmail = function(inputEmail) {

  //création de la regex pour la validation email

  let emailRegExp = new RegExp(
      '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
  );

  let testEmail = emailRegExp.test(inputEmail.value);


  // Récupération de la balise small

  let small = inputEmail.nextElementSibling;

    // Test de la regex

  if(testEmail){
      small.innerHTML="Adresse mail valide";
      small.classList.remove('text-danger');
      small.classList.add('text-success');
  }

  else{
      small.innerHTML="Adresse non valide";
      small.classList.remove('text-success');
      small.classList.add('text-danger');
      
  }

};

// *********Validation Prénon ********************

//Ecouter la modification prénom

form.first.addEventListener('change', function() {
  validFirst(this);
});

const validFirst = function(inputFirst) {

  let msg;
  let valid = false;

  //Au moins 2 caracteres

  if (inputFirst.value.length < 2) {
      msg = 'le prénom doit contenir au moins 2 caractères';
  }

  //Mdp Valide

  else{
      msg ='le prénom est valide';
      valid = true;
  }

  //affichage

      // Récupération de la balise small

      let small = inputFirst.nextElementSibling;

      // Test de la regex

    if(valid){
        small.innerHTML="Prénom valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;

    }

    else{
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }

};

// *********Validation Nom ********************

//Ecouter la modification prénom

form.last.addEventListener('change', function() {
  validLast(this);
});

const validLast = function(inputLast) {

  let msg;
  let valid = false;

  //Au moins 2 caracteres

  if (inputLast.value.length < 2) {
      msg = 'le Nom doit contenir au moins 2 caractères';
  }

  //Mdp Valide

  else{
      msg ='le Nom est valide';
      valid = true;
  }

  //affichage

      // Récupération de la balise small

      let small = inputLast.nextElementSibling;

      // Test de la regex

    if(valid){
        small.innerHTML="Nom valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;

    }

    else{
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }

};




