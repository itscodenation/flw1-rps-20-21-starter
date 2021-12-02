let computerChoiceNum = ["rock", "paper", "scissors"];

let randomNumber = 0;

let result;
// User clicks button

// Thunpitcha's function
// Docs: https://docs.google.com/document/d/1gq7oUif59sKDInbJrDTIeSQBaOlGb5ri06b2-noWWNI/edit#heading=h.x4lnrrw34ze2
function getRandomComputerChoice() {
   return computerChoiceNum;
  randomNumber = Math.floor(Math.random() * 3);

  $(".computerChoice").text(computerChoiceNum[randomNumber]);

 
}
$(".play").click(function() {
  let user_choice = $(".input").val();

  $(".userChoice").text(user_choice);

  user_choice = user_choice.toLowerCase();

  randomNumber = Math.floor(Math.random() * 3);

  $(".computerChoice").text(computerChoiceNum[randomNumber]);

  if (user_choice == "rock" && computerChoiceNum[randomNumber] == "scissors") {
    result = "You Won!";
  } else if (
    user_choice == "rock" &&
    computerChoiceNum[randomNumber] == "rock"
  ) {
    result = "You Tied!";
  } else if (
    user_choice == "rock" &&
    computerChoiceNum[randomNumber] == "paper"
  ) {
    result = "You Lost!";
  } else if (
    user_choice == "paper" &&
    computerChoiceNum[randomNumber] == "rock"
  ) {
    result = "You Won!";
  } else if (
    user_choice == "paper" &&
    computerChoiceNum[randomNumber] == "scissors"
  ) {
    result = "You Lost!";
  } else if (
    user_choice == "paper" &&
    computerChoiceNum[randomNumber] == "paper"
  ) {
    result = "You Tied!";
  } else if (
    user_choice == "scissors" &&
    computerChoiceNum[randomNumber] == "scissors"
  ) {
    result = "You Tied!";
  } else if (
    user_choice == "scissors" &&
    computerChoiceNum[randomNumber] == "rock"
  ) {
    result = "You Lost!";
  } else if (
    user_choice == "scissors" &&
    computerChoiceNum[randomNumber] == "paper"
  ) {
    result = "You Won!";
  } else {
    $(".result").append(`<p>Your input is invalid, try again.<p>`);
  }

  // use 'result'

  $(".result").text(result);
});
