const pointsDiv = document.getElementById("points")
const randomN1 = document.getElementById("random1")
const randomN2 = document.getElementById("random2")
const inputDiv = document.getElementById("inputs")
const correctDiv = document.getElementById("correct")
const imgStyle = document.getElementById("img")

var points = 0;
var random1 = 0;
var random2 = 0;
var answer = "";
var trsfrm = "scaleX(1)"
var trsfrmrvs = "scaleX(-1)"

function updateView(){
    pointsDiv.innerHTML = `Points:${points}`;
    randomN1.innerHTML = random1;
    randomN2.innerHTML = random2;

}

function randomNumber(){
    random1 = Math.floor(Math.random()*20);
    random2 = Math.floor(Math.random()*20);
    updateView();
    if (random1>random2){
        imgStyle.style.transform = trsfrmrvs
    }
    else if (random1<random2){
        imgStyle.style.transform = trsfrm
    }
}
 
function resetNumber(){
    randomNumber();
    updateView();
}

function pointsUpdate(){
    points += 1;
    updateView();
}

function saveAnswer(newAnswer){
    answer = newAnswer;
    updateView();
}

function submitAnswer(){
    if (random1 > random2 && answer == ">" ){
        pointsUpdate();
        correctDiv.innerHTML = "Korrekt";
        randomNumber();
        inputDiv.value = "";
    }
    else if (random1 < random2 && answer == "<" ){
        pointsUpdate();
        correctDiv.innerHTML = "Korrekt";
        randomNumber();
         inputDiv.value = "";
    }
    else if (random1 == random2 && answer == "=" ){
        pointsUpdate();
        correctDiv.innerHTML = "Korrekt";
        randomNumber();
         inputDiv.value = "";
    }
    else {
        correctDiv.innerHTML = "Feil";
        randomNumber();
         inputDiv.value = "";
    }

}