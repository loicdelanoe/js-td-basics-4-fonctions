/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

function getUserInput(promptMessage) {
    let userInput;
    do {
        userInput = parseInt(prompt(promptMessage));
    } while (isNaN(userInput));
    return userInput;
}


let userDay = getUserInput("Entrez un jour :");
let userMonth = getUserInput("Entrez un mois :");
let userYear = getUserInput("Entrez une année :");

const monthList = ["", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aoüt", "Septembre", "Octobre", "Novembre", "Décembre"];

// Fonction pour vérifier si une année est bissextile

function isBissextile(annee) {
    return (annee % 4 === 0 && !(annee % 100 === 0)) || annee % 400 === 0;
}

// Fonction pour vérifier si une date est valide
function isValid(userDay, userMonth, userYear) {
    if (userYear < 0) {
        return false;
    }
    if (userMonth > 12 || userMonth < 0) {
        return false;
    }
    if (userDay < 0 || userDay > 31) {
        return false;
    }

    switch (userMonth) {
        case 2:
            if (isBissextile(userYear)) {
                return userDay <= 29;
            } else return userDay <= 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return userDay <= 30;
        default:
            return true;
    }
}

// Demander à l'utilisateur de saisir une date



// Utilisation de la fonction isValid pour vérifier la date

if (isValid(userDay, userMonth, userYear)) {
    console.log(`Le ${userDay} ${monthList[userMonth]} ${userYear} est une date valide !`);
} else {
    console.log(`Le ${userDay} ${monthList[userMonth]} ${userYear} n'est pas une date valide !`);
}