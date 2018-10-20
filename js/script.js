// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var human;
var computer;
var winner;
var randomNumber;

// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function() {
    human = $("#input").val().toLowerCase().trim();
    $("#userChoice").text(human);
    randomNumber = Math.random();
    if (randomNumber < 0.333334) {
        computer = "rock";
    } else if (randomNumber > 0.333333 && randomNumber < 0.666667) {
        computer = "scissors";
    } else {
        computer = "paper";
    }
    $("#computerChoice").text(computer);
    if (human === "rock" && computer === "scissors") {
        $("#result").text("User wins!");
    } else if (human === "rock" && computer === "paper") {
        $("#result").text("Computer wins!");
    } else if (human === "rock" && computer === "rock") {
        $("#result").text("Tie!");
    } else if (human === "scissors" && computer === "scissors") {
        $("#result").text("Tie!");
    } else if (human === "scissors" && computer === "paper") {
        $("#result").text("User wins!");
    } else if (human === "scissors" && computer === "rock") {
        $("#result").text("Computer wins!");
    } else if (human === "paper" && computer === "scissors") {
        $("#result").text("Computer wins!");
    } else if (human === "paper" && computer === "paper") {
        $("#result").text("Tie!");
    } else if (human === "paper" && computer === "rock") {
        $("#result").text("User wins!");
    }
    $("#input").val("");
});