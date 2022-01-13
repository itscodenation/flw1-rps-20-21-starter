function getRandomComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3);
  let computerChoice;

  if (randomNumber === 1) {
    $(".computerChoice").text("rock");
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    $(".computerChoice").text("paper");
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    $(".computerChoice").text("scissors");
    computerChoice = "scissors";
  }

  return computerChoice;
}

function chooseWinner(userInput, computerChoice) {
  let winner;

  if (
    (userInput.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "rock") ||
    (userInput.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "paper") ||
    (userInput.toLowerCase() === "scissors" &&
      computerChoice.toLowerCase() === "scissors")
  ) {
    $(".result").text("draw");
  } else if (
    (userInput.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "paper") ||
    (userInput.toLowerCase() === "scissors" &&
      computerChoice.toLowerCase() === "rock") ||
    (userInput.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "scissors")
  ) {
    $(".result").text("you lose ☹ computer wins!!!");
  } else if (
    (userInput.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "scissors") ||
    (userInput.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "rock") ||
    (userInput.toLowerCase() === "scissors" &&
      computerChoice.toLowerCase() === "paper")
  ) {
    $(".result").text("you win!!! computer lost!!!");
  } else {
    $(".result").text("SORRY, NOT A VALID INPUT!!");
    $(".userChoice").text("N/A");
  }

  return winner;
}

$(".play").click(function () {
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);

  let computerChoice = getRandomComputerChoice();
  let winner = chooseWinner(userInput, computerChoice);
});
