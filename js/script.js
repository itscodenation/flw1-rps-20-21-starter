// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var rock = 1;
var paper = 2;
var scissors = 3;

// Set variables for picture sources
var none_src = "https://cdn.glitch.com/efd68b0b-8fb2-4f34-b0e2-09a101f51bf0%2Fnone.png?v=1599420363188"
var rock_src =
  "https://cdn.glitch.com/efd68b0b-8fb2-4f34-b0e2-09a101f51bf0%2Frock.png?v=1599413839296";
var paper_src =
  "https://cdn.glitch.com/efd68b0b-8fb2-4f34-b0e2-09a101f51bf0%2Fpaper.png?v=1599413827055";
var scissors_src =
  "https://cdn.glitch.com/efd68b0b-8fb2-4f34-b0e2-09a101f51bf0%2Fscissors.png?v=1599413845338";
var img_sources = [none_src, rock_src, paper_src, scissors_src];

var radioValue = $("input[name='gender']:checked").val();

$(".radio_field").change(function() {
  var selection_str = $("input[name='user_selection']:checked").val();
  var selection = parseInt(selection_str, 10);
  // read image source for the selection
  var img_src = img_sources[selection];
  // update image source
  $(".user").children("img").attr("src", img_src);
  // make visible!
  $(".choice_img .user").children("img").show();
});
