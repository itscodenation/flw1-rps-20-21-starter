// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

function playGame() {
  setUserChoice()
}

function setUserChoice() {
 document.getElementById("userChoice").innerText = 
   document.getElementById("input").value;
}
