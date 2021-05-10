//Click Function when play is clicked
$(".play").click(function () {
  //Takes in User Choice from the input box and stores it in a variable
  let userChoice = $(".input").val();

  //Display the user choice to the screen
  $(".userChoice").html(userChoice);

  //Display the computer choice to the screen
  let computerChoice = getRandomComputerChoice();
  $(".computerChoice").html(computerChoice);

  //Displays the winner choice to the screen
  let winner = chooseWinner(userChoice, computerChoice);
  $(".result").html(winner);

  // Clears the input box
  $(".input").val("");
});

function getRandomComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice;

  if (randomNumber < 0.33) {
    computerChoice = "rock";
  } else if (randomNumber < 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function chooseWinner(userChoice, computerChoice) {
  let winner;
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    winner = "Computer Wins!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "User Wins!";
  } else {
    winner = "No one Wins!";
  }
  return winner;
}
