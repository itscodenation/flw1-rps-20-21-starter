let randomNumber = 0;

$(".play").click(function() {
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);

  let randomNumber = Math.random();
  $(".computerChoice").text(randomNumber);
});
