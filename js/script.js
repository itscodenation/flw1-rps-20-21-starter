// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

let counter = 0;

$("button").click(function() {
  console.log($("#input").val());
  counter++;
  $("#userChoice").append(counter + ". " + $("#input").val() + '<br/>');
});

