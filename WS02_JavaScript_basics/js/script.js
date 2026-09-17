// STEP 1: Print text to the browser console is string ""

console.log("Hello, World!");
alert("Hello, World!");

// STEP 2: Variables

// Store text values in variables
const userName = "Nita";
const favoriteAnimal = "Leopardi";

// Print the variables to the console
console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);

// STEP 3: User interaction

// Display a pop-up message
alert("Tervetuloa hienolle nettisivulleni!");


// Ask the user for their name
const visitorName = prompt("Mikä on nimesi?");

// Print the user's answer
console.log(visitorName);

console.log("Hello, " + visitorName + "!");

// ask the user for their age
const visitorAge = prompt("Kuinka vanha olet?");

if (visitorAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");

// Create a sentence using both answers
console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

function viesti() {
    alert("You found the message!");
}

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

if (visitorFavoriteAnimal === "Blue Elephant") {
    console.log("Great choice! That's my favorite animal too!");
} else {
    console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}


// const visitorFavoriteAnimal = prompt("What is your favorite animal?");