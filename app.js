// alert("General Assembly SON!!!");
// First Object:
const simpCharc = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};

// Creating and modifying an 'array':
const favFoods = ["tacos", "pizza", "tortellini"];
console.log(favFoods); // ["tacos", "pizza", "tortellini"];
favFoods.push("fish tacos", "berry smoothies");
console.log(favFoods);
favFoods.pop();
console.log(favFoods);

// Creating and modifying an 'object':
const aboutMe = {
  name: "Andy Albrecht",
  title: "Software Engineer",
  age: 37,
  homes: ["Brooklyn, NY", "Adirondacks, NY"]  
}
console.log(aboutMe.homes)
aboutMe.dreamJob = "Full Stack Engineer"
console.log(aboutMe)

// Concatination:
console.log("Hello!, My name is " + aboutMe.name + " and I am a " + aboutMe.dreamJob + "!!!")

// Conditionals in programming:
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
}

// 'if' statement: 
if (temperature < 60) {
   console.log("Wear a coat!");
}
if (weather === "raining") {
   console.log("Bring an umbrella!");
}

// 'if else' statements:
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
} else {
    console.log("Better catch up on your homework!");
}

// 'if, else if, else':
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
} else if (assignmentsCompleted > .65) {
   console.log("Better catch up on your homework!");
} else {
    console.log("You’ve got a lot of work left to do.");
}

// Nested! 
if (temperature < 60) {
    if (weather === "raining") {
        console.log("It's cold and raining. Time for a heavy rain jacket.");
    } else if (weather === "snowing") {
        console.log("It's cold and snowing. Get out the parka.");
    } else {
        console.log("It's cold and clear. Feels like sweater weather today.");
    }
} else {
    if (weather === "raining") {
        console.log("It's warm but it's raining. A light windbreaker will do.");
    } else if (weather === "sunny") {
        console.log("It's warm and sunny. Tank top it is.");
    } else {
        console.log("It's warm and clear. Regular old T-shirt day.");
    }
}

// Logical Operators - And && Or ||:
if(temperature === "cold" &&  windSpeed > 10){
    console.log("Time for the windbreaker!");
}

if(weather === "snowing" || weather === "raining"){
    console.log("Looks like we need to wear boots today.");
}

// 'for' loop:
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// looping over an array:
const cookies = ["chocolate chip", "gingersnap", "oatmeal raisin", "shortbread"];
for (let i = 0; i < cookies.length; i++) {
    console.log(cookies[i]);
}

// 'while' loop:
let number = 0;
while (number < 11) {
    number = number + 1;
}

///*  PART ONE: CONDITIONALS  *///

// PROBLEM 1
// Fill in the if statement of this conditional to respond to whether the user is buckledUp or not.
// Log the first message if buckledUp is false.
// Otherwise, log the second message.
const buckledUp = false;

// if () {
//   console.log("You are not buckled up. Click it or ticket!");
// }else{
//   console.log("You buckled up your seat belt. What a safe driver you are!");
// }


// PROBLEM 2
// Let's negotiate. If the price variable is less than or equal to 5, log the message "I'll take it!"
// If the price variable is greater than 5, log the message "Take off 10% and you've got a deal."
// If the price variable is greater than 10, log the message "_____ for this? You must be joking!"
// For that last statement, fill in the blank with the value of the price variable, i.e. "500 for this? You must be joking!"
// Try setting the price variable to different values and test out your conditional statements.
const price = 7.50;


// PROBLEM 3 [BONUS]
// Do I want this bicycle? The kinds of bicycles I want are either:
// a) priced under 250 dollars and blue
// b) priced over 1000 or a schwinn
// c) priced between 500-750 and orange (500 and 750 are both valid prices)
// Write a conditional chain testing the bike variable based on my conditions.
// If the bike passes these conditions, log "I'd like to ride this <color-of-bike> <brand-of-bike>"
// Use variables so when you change the bike's name/brand, the message still describes the bike.
// Try changing the variable values to test our your conditional chain.
let bikeWheels = 2;
let bikeColor = "blue";
let bikeBrand = "trek";
let bikePrice = 550;


///*  PART TWO: LOOPS  *///

// PROBLEM 1
// You put 1000 dollars into a new cryptocurrency. Good luck!
// Over ten years, the value of the investment increases by 5% each year.
// In the seventh year, the investment loses 75% instead of increasing. Eeek!
// Use a for loop to log how many years it has been and how much the investment is worth for each year.
let investment = 1000;


// PROBLEM 2
// Use a while loop to count down the days until the finale of your favorite show.
// For each day, log the message "_____ days until the last episode!"
// If the daysUntilTheFinale is evenly divisible by 7, don't log the above message.
// Instead, log "Only _____ weeks until the last episode!"
// HINT: You will need to use the modulus (%)
let daysUntilTheFinale = 30;


// PROBLEM 3
// Firing a laser has a 50% chance of hitting, reducing enemyHealth by 1 each time
// Use Math.random() to determine whether the laser was successful or not
// Continue firing lasers (subtract one from the lasers variable) until the enemyHealth is 0 or lasers is 0
// Each time, log how many lasers are left, and how much enemyHealth remains
let lasers = 10;
let enemyHealth = 5;

// Functions in JavaScript:
function takeDamage() {
    player.health -= 1;
    player.damageTaken += 1;
    player.points -= 100;
}
// Call it:
takeDamage();

// 
function sayHello() {
    console.log("Hello!");
}

sayHello();

// This is DRY code. Because if we want 'americanoTotal()'
// then this gets too long.
function latteTotal() {
  const price = 4.50;
  const salesTaxRate = .10;
  const totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
}
latteTotal(); // 'The total is $4.95

// Adding parameters:
function calculateTotal(price, salesTaxRate) {
   const totalAmount = price + (price * salesTaxRate);
   console.log("The total is $" + totalAmount);
}
calculateTotal(4.50, .10) // Same output as Above*

// Using 'return' instead of 'console.log':
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}

const total = calculateTotal(9.99, .10);

// Global scope:
const brother = "Phillip";

function sayHello() {
   console.log("Hello " + brother);
}

sayHello();   // brother can be accesed here

console.log(brother);   // and brother can be accessed here

// Local scope:
function sayHello() {
   const brother = "Phillip";
   console.log("Hello " + brother);
};

sayHello();   // brother would be logged here...

console.log(brother);   // but it can’t be accessed on its own here.

// Arrow functions:
// Older way:
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);

// Newer way w/ Arrow function:
const calculateTotal = (price, salesTaxRate) => {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);

// another:
// Old
function embraceChange() {
  console.log("Now I'm an arrow function.");
}
embraceChange();

// New
const embraceChange = () => {
  console.log("Now I'm an arrow function.");
}
embraceChange();

// 