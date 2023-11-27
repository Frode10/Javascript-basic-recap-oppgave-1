//? Svaret på hver av oppgavene skal konsoll logges

//* Assignment 1: Logging to the Console
console.log("----- oppgave 1 ------");

//! log into the console: Hello world!
console.log("hello world");

//* Assignment 2: Variables
console.log("----- oppgave 2 ------");
// Let defines a variable that can be changed later.
let x = 10;

// Const defines a variable that cannot be changed later.
const y = 5;

/* Creating a variable to shorten code The 2 variables above.
Output should be: "Resultatet er: 15" (hvor 15 er summen av variablene) */

//! Write code here
let variables = x + y;
console.log(variables);

//* Assignment 3:
console.log("----- oppgave 3 ------");
// Use double operators to solve the parts below:

// Incrementing a number by 1.

//! Write code here
let number = 1;
number++;
console.log(number);
// Decrementing a number by 1.

//! Write code here
let number1 = 10;
number1--;
console.log(number1);

// Multiplying a number by itself.

//! Write code here
let number2 = 10 * 10;
console.log(number2);

// Dividing a number by itself.

//! Write code here

//* Assignment 4:
console.log("----- oppgave 4 ------");
/* Make an if else statement that returns a random string */

//! Write code here
let tekst = 20;

if (tekst === 10) {
  console.log("Random tekst 1");
} else if (tekst === 20) {
  console.log("her kommer random tekst 2");
} else {
  console.log("ingenting å se her..");
}

//* Assignment 5:
console.log("----- oppgave 5 ------");
/* Make a function that uses a parameter to check if a number is odd or even */

//! Write code here

// Frode. Her brukte jeg oppslag, skjønte lite av dette.
function oddEven(x) {
  if (!Number.isInteger(x) === true) {
    return console.error("input invalid");
  }

  if (x % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
oddEven(1);
oddEven(2);
oddEven(3);

//* Assigment 6:
console.log("----- oppgave 6 ------");
/* Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working. */

//! Write code here
// Svar 1 - mr og mrs
let userTitle = "Mr";

userTitle === "Mr" ? "Mr. usertitle" : "Mrs. usertitle";
console.log(`USER: ${userTitle}`);

// Svar 2 - med true / false
let userGender = true;
userTitle = userGender ? "Mr." : "Mrs.";
console.log(`USER True/false: ${userTitle}`);

//* Assigment 8:
console.log("----- oppgave 8 ------");
/*
Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.
Use template literal in your return: `This is a template literal ${variable}`

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working. */

//! Write code here

let navn = "Gunnar";
let time = 10;

function greeting(name, time) {
  if (time <= 6) {
    console.log(`good night ${name}`);
  } else if (time <= 12) {
    console.log(`good morning ${name}`);
  } else if (time <= 17) {
    console.log(`good day ${name}`);
  } else if (time <= 24) {
    console.log(`good evening ${name}`);
  } else {
    console.log("Klokken er mer enn 24");
  }
}

greeting(navn, time);

//* Assignment 9:
console.log("----- oppgave 9 ------");
/* Write a function that takes in 2 numbers as parameters.

In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.

Use arrow function syntax.

Example: your function receives 13 and 24, it should return the sum of 24/13 */

//! Write code here
// får ikke til å output resultat med 2 desimaler
let nrArray2 = [219, 34, 56, 76, 456, 342, 555, 865, 345];

let maxNr = Math.max(...nrArray2);
let minNr = Math.min(...nrArray2);

console.log(`Største tall: ${maxNr}`);
console.log(`Minste tall: ${minNr}`);

let resultat = maxNr / minNr;

console.log(`865 / 34 = ${resultat}`);

// for løkke. Denne var vanskelig. Skjønner ikke helt.

let nrArray = [9, 34, 56, 76, 456, 342, 555, 865, 345];
let max = nrArray[0];

function bigNumber() {
  for (i = 0; i < nrArray.length; i++) {
    if (nrArray[i] > max) {
      max = nrArray[i];
    }
  }
  console.log(`Største tall er: ${max}`);
}
bigNumber();

//* Assignment 10:
console.log("----- oppgave 10 ------");
/* Make a function that uses Switch/Case or if/else,
Random Number Generator, Methods, and Arrays with Objects */

//! Write code here

console.log("--------oppgave 10 - fungerer --------");

let camera = [
  { produsent: "Canon", modell: "R5", mp: "45mp" },
  { produsent: "Olympus", modell: "OMD EM-1 Mark II", mp: "24mp" },
  { produsent: "Pentax", modell: "G100", mp: "20mp" },
  { produsent: "Pentax", modell: "K-1 Mark II", mp: "36mp" },
  { produsent: "Pentax", modell: "KP", mp: "24mp" },

  { produsent: "Canon", modell: "EOS-1D X Mark III", mp: "20.1mp" },
  { produsent: "Canon", modell: "EOS R6", mp: "20.1mp" },
  { produsent: "Canon", modell: "EOS 5D Mark IV", mp: "30.4mp" },
  { produsent: "Canon", modell: "EOS Rebel T8i", mp: "24.1mp" },
  { produsent: "Canon", modell: "EOS M50", mp: "24.1mp" },

  { produsent: "Olympus", modell: "OM-D E-M1X", mp: "20.4mp" },
  { produsent: "Olympus", modell: "OM-D E-M1 III", mp: "20.4mp" },
  { produsent: "Olympus", modell: "OM-D E-M5 Mark III", mp: "20.4mp" },
  { produsent: "Olympus", modell: "PEN-F", mp: "20.3mp" },
  { produsent: "Olympus", modell: "Tough TG-6", mp: "12mp" },
];

function kameraSelection() {
  let kameraSelect = document.getElementById("kameraSelect"); // grab selectbox
  let valgtProdusent = kameraSelect.value; //henter value fra selectdropdown html

  let resultat = document.getElementById("resultat"); // grab <p> resultat
  resultat.innerHTML = ""; // Fjern eksisterende resultat

  for (let i = 0; i < camera.length; i++) {
    if (camera[i].produsent === valgtProdusent) {
      resultat.innerHTML += `<li>Kamera ${i + 1}: ${camera[i].produsent} ${
        camera[i].modell
      }, ${camera[i].mp}</li>`;
    }
  }
}

//* BONUS assignment:
console.log("----- oppgave BONUS ------");
/*
EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string:
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/

//! Write code here

function coolMaker(cool) {}
coolMaker();

console.log("----- EGNE STUDIER ------");

let names = [
  "Per",
  "ola",
  "Jens",
  "Geir",
  "Thomas",
  "Pål",
  "Inge",
  "Jørgen",
  "Kari",
  "Hanne",
  "Therese",
];

for (let i = 0; i < 100; i++) {
  console.log(`${names}`);
}

anotherArray = ["Sarah", "Jane"];

function wordCleaner(arr) {
  let cleanedArr = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(anotherArray[i]);
    cleanedArr.push(arr[i].toUpperCase());
  }
  return cleanedArr;
}

console.log(wordCleaner(anotherArray));

// array splice studie.
const fruits = ["Banana", "Apple", "Lemon", "Kiwi", "Test"];
console.log(fruits);

fruits.splice(0, 1, "Ny post");
console.log(fruits);

console.log(fruits.length);
