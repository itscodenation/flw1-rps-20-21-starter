let computerChoiceNum = ["rock", "paper", "scissors"];
let totalWins = 0;
let totalTies = 0;
let totalLoses = 0;
let totalGames = 0;

// Thunpitcha's function
// Docs: https://docs.google.com/document/d/1gq7oUif59sKDInbJrDTIeSQBaOlGb5ri06b2-noWWNI/edit#heading=h.x4lnrrw34ze2
function getRandomComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  let choice;

  if (randomNumber === 0) {
    choice = "rock";
  } else if (randomNumber === 1) {
    choice = "scissors";
  } else {
    choice = "paper";
  }

  return choice; // value = "rock", "paper", "scissors"
}

$(".clear").click(function() {
  $(".input").val("");
  $(".userChoice").text("");
  $(".result").text("");
  $(".computerChoice").text("");
});

$(".play").click(function() {
  let result;
  totalGames = totalGames + 1;

  let choices = getRandomComputerChoice();

  let user_choice = $(".input").val();

  $(".userChoice").text(user_choice);

  user_choice = user_choice.toLowerCase();

  $(".computerChoice").text(choices);

  if (user_choice == "rock" && choices == "scissors") {
    result = "You Won!";
    totalWins = totalWins + 1;
  } else if (user_choice == "rock" && choices == "rock") {
    result = "You Tied!";
    totalTies = totalTies + 1;
  } else if (user_choice == "rock" && choices == "paper") {
    result = "You Lost!";
    totalLoses = totalLoses + 1;
  } else if (user_choice == "paper" && choices == "rock") {
    result = "You Won!";
    totalWins = totalWins + 1;
  } else if (user_choice == "paper" && choices == "scissors") {
    result = "You Lost!";
    totalLoses = totalLoses + 1;
  } else if (user_choice == "paper" && choices == "paper") {
    result = "You Tied!";
    totalTies = totalTies + 1;
  } else if (user_choice == "scissors" && choices == "scissors") {
    result = "You Tied!";
    totalTies = totalTies + 1;
  } else if (user_choice == "scissors" && choices == "rock") {
    result = "You Lost!";
    totalLoses = totalLoses + 1;
  } else if (user_choice == "scissors" && choices == "paper") {
    result = "You Won!";
    totalWins = totalWins + 1;
  } else {
    $(".result").append(`<p>Your input is invalid, try again.<p>`);
  }

  let winRate = totalWins / totalGames;
  winRate = winRate.toFixed(2);

  // use 'result'
  $(".ties").text("You have tied" + totalTies + "times");
  $(".loses").text("You have lost" + totalLoses + "times");
  $(".wins").text("You have won" + totalWins + "times");
  $(".result").text(result);
  $(".games").text("You have played" + totalGames + "times");
  $(".winRate").text("Your win rate is" + winRate + "percent");
});
