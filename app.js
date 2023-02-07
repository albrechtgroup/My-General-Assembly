// alert("General Assembly SON!!!");
let myName = "Jack Reacher";
let myAge = "unknown";
let thinkAge = 49;
let homeTown = "Confidential";

// In Earlier versions, it was standard for JS 
// statements to "always" end with a semicolon...
// Newer iterations don't always require them..
// There are different style-guides governing their
// use and prob. Company to Company..

// Creating and modifying an 'array':
const favFoods = ["tacos", "pizza", "tortellini"];
console.log(favFoods); // ["tacos", "pizza", "tortellini"];
// .push() adds to End of array:
favFoods.push("fish tacos", "berry smoothies");
console.log(favFoods);
// .pop() will 'pop off' the End of array:
favFoods.pop();
// Adding New Favorite Recipe to beggiming of array!*
favFoods.unshift("Quesadilla!");
console.log(favFoods);

// First Object:
const simpCharc = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};

// Creating and modifying an 'object':
const aboutMe = {
  name: "Andy Albrecht",
  title: "Software Engineer",
  age: 37,
  homes: ["Brooklyn, NY", "Adirondacks, NY"]  
}
console.log(aboutMe.homes);
console.log(aboutMe.homes[1]); // "Adirondacks, NY"
aboutMe.dreamJob = "Full Stack Engineer";
console.log(aboutMe)

// Concatination:
console.log("Hello!, My name is " + aboutMe.name + " and I am a " + aboutMe.dreamJob + "!!!")

// Conditionals in programming:
// 'if' statement:
let assignmentsCompleted = .87; 
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
}

let temperature = 43;
let weather = "raining";
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
let nextAssignment = .77;
if (nextAssignment > .80) {
    console.log("Ready to graduate!");
} else if (nextAssignment > .65) {
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

// 'for' loop: Programmers love for their accuracy and
// precision.
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// looping over an array:
const cookies = ["chocolate chip", "gingersnap", "oatmeal raisin", "shortbread"];
for (let i = 0; i < cookies.length; i++) {
    console.log(cookies[i]);
}

// 'while' loop: Simpler and cleaner, As long as the 
// conditional is 'true', the loop continues to run. 
let number = 0;
while (number < 11) {
    number = number + 1;
}
// CAUTION!*!*!: 'while' loops are easiest to cause 
// infinite loops!!!

// 'for' or 'while'??
// *If you know exactly how many times the loop should
// execute, use a 'for' loop for its precision.
// *If you're not sure how many times the loop has to
// run but you do know when it should stop, us 'while'

// Functions in JavaScript:
function takeDamage() {
    player.health -= 1;
    player.damageTaken += 1;
    player.points -= 100;
}
// Invoking or "Calling" the function with ():
takeDamage();

//
function sayHello() {
    console.log("Hello!");
}
sayHello();

//
function latteTotal() {
  const price = 4.50;
  const salesTaxRate = .10;
  const totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
}
latteTotal(); // 'The total is $4.95

// Adding parameters:
// 'price' and 'salesTaxRate' are parameters
function calculateTotal(price, salesTaxRate) {
   const totalAmount = price + (price * salesTaxRate);
   console.log("The total is $" + totalAmount);
}
calculateTotal(4.50, .10) // Same output as Above*

// Using 'return' instead of 'console.log':
// Now, we can use the result of the function
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
// '9.99' and '.10' are arguements
const total = calculateTotal(9.99, .10);

// Scope!
// "Globally" scoped variables aren't declared inside 
// of any code block, and are available anywhere in the 
// program. "Locally" scoped variables are only available 
// inside of the code block they're declared within. A 
// let i = 0 declaration inside of a for loop is 
// a classic example– you won't be able to access that 
// particular i variable outside of the for loop.
// Global scope:
const brother = "Phillip";

function sayHello() {
   console.log("Hello " + brother);
}

sayHello(); // brother can be accesed here
console.log(brother); // and brother can be accessed here

// Local scope:
// Defined in the {
//    block of code
// }
function sayHello() {
   const brother = "Phillip";
   console.log("Hello " + brother);
};

sayHello(); // brother would be logged here...
console.log(brother); // but it can’t be accessed on its own here.

// Arrow functions:
// Older way:
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);

// Newer way w/ Arrow function:
const calculateTotalArrow = (price, salesTaxRate) => {
   return (price + (price * salesTaxRate));
}
calculateTotalArrow(4.5, .10);

// another:
// Old
function embraceChange() {
  console.log("Now I'm an arrow function.");
}
embraceChange();

// New w/ arrow function:
const embraceChangeArrow = () => {
  console.log("Now I'm an arrow function.");
}
embraceChangeArrow();

// The DOM = Document Object Model
// document.querySelector() and ""All():
// select the first h1 element
const h1 = document.querySelector();
// select the element with the id of company-name
const companyName = document.querySelector();
// select the element with the class of sales-pitch
const salesPitch = document.querySelector();
// select all paragraph tags
const allParagraphTags = document.querySelectorAll();
// select all elements inside of the advertisement div
const allAdvertisementContent = document.querySelectorAll();

// Getting, Setting, and Removing attributes:
const h1ID = document.querySelector('h1').getAttribute('id');
// This would store the ID attribute of the <h1> in the variable called h1ID.

document.querySelector('#title').setAttribute('class', 'blue');
// This would give the element with the ID of "title" a class of "blue."

document.querySelectorAll('p').removeAttribute('class');
// This would remove the class attribute from all <p> elements.

// Creating a DOM element:
const paragraph = document.createElement('p');
paragraph.innerText = "Your passwords did not match.";
paragraph.setAttribute("class", "registration-error");

// This is what's created: <p class="registration-error">Your passwords did not match.</p>

// addEventListener() method:
function sayHello() {
    console.log("Hello!");
}
document.querySelector('button').addEventListener('click', sayHello);

// onclick method:
document.querySelector('#login').onclick = respondToLoginAttempt;

// Vs. addEventListener() method:
document.querySelector('#login').addEventListener('click', respondToLoginAttempt);

// A key difference is that onclick will overwrite 
// any previous click listeners on the element, 
// whereas addEventListener() will preserve existing 
// listeners. Something else to keep in mind is that
// onclick is supported on most web browsers, while 
// addEventListener() is newer and not as universally 
// supported (looking at you, Internet Explorer).


// CODE PEN:
// PROBLEM 1
// Write a function that accepts one parameter - a name - and logs "Hello I am _____"
// Fill in the blank with the name given to the function


// PROBLEM 2
// Modify this function to accept two parameters, representing two numbers you want to multiply.
// Then, add a code block that will multiply the two parameters and return the output.
// The code block below the function is meant to check your work for the arguments 2 and 2.
function multiply(){
  //your code here
}

const four = multiply(2, 2);
if(four === 4){
  console.log("The multiply function works!");
}else{
  console.log("Something's wrong with the multiply function!")
}


// PROBLEM 3
// Write a function that accepts an array as a parameter.
// The function should loop through the given array and console.log each element in the array.
// Create your own array to test your work.


// PROBLEM 4
// Write a function that finds the maximum number in a given array.
// Loop through the array and keep track of the biggest number seen so far.
// Once the loop is over, return the biggest number in the array.