let  randomNumber = 0;
let number = 0

// GAME LOGIC 
$(".play").click(function() {
    let input = $(".input").val();
    
    
    //  check user input if incorrect value is entered 

      $(".userChoice").text(input);
        if (input !== "Paper" &&
        input !== "Rock" &&
        input !== "Scissors") {
        $(".userChoice").text("Please enter a correct value.")
    }
    
        let randomNumber = Math.floor((Math.random() * 3) + 1);
        let computerChoice= $(".computerChoice").text(randomNumber)
  //  computer random number assigning it to rock paper or scissors 


  if (randomNumber == 1) {
        computerChoice = "Rock"
        $(".computerChoice").text("Rock")
     }

    if (randomNumber == 2) {
        computerChoice = "Paper"
        $(".computerChoice").text("Paper")
    }
    
    if (randomNumber == 3) {
        computerChoice = "Scissors"
        $(".computerChoice").text("Scissors")
    }
   
// GAME LOGIC (PAPER VERSION)
    if (input === "Paper" && computerChoice === "Rock") {
         $(".result").text("You win!")
    }
    
    else if (input === "Paper" && computerChoice === "Paper") {
        $(".result").text("Tied!")
    }
    
    else if (input === "Paper" && computerChoice === "Scissors") {
        $(".result").text("You lose, try again!")
    }
    
    //  input for rock GAME LOGIC 
    if (input === "Rock" && computerChoice === "Rock") {
        $(".result").text("Tied!")
    }

    else if (input === "Rock" && computerChoice === "Paper") {
        $(".result").text("You lose, try again!")
    }

    else if (input === "Rock" && computerChoice === "Scissors") {
       $(".result").text("You win!")
    }
    
    
// input for scissors GAME LOGIC 

    if (input === "Scissors" && computerChoice === "Rock") {
        $(".result").text("You lose, try again!")
        }

    else if (input === "Scissors" && computerChoice === "Paper") {
         $(".result").text("You win!")
    }

    else if (input === "Scissors" && computerChoice === "Scissors") {
         $(".result").text("Tied!")
    }
    
// win streak

let result = $(".result").text();
console.log(result)
if (result === "You win!") {
    number += 1;
    $(".winstreak_number").text(number);

}else if(result != "You win!") {
    number = 0;
    $(".winstreak_number").text(number);
}


    
});
