let cpchoice=0;
let rimage = 'https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg'
let pimage = 'https://image.shutterstock.com/image-vector/hand-sign-rock-paper-scissors-600w-160446689.jpg'
let simage = 'https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000181/23262905-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg'
let loss=0
let win =0
let placement1=""
let placement2=""
let pronoun=""
function RandomComputerChoice(){
  let rn = Math.floor(Math.random()*3)
  if (rn === 0){
     return 'rock';
  }
  else if (rn === 1){
    return 'paper';
  }
  else{
    return 'scissors';
  }
}
function display(aa,whom){
  if (whom === 'computer'){
    placement1=`cpimage`;
    placement2=`computerChoice`;
    pronoun='The other player'
  }
  else if(whom==='me'){
    placement1 =`userimage`;
    placement2 =`userChoice`;
    pronoun='You'
  }
  if(aa ==='rock'){
      $(`.${placement1}`).attr('src',rimage);
      $(`.${placement2}`).text(`${pronoun} chose: Rock`);
    }
    else if(aa==='paper'){
      $(`.${placement1}`).attr('src',pimage);
      $(`.${placement2}`).text(`${pronoun} chose: Paper`);
    }
    else if(aa==='scissors'){
      $(`.${placement1}`).attr('src',simage);
      $(`.${placement2}`).text(`${pronoun} chose: Scissors`);
    }
}
function choice(one){
  if (one === 'rock'){
    return 0;
  }
  else if (one === 'paper'){
    return 1;
  }
  else if(one === 'scissors'){
    return 2;
  }
}
function chooseWinner(me,computer){
  if (me === computer){
    return "It's a Tie......"
  }
  me = choice(me);
  computer=choice(computer);
  let sum= me-computer;
  if (sum===1||sum==-2){
    win+=1;
    return "Congratulations on your win!!";
  }
  if (sum===-1||sum===2){
    loss+=1;
    return "You've lost";
  }
}
$('.play').click(function(){
  
  cpchoice = RandomComputerChoice();
  let value = $("input[type='radio'][name='option']:checked").val();
  display(cpchoice,'computer');
  display(value,'me');
  let result=chooseWinner(value,cpchoice);
  $(".results").text(result);
  //It was better nested in my opinion but ill make a compound rock version. 
  //it will overwirte my code above so dont worry
  // if (value==='rock'&& cpchoice==='rock'){
  //   $('.userimage').attr('src',rimage);
  //   $('.userChoice').text('You chose: Rock');
  //   $('.cpimage').attr('src',rimage);
  //   $('.computerChoice').text('The other player chose: Rock');
  //   $('.results').text("It's a Tie......");
  // }
  // if (value==='rock'&& cpchoice==='paper'){
  //   $('.userimage').attr('src',rimage);
  //   $('.userChoice').text('You chose: Rock');
  //   $('.cpimage').attr('src',pimage);
  //   $('.computerChoice').text('The other player chose: Paper');
  //   $('.results').text("You've lost");
  // }
  // if (value==='rock'&& cpchoice==='scissors'){
  //   $('.userimage').attr('src',rimage);
  //   $('.userChoice').text('You chose: Rock');
  //   $('.cpimage').attr('src',simage);
  //   $('.computerChoice').text('The other player chose: Scissors');
  //   $('.results').text("Congratulations to your win!!");
  //}
  // nested rock version above
//   if (value==='paper'){
//     $('.userimage').attr('src',pimage);
//     $('.userChoice').text('You chose: Paper');
//     cpdisplay(cpchoice);
//     if(cpchoice==='rock'){
//       $('.cpimage').attr('src',rimage);
//       $('.computerChoice').text('The other player chose: Rock');
//       $('.results').text("Congratulations to your win!!");
//       win=win+1
//     }
//     else if(cpchoice==='scissors'){
//       $('.cpimage').attr('src',simage);
//       $('.computerChoice').text('The other player chose: Scissors');
//       $('.results').text("You've lost");
//       loss=loss+1
//     }
//     else if(cpchoice==='paper'){
//       $('.cpimage').attr('src',pimage);
//       $('.computerChoice').text('The other player chose: Paper');
//       $('.results').text("It's a Tie......");
//     }
    
//   }   
//     if (value==='scissors'){
//     $('.userimage').attr('src',simage);
//     $('.userChoice').text('You chose: Scissors');
//     cpdisplay(cpchoice);
//     if(cpchoice==='rock'){
//       $('.cpimage').attr('src',rimage);
//       $('.computerChoice').text('The other player chose: Rock');
//       $('.results').text("You've lost");
//       loss=loss+1
//     }
//     else if(cpchoice==='scissors'){
//       $('.cpimage').attr('src',simage);
//       $('.computerChoice').text('The other player chose: Scissors');
//       $('.results').text("It's a Tie......");
//     }
//     else if(cpchoice==='paper'){
//       $('.cpimage').attr('src',pimage);
//       $('.computerChoice').text('The other player chose: Paper');
//       $('.results').text("Congratulations to your win!!");
//       win=win+1
//     }
//   }  
  $('.ts').text(`Score: ${win-loss}`);
  $('.score').text(`${win} Wins and ${loss} Losses`);
  value=''
});
