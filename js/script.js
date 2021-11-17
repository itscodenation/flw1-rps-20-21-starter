//for some unkown reason we if we use all lowercase it gives all 3 results \/(-_-)\/
let computerChoiceNum = ["rock", "paper", "scissors"];

//Thunpitcha

let randomNumber = 0;

// User clicks button

$(".play").click(function() {
  let user_choice = $(".input").val();

  $(".userChoice").text(user_choice);

  randomNumber = Math.floor(Math.random() * 3);

  $(".computerChoice").text(computerChoiceNum[randomNumber]);

  if (
    user_choice == "rock" 
    ||
    user_choice == "Rock" 
    ||
    user_choice == "ROCK" 
    && 
    computerChoiceNum[randomNumber] == "scissors") {
    
    $(".result").append(`<p>You Won!</p>`);
  }

  if (
    user_choice == "rock" 
    ||
    user_choice == "Rock" 
    ||
    user_choice == "ROCK" 
    && 
    computerChoiceNum[randomNumber] == "rock") {
    
    $(".result").append(`<p>You Tied!</p>`);
  }

  if (
    user_choice == "rock" 
    ||
    user_choice == "Rock" 
    ||
    user_choice == "ROCK" 
    && 
    computerChoiceNum[randomNumber] == "paper") {
    
    $(".result").append(`<p>You Lost!</p>`);
  }

  if (
    user_choice == "paper" 
    ||
    user_choice == "Paper" 
    ||
    user_choice == "PAPER" 
    && 
    computerChoiceNum[randomNumber] == "rock") {
    
    $(".result").append(`<p>You Won!</p>`);
  }

  if (
    user_choice == "paper" 
    ||
    user_choice == "Paper" 
    ||
    user_choice == "PAPER" 
    && 
    computerChoiceNum[randomNumber] == "scissors") {
    
    $(".result").append(`<p>You Lost!</p>`);
  }

  if (
    user_choice == "paper" 
    ||
    user_choice == "Paper" 
    ||
    user_choice == "PAPER" 
    && 
    computerChoiceNum[randomNumber] == "paper") {
    
    $(".result").append(`<p>You Tied!</p>`);
  }

  if (
    user_choice == "scissors" 
    ||
    user_choice == "Scissors" 
    ||
    user_choice == "SCISSORS" 
    && 
    computerChoiceNum[randomNumber] == "scissors") {
    
    $(".result").append(`<p>You Tied!</p>`);
  }

  if (
    user_choice == "scissors" 
    ||
    user_choice == "Scissors" 
    ||
    user_choice == "SCISSORS" 
    && 
    computerChoiceNum[randomNumber] == "rock") {
    
    $(".result").append(`<p>You Lost!</p>`);
  }

  if (
    user_choice == "scissors" 
    ||
    user_choice == "Scissors" 
    ||
    user_choice == "SCISSORS" 
    && 
    computerChoiceNum[randomNumber] == "paper") {
    
    $(".result").append(`<p>You Won!</p>`);
  }

});