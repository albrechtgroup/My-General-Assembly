// alert("General Assembly SON!!!");
let myName = "Sam Fisher";
let myAge = "unknown";
let speculatedAge = 49;
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
// Adding New Favorite Recipe to beggining of array!*
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
console.log(aboutMe.homes); // ['Brooklyn, NY', 'Adirondacks, NY']
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
// run but you do know when it should stop, use 'while'

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

// Not very efficient: because what if we wanted an
// ameicanoTotal? Dont Repeat Yourself.
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
// *Practice:
// select the first h1 element
const h1 = document.querySelector('h1');
// select the element with the id of company-name
const companyName = document.querySelector('#company-name');
// select the element with the class of sales-pitch
const salesPitch = document.querySelector('.sales-pitch');
// select all paragraph tags
const allParagraphTags = document.querySelectorAll('p');
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

// Appending elements:
// First, we create the element and store it in a variable named newPost
const newPost = document.createElement("p");
// Then, we can set properties such as the innerText
newPost.innerText = "JavaScript can be tough!";
// Then, we can grab the parent element that we want to attach our new element to
const postsDiv = document.querySelector("#posts");
// Finally, we use the appendChild method to add our newPost inside of the postsDiv
postsDiv.appendChild(newPost);

// Commonly used Event Listeners:
// *onload  // When the page loads.
// *onclick  // When a user clicks something.
// *onmouseover  // When a user hovers their mouse over something.
// *onfocus  // When a user puts the cursor on a form field.

// addEventListener() method:
function sayHello() {
    console.log("Hello!");
}
// clicked button will print a message to the console:
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

// The Event Object:
document.querySelector('#disappearing-button').onclick = function(e) {
    console.log(e.target);
    e.target.remove();
}

// When attaching functions as event listeners, you 
// might want that function to use the element that 
// was clicked. Maybe you want to grab the text that 
// was clicked to store or update it.

// When defining the function, you can add a parameter, 
// typically called e. This parameter, known as the 
// event object, is passed into the function when it’s 
// triggered. It contains helpful details about the 
// event that triggered the function, including which 
// element triggered the function: e.target.


// === CodePen: Functions Practice ===
// PROBLEM 1
// Write a function that accepts one parameter - a name - and logs "Hello I am _____"
// Fill in the blank with the name given to the function
function helloThere(name){
  console.log("Hello I am " + name);
}
helloThere("Wendy");

// PROBLEM 2
// Modify this function accept two parameters, representing which numbers you want to multiply.
// Then, add a code block that will multiply the two parameters and return the output.
function multiply(number1, number2){
  return number1 * number2
}
const four = multiply(2, 2);
if(four === 4){
  console.log("Multiplying works!");
}else{
  console.log("Something's wrong with the multiply function.")
}

// PROBLEM 3
// Write a function that accepts an array as a parameter
// The function should loop through the given array and console.log each element in the array
function printArray(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
printArray(["gold", "silver", "bronze", "participation trophy"])

// PROBLEM 4
// Write a function that finds the maximum number in a given array
// Loop through the array and keep track of the biggest number seen so far
// Once the loop is over, return the biggest number in the array
function findMax(arr){
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}


// === CodePen: DOM Manipulation ===
// Reading information from DOM elements
// 1) Console.log the text of the element with the id of "title"
const titleText = document.getElementById("title").innerText;
console.log(titleText);
// 2) Console.log the class of the first span on the page
const firstSpan = document.querySelector("span");
console.log(firstSpan.getAttribute("class"));

// Updating properties of DOM elements
// 1) Turn the text blue in the first element with the "blue" class
const blueSpan = document.querySelector(".blue");
blueSpan.style.color = "blue"
// 2) Change the text of the "#title" element to a greeting of your choice
document.querySelector("#title").innerText = "Come on in!";
// Creating new DOM elements
// 1) Create an h4 element with the text of "Powered by Javascript"
const h4 = document.createElement("h4");
h4.innerText = "Powered by JavaScript"
// 1b) Add that element to the end of the page
document.body.append(h4);
// 2) Create a ul with class "todos" and add it to the end of the page
const toDosUL = document.createElement('ul');
toDosUL.setAttribute("class", "todos");
document.body.appendChild(toDosUL);
// 2b) Looping through this array, add the strings as <li> elements
const toDoList = ["create elements", "update them", "add them to DOM"];
for(let i = 0; i < toDoList.length; i++){
  console.log(toDoList[i]);
  const newListItem = document.createElement("li");
  newListItem.innerText = toDoList[i];
  toDosUL.appendChild(newListItem);
}

// Removing elements from the DOM
// 1) Remove the #title h1 from the page
document.getElementById('title').remove();
// 2) Using a while loop, remove each child of the ul until it is empty
const toDoChildren = document.querySelector('.todos').childNodes;
while(toDoChildren.length > 0){
  toDoChildren[0].remove();
}


// === CodePen: Practice using Event Listeners ===
// PROBLEM 1
// Add an event listener to the button with the generate-greeting id
// When the button is clicked, trigger the sayHello function
function sayHello(){
  console.log("hello!");
}
document.querySelector('#generate-greeting').addEventListener('click', sayHello);

// PROBLEM 2
// When the user clicks the "Add to the List!" button:
// 1) Add a new li to the .todos ul
// 2) Fill in the li with the text from the input field
// 3) Reset the value of the input field to be empty
function addToDo(){
  const text = document.querySelector("#new-todo").value;
  const newItem = document.createElement('li');
  newItem.innerText = text;
  document.querySelector('.todos').appendChild(newItem);
  document.getElementById("new-todo").value = null;
}
document.querySelector("#generate-todo").addEventListener('click', addToDo)

// PROBLEM 3
// When the user clicks any of the li items you've added, cross it out (add styling to create the line through effect)
// This will involve attaching a listener to each <li> as you add them
// You will have to modify the code you've written above!
// Updated answer from above:
function addToDo(){
  const text = document.querySelector("#new-todo").value;
  const newItem = document.createElement('li');
  newItem.innerText = text;
  newItem.onclick = function(e){
    e.target.style["text-decoration"] = "line-through";
  }
  document.querySelector('.todos').appendChild(newItem);
  document.querySelector("#new-todo").value = null;
}
document.querySelector("#generate-todo").addEventListener('click', addToDo)
