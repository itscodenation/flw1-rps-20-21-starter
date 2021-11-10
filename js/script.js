let computerChoiceNum= ["rock","paper","scissors"];
// User clicks button
$(".play").click(function() { 
  
  let user_choice = $(".input").val();
  
  console.log();
  console.log(`Choice: ${user_choice}`);
  
//   // Show user choice
  $(".userChoice").text(user_choice);
  // Have rock paper scissors be numbers so ai can use random
let ranDecimal = Math.random();
let randNumber = ranDecimal * computerChoiceNum.length;
let num1 = Math.floor(randNumber);
  $(".computerChoice").append(num1);
  
  console.log(num1);
  console.log(computerChoiceNum[num1]);
  // Generate random number

  if (user_choice == "rock" && computerChoiceNum == "scissors"){
    $().append();
  }

  // Determine win or loss


  // Display result of game
});


