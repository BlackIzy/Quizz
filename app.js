const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

function verifFunc(tabResultats) {

    for(let a = 0; a < 5; a++){

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }


