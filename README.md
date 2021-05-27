# Rock Paper Scissors Project

## Overview:

In this unit, coders will create a Rock, Paper, Scissors game. The Rock, Paper, Scissors game will take user choice, generate a computer choice, and display the winner to the screen. Then, coders will refactor their working project to add functions. To create this project, coders will use jQuery to take user input and display data, the Math Library to generate a random choice, and conditionals to determine the winner.

## Day 1

### Day 1 Goal 1: Set up

#### Planning

- [ ] Complete the project planning document

#### GitHub Set-Up

- [x] Go to the repository at https://github.com/itscodenation/rockpaperscissors
- [ ] Fork this repository to your Github account and import to a new workspace
- [ ] Link and commit your changes
- [ ] Make your site live on GitHub Pages

#### Code Walkthrough

- [ ] Read through the starter code given so you understand how the HTML is organized

### Day 1 Goal 2: Capture user input and display it to the screen

- [ ] Add a click handler that saves the value of the user's input to a variable
- [ ] Display the user input value on the screen, in the user choice location

#### Wrap

- [ ] Commit your changes!

## Day 2

### Day 2 Goal 1: Generate a new random number every time the user clicks the button

- [ ] Outside of your click handler, declare a randomNumber variable and set it equal to 0
- [ ] In your click handler, generate a random number and assign it to the randomNumber variable

### Day 2 Goal 2: Display the random number to the screen

- [ ] Display the randomNumber value on the screen, in the computer choice location

#### Wrap

- [ ] Commit your changes!

## Day 3

### Day 3 Goal 1: Assign different computer choices depending on the random number

- [ ] Write a conditional statement which, given the number range of randomNumber, assigns ‘rock’, ‘paper’ or ‘scissors’ to a computerChoice variable
- [ ] Update the computer choice location so it displays the computerChoice to the screen

### Day 3 Goal 2: Increase user experience (BONUS!)

- [ ] Test for edge cases by ensuring that a result appears if the user does not type an acceptable input

## Day 4

### Day 4 Goal 1: Compare the user choice and computer choice to determine a winner

- [ ] Write a compound conditional statement that compares the userChoice to the computerChoice
- [ ] Declare a variable to save the winner of the game
- [ ] Display the winner to the screen in the result div

### Day 4 Goal 2: Increase user experience (BONUS!)

- [ ] Test that your game performs correctly in case of a tie
- [ ] Clear the input value once a result is displayed so your game is ready to play again

#### Wrap

- [ ] Commit your changes!

#### Day 5

### Day 5 Goal 1: Create a function to handle your computer choice logic

- [ ] Write a function called getRandomComputerChoice that does not accept any parameters and returns computerChoice
- [ ] Move your `Math.random` inside your function
- [ ] Move your conditional logic that determines the computer choice inside your function

### Day 5 Goal 2: Call your getRandomComputerChoice function

- [ ] Call your function inside your click handler so that it determines the value of your computerChoice variable
  - [ ] HINT: Your getRandomComputerChoice function works correctly if it returns rock, paper, or scissors when called

#### Wrap

- [ ] Commit your changes!

#### Day 6

### Day 6 Goal 1: Create a function to handle your winner logic

- [ ] Write a function called chooseWinner that does accepts two parameters and returns winner
- [ ] Move your compound conditional logic that determines the winner inside your function

### Day 6 Goal 2: Call your chooseWinner function

- [ ] Call your function inside your click handler so that it determines the value of your winner variable
  - [ ] HINT: Your chooseWinner function works correctly if it returns "User wins!", "Computer wins!" or "No one wins!" when called

#### Wrap

- [ ] Commit your changes!

## Projects Extensions:

- [ ] Style the page to fit your personality
- [ ] Validates input so that it will return “Not valid input” if the user types in a wrong choice.
- [ ] Accepts any form of a word regardless of capitalization (i.e. “Rock” “rock” roCk”)
- [ ] Keeps track of total wins and losses, until the page refreshes.
- [ ] Create a game with more variety in throwing options. Example: [Rock-Paper-Scissors-Lizard-Spock](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock)

## References/Tools

- [Code Nation Reference Table]()
- [Script Tag](http://javascript.crockford.com/script.html)
- [How Jquery Works](http://learn.jquery.com/about-jquery/how-jquery-works/)
- [JQuery Events](http://api.jquery.com/category/events/)
- [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)