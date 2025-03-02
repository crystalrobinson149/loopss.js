//! Part-1
/*
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
*/

console.log("// Fizz Buzz...");
for (let i = 1; i <= 100; i++) {
  let isDevisible3 = i % 3 === 0; // true if divisible by 3
  let isDevisible5 = i % 5 === 0; // true if divisible by 5

  // if both are true the I consoled Fizz Buss
  if (isDevisible3 && isDevisible5) {
    console.log("Fizz buzz");
  } else if (isDevisible3 || isDevisible5) {
    // this statement will run if one of the variables are true so,
    // we can check only for one condition to know the result
    console.log(isDevisible3 ? "Fizz" : "Buzz");
  } else {
    // this statement will run if only both varibles are false,
    // therefore, I consoled the number it self
    console.log(`Number ${i}`);
  }
}

//! Part-2

console.log("// Prime Time");
/* 
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, 
starting at n and incrementing from there.As soon as you find the prime number, 
log that number and exit the loop.*/

let startNum =
  // since my live server not working
  parseInt(
    prompt("What number should I start, to get the Next prime number 👀?")
  );
console.log("Your Number was: " + startNum);
let isPrime = false;

// while the number is not prime we are going to loop
while (!isPrime) {
  isPrime = true; // because it's easier to know if a number is not a prime, then let's assume isPrime is true

  for (let i = 2; i <= Math.sqrt(startNum); i++) {
    if (startNum % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`The next prime number is ${startNum}`);
  } else {
    startNum++;
  }
}

//! Part-3 Feeling Loopy

let cvs =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cell = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
for (let character of cvs) {
  if (character !== "," && character !== "\n") {
    cell += character;
  } else if (character === ",") {
    !cell1
      ? (cell1 = cell)
      : !cell2
      ? (cell2 = cell)
      : !cell3
      ? (cell3 = cell)
      : !cell4
      ? (cell4 = cell)
      : (cell = "");
  } else if (character === "\n") {
    console.log(cell1, cell2, cell3, cell4);
    //Reset all
    cell = "";
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  }
}
// for the last row last column
if (cell) {
  cell4 = cell;
  console.log(cell1, cell2, cell3, cell4);
}
