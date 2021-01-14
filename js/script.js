// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

let computerChoice = "r";
let playerChoice;
let cpuArray = ["r", "p", "s"];
let compScore = 0;
let userScore = 0;
let result;
document.querySelector("#shoot").onclick = function() {
  playerChoice = document.querySelector("#input").value;
  playerChoice = playerChoice.toLowerCase()
  //computerChoice = cpuArray[Math.floor(Math.random() * cpuArray.length)];
  //console.log(computerChoice);
  document.querySelector("#userChoice").innerHTML = playerChoice;
  document.querySelector("#computerChoice").innerHTML = computerChoice;


  if (playerChoice == "rock") {
    playerChoice = playerChoice.slice(0, -3);
  } else if (playerChoice == "paper") {
    playerChoice = playerChoice.slice(0, -4);
  } else if (playerChoice == "scissors") {
    playerChoice = playerChoice.slice(0, -7);
  } else if (playerChoice == "r"){
    console.log("Obedience.")
  } else if (playerChoice == "p"){
    console.log("Obedience.")
  } else if (playerChoice == "s"){
    console.log("Obedience.")
  } else{
    playerChoice = cpuArray[Math.floor(Math.random()*cpuArray.length)]
  }
  console.log(playerChoice);
  console.log(computerChoice);
  if (playerChoice == computerChoice) {
    result = "TIE! What are the odds?!?!";
  } else if (playerChoice == "r") {
    if (computerChoice == "p") {
      result = "Lose. Too bad.";
      compScore += 1;
    } else if (computerChoice == "s") {
      result = "Win! Good job.";
      userScore += 1;
    }
  } else if (playerChoice == "p") {
    if (computerChoice == "s") {
      result = "Lose. Too bad.";
      compScore += 1;
    } else if (computerChoice == "r") {
      result = "Win! Good job.";
      userScore += 1;
    }
  } else if (playerChoice == "s") {
    if (computerChoice == "r") {
      result = "Lose. Too bad.";
      compScore += 1;
    } else if (computerChoice == "p") {
      result = "Win! Good job.";
      userScore += 1;
    }
  }
  document.querySelector("#result").innerHTML = result;
  document.querySelector("#score").innerHTML = userScore + ":" + compScore;
};
