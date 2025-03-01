/*
Here's is the
multiline comment
*/

// Global Variables
// camel-case (new standard)
var userEmail = "yeshithadishan04@gmail.com";

//snake-case capital for constant values
const APP_URL = "http://127.0.0.1:5500/";

// variable declaration with var
// Global variable can be access from anywhere
// var message;

// ES6 (2015)
// Can be Scoped local/function wise
// variable declaration with let

//Block Scoping
{
  var message = "I'm a var variable";
  let message2;
  message2 = "I'm a let variable"; // Later initialize
  // variable declaration with const
  const message3 = "Hello! I'm const variable";
  // cannot re-assign values to a const variable
  // const variable values should be consistent
  //message3 = "123";
}

// Try to log the scoped var variable
// console.log("Log", message);

// Function block
function myFunction() {
  let myVariable = 5000;
  // use to return a value or a variable
  return myFunction;
  // console.log("LOG 2:", message);
}

// Conditional Block
if (true) {
  let message2 = "I'm a blocked-scoped message";
  // console.log("If", message);
  var message = "I'm re-declared var variable";
  // console.log("If", message);

  // userEmail = "yeshitha.5000@gmail.com";
}

// Log myFunction()
// console.log("LOG 1:", myFunction());

//Later initialization
message = "Hello World! 1";

// myFunction();

// Re-Declaration
message = "Hello World! 2";

// console.log(message);
