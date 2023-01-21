// Rock, Paper, Scissors Game*
// We'll create an object for the player and the computer.
const player = {
  currentChoice: null
}
const computer = {
  currentChoice: null
}

// The choices can go into an array.
const choices = ["Lapis", "Papyrus", "Scalpellus"];

// To get the computer's choice, we'll create a new variable called randomIndex. The variable will generate a new random number each time the program runs. See how we used choices.length? This makes sure that we're only getting a random numbers that correspond to the length of the array.
const randomIndex = Math.floor(Math.random() * choices.length);

// Then, we'll update the currentChoice property of the computer object with its choice. We get its choice by accessing the choices array at the randomIndex we generated.
computer.currentChoice = choices[randomIndex];

// Here's a console.log to check our work!
console.log("The computer chose " + computer.currentChoice);

