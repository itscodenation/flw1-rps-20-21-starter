let choice = "";
let randNum = 0;

$(".play").click(function() {
  choice = $("input").val();
  $(".userInput").text(choice);
  randNum = Math.floor(Math.random() * 3);
  $(".computerPlay").text(randNum);
});