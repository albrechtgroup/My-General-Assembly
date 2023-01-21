const player = {
  currentChoice: null
}
const computer = {
  currentChoice: null
}
const choices = ["Lapis", "Papyrus", "Scalpellus"];
// Here's where the player makes their choice. Try changing the index in the line below to test out the conditional!
player.currentChoice = choices[0];

// Here, we're wrapping the randomIndex generator, which helps us determine the computer's choice, in a new function called computerChooses
function computerChooses(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}

// Here, we're wrapping our conditional logic in a function called compareChoices. The code itself doesn't change, but now we have a function that we can easily invoke later in the program. We'll call the computerChooses function here to generate the computer's random choice.
function compareChoices(){
  computerChooses();
  if(computer.currentChoice === player.currentChoice){
    console.log("It's a tie! The computer and player both chose " + computer.currentChoice);
  }else if(computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
      console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
      console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
      console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }
}

// Finally, don't forget to invoke the function!
compareChoices();
