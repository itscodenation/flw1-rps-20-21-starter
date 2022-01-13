//Global Variables
let randomNumber;
let computerChoice;

$(".play").click(function () {
  
  //User choice
  let choice = $(".input").val();
  choice = choice.toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    $(".userChoice").text(choice);
  } else {
    $(".userChoice").text("Invalid Input");
  }
  
  //Generate computer's choice
  computerChoice = getRandomComputerChoice();
  $(".computerChoice").text(computerChoice);

  chooseWinner(choice, computerChoice)
  
  $(".input").val("");
  
});

function getRandomComputerChoice() {
  randomNumber = Math.random() * 3;
  if (randomNumber < 1) {
    computerChoice = "rock";
  } else if (randomNumber < 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function chooseWinner(choice, computerChoice) {
  
  let winner;
  
  //draw
  if (choice === computerChoice) {
    winner = "";
    $(".result").text("Draw");
  }

  //lose
  if (choice === "rock" && computerChoice === "paper") {
    winner = " Computer";
    $(".result").text("YOU LOSE!");
  }
  if (choice === "paper" && computerChoice === "scissors") {
    winner = " Computer";
    $(".result").text("YOU LOSE!");
  }
  if (choice === "scissors" && computerChoice === "rock") {
    winner = " Computer";
    $(".result").text("YOU LOSE!");
  }

  //win
  if (choice === "rock" && computerChoice === "scissors") {
    winner = " User";
    $(".result").text("YOU WIN!");
  }
  if (choice === "paper" && computerChoice === "rock") {
    winner = " User";
    $(".result").text("YOU WIN!");
  }
  if (choice === "scissors" && computerChoice === "paper") {
    winner = " User";
    $(".result").text("YOU WIN!");
  }
  
  return winner;
}


