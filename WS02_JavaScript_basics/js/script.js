// Exercise 1 – Developer Tools and Console

console.log("Hello, World!");
alert("Hello, World!");

// Display a pop-up message
alert("Tervetuloa hienolle nettisivulleni!");

// Exercise 2 – Variables

const userName = "Nita";
let age = 22;
const favoriteAnimal = "Leopardi";
    
// Print the variables to the console
console.log("My name is " + userName);
console.log("I'm " + age + " years old.");
console.log("My favorite animal is " + favoriteAnimal);

// Create a sentence using two answers
console.log("Hello! My name is " + userName + " and my favorite animal is " + favoriteAnimal + ".");

// Exercise 3 – User Input

// Ask the user for their name with prompt
const visitorName = prompt("Mikä on nimesi?");

// Print the user's answer
console.log(visitorName);

console.log("Hello, " + visitorName + "! Welcome to JavaScript.");

// Exercise 4 – Conditionals
// ask the user for their age
const visitorAge = prompt("Kuinka vanha olet?");

if (visitorAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// Exercise 5 – Functions
// function called greetuser receives name as parameter and prints a greeting
function greetUser(visitorName) {
    console.log("Hello, " + visitorName + "!");
}

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");

// Create a sentence using both answers
console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

if (visitorFavoriteAnimal === "Blue Elephant") {
    console.log("Great choice! That's my favorite animal too!");
} else {
    console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}

function viesti() {
    alert("You found the message!");
}
