let totalWins = 0;
let totalTies = 0;
let totalLoses = 0;
let totalGames = 0;

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

$(".clear").click(function () {
  $(".input").val("");
  $(".userChoice").text("");
  $(".result").text("");
  $(".computerChoice").text("");
});

function userChoice(user_choices) {
  user_choices = $(".input").val();
  $(".userChoice").text(user_choices);

  user_choices = user_choices.toLowerCase();
  return user_choices;
}
function chooseWinner(user_choice, computer_choice) {
  let result;

  if (user_choice === "rock") {
    $(".userRock").show();
    $(".userScissor").hide();
    $(".userPaper").hide();
  } else if (user_choice === "paper") {
    $(".userPaper").show();
    $(".userScissor").hide();
    $(".userRock").hide();
  } else {
    $(".userScissor").show();
    $(".userPaper").hide();
    $(".userRock").hide();
  }

  if (computer_choice === "rock") {
    $(".computerRock").show();
    $(".computerScissor").hide();
    $(".computerPaper").hide();
  } else if (computer_choice === "paper") {
    $(".computerPaper").show();
    $(".computerScissor").hide();
    $(".computerRock").hide();
  } else {
    $(".computerScissor").show();
    $(".computerRock").hide();
    $(".computerPaper").hide();
  }

  console.log(user_choice);

  $(".computerChoice").text(computer_choice);
  // console.log(userChoice());

  if (user_choice == "rock" && computer_choice == "scissors") {
    result = "User Wins!";
    totalWins = totalWins + 1;
  } else if (user_choice == "rock" && computer_choice == "rock") {
    result = "You Tied, no one wins!";
    totalTies = totalTies + 1;
  } else if (user_choice == "rock" && computer_choice == "paper") {
    result = "You Lost, Computer Wins!";
    totalLoses = totalLoses + 1;
  } else if (user_choice == "paper" && computer_choice == "rock") {
    result = "User Wins!";
    totalWins = totalWins + 1;
  } else if (user_choice == "paper" && computer_choice == "scissors") {
    result = "You Lost, Computer Wins!";
    totalLoses = totalLoses + 1;
  } else if (user_choice == "paper" && computer_choice == "paper") {
    result = "You Tied, no one wins!";
    totalTies = totalTies + 1;
  } else if (user_choice == "scissors" && computer_choice == "scissors") {
    result = "You Tied, no one wins!";
    totalTies = totalTies + 1;
  } else if (user_choice == "scissors" && computer_choice == "rock") {
    result = "You Lost, Computer Wins!";
    totalLoses = totalLoses + 1;
  } else if (user_choice == "scissors" && computer_choice == "paper") {
    result = "User Wins!";
    totalWins = totalWins + 1;
  } else {
    $(".result").append(`<p>Your input is invalid, try again.<p>`);
  }

  $(".result").text(result);
  // use 'result'
}

$(".play").click(function () {
  // what ever this is.style.animation="moveUpandDown 3s linear infinite"

  let computer_choice = getRandomComputerChoice();

  let user_choice = userChoice();
  
  totalGames = totalGames + 1;
  let winRate = totalWins / totalGames;
  winRate = winRate.toFixed(2);
  $(".ties").text("You have tied" + totalTies + "times");
  $(".loses").text("You have lost" + totalLoses + "times");
  $(".wins").text("You have won" + totalWins + "times");

  $(".games").text("You have played" + totalGames + "times");
  $(".winRate").text("Your win rate is" + winRate + "percent");

  chooseWinner(user_choice, computer_choice);
});
