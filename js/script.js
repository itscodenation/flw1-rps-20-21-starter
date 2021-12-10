let randomNumber;
let computerChoice;
$(".play").click(function() {
  let choice = $(".input").val();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    $(".userChoice").text(choice);
  } else {
    $(".userChoice").text("Invalid Input");
  }
  randomNumber = Math.random() * 3;
  //$(".computerChoice").append(randomNumber);
  if (randomNumber < 1) {
    computerChoice = "rock";
  } else if (randomNumber < 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  $(".computerChoice").text(computerChoice);
  //draw
  if (choice === computerChoice) {
    $(".result").text("Draw");
  }
  //lose
  if (choice === "rock" && computerChoice === "paper") {
    $(".result").text("YOU LOSE!");
  }
  if (choice === "paper" && computerChoice === "scissors") {
    $(".result").text("YOU LOSE!");
  }
  if (choice === "scissors" && computerChoice === "rock") {
    $(".result").text("YOU LOSE!");
  }
  //win
  if (choice === "rock" && computerChoice === "scissors") {
    $(".result").text("YOU WIN!");
  }
  if (choice === "paper" && computerChoice === "rock") {
    $(".result").text("YOU WIN!");
  }
  if (choice === "scissors" && computerChoice === "paper") {
    $(".result").text("YOU WIN!");
  }
});
