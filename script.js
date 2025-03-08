import { add } from "./math.js";

// console.log("I'm second javascript file here", userEmail);

// Primitive Types

// Number
// let userId = 757146671;

// console.log("Value of User ID : ", userId);
// console.log("Type of User ID : ", typeof userId);

// String
// let userEmail = "yeshithadishan04@gmail.com";
// console.log("Value of User Email : ", userEmail);
// console.log("Type of User Email : ", typeof userEmail);

// Boolean
// let isAuthenticated = false;
// console.log("Value of Auth : ", isAuthenticated);
// console.log("Type of Auth : ", typeof isAuthenticated);

// Null
// let phoneNumber = null;
// console.log("Value of Phone : ", phoneNumber);
// console.log("Type of Phone : ", typeof phoneNumber);

// Undefined
// let dob;
// console.log("Value of DOB : ", dob);
// console.log("Type of DOB : ", typeof dob);

//
// let uniqueId = Symbol("id");
// console.log("Value of UID : ", uniqueId);
// console.log("Type of UID : ", typeof uniqueId);

// Object Types

// Object
// let person = { name: "Yeshitha", age: 24 };
// console.log("Value of Person : ", person);
// console.log("Value of Person Age : ", person.age);
// console.log("Type of Person : ", typeof person);
// console.log("Type of Person Age : ", typeof person.age);

// let myArray = [10, 20, 30, 40, 50];
// console.log("Value of My Array : ", myArray);
// console.log("Length of My Array : ", myArray.length);
// console.log("Type of My Array  : ", typeof myArray);

// function greet(name) {
// return "Hello, " + name;
// Template Literals (ES6)
//   return `Hello, ${name}`;
// }
// Calling to a js function with parameter
// console.log("Value of Greet : ", greet("Yeshitha"));
// console.log("Type of Greet : ", typeof greet);

// After ES6
// const greet2 = (name) => {
//   return `Hello, ${name}`;
// };
// console.log("Value of Greet 2 : ", greet2("Dishan"));
// console.log("Type of Greet 2 : ", typeof greet2);

//Destructuring

// Nested user object
// let user = {
//   name: "Yeshitha",
//   age: 24,
//   data: {
//     uuid: "451265787",
//     token: "dahdydfa24-1ghdg",
//     createdAt: "03/05/2025",
//     images: ["12565215", "45656564", "1564544"],
//   },
// };
// const { name, age } = user; //Destructuring part
// console.log("Name : ", name);
// console.log("Age : ", age);

// const { uuid } = user.data;

// console.log("UUID : ", uuid);

// Optional Chaining - Need More Learn
// Nullish Coalescing
// console.log("updateAt : ", user?.data?.updateAt ?? "N/A");

// Spread & Reset Operator (ES6)
// const myArray1 = [10, 20, 30, 40, 50];
// const myArray2 = [...myArray1, 60, 70];

// Before ES6
// myArray1.push(60);
// myArray1.push(70);

// console.log(myArray1, myArray2);

// const startTime = performance.now();

// console.log("I'm here before DOM Load!");

// Setting an item to the local storage
// localStorage.setItem("username", "Yeshitha");

// Setting an item to the local storage
// sessionStorage.setItem("email", "yeshithadishan04@gmail.com");

// Event Listener
// document.addEventListener("DOMContentLoaded", (event) => {
//   const endTime = performance.now();
//   const loadTime = (endTime - startTime).toFixed(2); // Calculate time in milliseconds

//   console.log("DOM fully loaded and parsed");
//   console.log(`DOM load time: ${loadTime} ms`);

//   const mainTitle = document.querySelector("#main-title");
//   console.log(mainTitle);

// change the main title
// mainTitle.textContent = "I'm the changed title!";

//   const mainButton = document.querySelector("#main-button");
//   console.log(mainButton);

//   // Bind click event to the main button
//   mainButton.addEventListener("click", () => {
//     // Change the main title
//     mainTitle.textContent = "I'm the Changed Title!";

//     setTimeout(() => {
//       window.location.reload(true);
//     }, 200);
//   });
// });

// console.log("I'm here after DOM Load!");

// console.log("User Name is : ", localStorage.getItem("username"));
// console.log("User Email is : ", sessionStorage.getItem("email"));

// Session 04

// console.log("Result of 150 + 120 : ", add(150, 120));

// if (sessionStorage.getItem("name") === null) {
//   console.log("Name is not set!");
//   // sessionStorage.setItem("name", "Yeshitha");
// } else {
//   console.log("Name is : ", sessionStorage.getItem("name"));
// }

// Promises
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     // Simulate a delay of 3 seconds
//     setTimeout(() => resolve("Operation is successful!"), 3000);
//   } else {
//     reject("Operation is failed!");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message); // Operation is successful!
//   })
//   .catch((error) => {
//     console.log(error); // Operation is failed!
//   })
//   .finally(() => {
//     console.log("Promise is completed!");
//   });

// Async & Await
// async function initializeApp() {
//   try {
//     const message = await myPromise;
//     console.log("Message : ", message);

//     const userResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     const user = await userResponse.json();

//     // Check if the user object is not null
//     if (user?.id) {
//       console.log("(1) User : ", user);
//       const postsResponse = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
//       );
//       const posts = await postsResponse.json();
//       console.log("(2) Posts : ", posts);
//     }
//   } catch (error) {
//     console.log("Error fetching data : ", error);
//   }
// }

// // Call the async function
// initializeApp();

// console.log("I'm here after the async function!");

// // Define a function that accepts a callback
// function fetchData(callback) {
//   console.log("Fetching Started!");

//   setTimeout(() => {
//     let data = { name: "Yeshitha", age: 24 };
//     callback(data);
//     console.log("Timeout Completed!");
//   }, 3000); // Simulate network request with a delay of 3 seconds

//   console.log("Fetching Completed!");
// }

// // Define a callback function
// function handleData(data) {
//   console.log("Data received : ", data);
// }

// // Call the function with the callback
// // Pass a argument to the fetchData function
// fetchData(handleData);
