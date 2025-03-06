// console.log("I'm second javascript file here", userEmail);

// Primitive Types

// Number
let userId = 757146671;

console.log("Value of User ID : ", userId);
console.log("Type of User ID : ", typeof userId);

// String
let userEmail = "yeshithadishan04@gmail.com";
console.log("Value of User Email : ", userEmail);
console.log("Type of User Email : ", typeof userEmail);

// Boolean
let isAuthenticated = false;
console.log("Value of Auth : ", isAuthenticated);
console.log("Type of Auth : ", typeof isAuthenticated);

// Null
let phoneNumber = null;
console.log("Value of Phone : ", phoneNumber);
console.log("Type of Phone : ", typeof phoneNumber);

// Undefined
let dob;
console.log("Value of DOB : ", dob);
console.log("Type of DOB : ", typeof dob);

//
let uniqueId = Symbol("id");
console.log("Value of UID : ", uniqueId);
console.log("Type of UID : ", typeof uniqueId);

// Object Types

// Object
let person = { name: "Yeshitha", age: 24 };
console.log("Value of Person : ", person);
console.log("Value of Person Age : ", person.age);
console.log("Type of Person : ", typeof person);
console.log("Type of Person Age : ", typeof person.age);

let myArray = [10, 20, 30, 40, 50];
console.log("Value of My Array : ", myArray);
console.log("Length of My Array : ", myArray.length);
console.log("Type of My Array  : ", typeof myArray);

function greet(name) {
  // return "Hello, " + name;
  // Template Literals (ES6)
  return `Hello, ${name}`;
}
// Calling to a js function with parameter
console.log("Value of Greet : ", greet("Yeshitha"));
console.log("Type of Greet : ", typeof greet);

// After ES6
const greet2 = (name) => {
  return `Hello, ${name}`;
};
console.log("Value of Greet 2 : ", greet2("Dishan"));
console.log("Type of Greet 2 : ", typeof greet2);

//Destructuring

// Nested user object
let user = {
  name: "Yeshitha",
  age: 24,
  data: {
    uuid: "451265787",
    token: "dahdydfa24-1ghdg",
    createdAt: "03/05/2025",
    images: ["12565215", "45656564", "1564544"],
  },
};
// const { name, age } = user; //Destructuring part
// console.log("Name : ", name);
// console.log("Age : ", age);

const { uuid } = user.data;

console.log("UUID : ", uuid);

// Optional Chaining - Need More Learn
// Nullish Coalescing
console.log("updateAt : ", user?.data?.updateAt ?? "N/A");

// Spread & Reset Operator (ES6)
const myArray1 = [10, 20, 30, 40, 50];
const myArray2 = [...myArray1, 60, 70];

// Before ES6
// myArray1.push(60);
// myArray1.push(70);

console.log(myArray1, myArray2);

const mainTitle = document.querySelector("main-title");

console.log(mainTitle);
