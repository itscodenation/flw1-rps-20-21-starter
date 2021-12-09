let randomNumber = 0;

$(".play").click(function() {
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);

  let randomNumber = Math.ceil(Math.random() * 3);
  
  if (randomNumber === 1) {
    $(".computerChoice").text("rock");
  } else if (randomNumber === 2) {
    $(".computerChoice").text("paper");
  } else if (randomNumber === 3) {
    $(".computerChoice").text("scissors");
  }
  
});

