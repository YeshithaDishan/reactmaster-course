1)
Pending – 
The initial state. The promise is neither fulfilled nor rejected; it's waiting for an asynchronous operation to complete.

Fulfilled – 
The operation completed successfully, and the promise has a resolved value.

Rejected – 
The operation failed, and the promise has a reason for the failure (an error or rejection message).

2)
An async function always returns a Promise.
If a non-promise value is returned, it gets wrapped in a resolved Promise.
Errors inside an async function are returned as rejected Promises.

function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      let success = Math.random() > 0.3; // 70% chance of success

      if (success) {
        resolve("Data retrieved successfully!");
      } else {
        reject("Failed to fetch data");
      }
    }, 2000); // Simulating 2 seconds delay
  });
}

// Handling the Promise
fetchData()
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


3)
The await keyword is used inside async functions to pause execution until a Promise is resolved or rejected.

function getData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data received"), 2000)
  );
}

async function fetchData() {
  console.log("Fetching data...");
  let result = await getData(); // Pauses here until "Data received" is available
  console.log(result);
}

fetchData();

4)
What is a Callback Function?
A callback function is a function passed into another function and runs later when needed.

// Function that simulates retrieving user info asynchronously
function getUserInfo(callback) {
  setTimeout(() => {
    let user = { username: "Yeshitha", location: "Ganemulla" }; // Simulated user data
    callback(user); // Call the callback function with user data
  }, 1500); // Simulating a 1.5-second delay
}

// Callback function to handle the user info
function displayUserInfo(user) {
  console.log("User Info:", user);
}

// Calling the function with the callback
getUserInfo(displayUserInfo);

5)
// user clicking the "Download File" button
console.log("User clicked 'Download File' button");

// asynchronous file download using setTimeout
setTimeout(() => {
  console.log("File download started...");
}, 0); // Immediately places the callback into the message queue

// Progress updates during the download
setTimeout(() => {
  console.log("Download in progress: 50% completed");
}, 1000); // 1-second delay to simulate progress update

setTimeout(() => {
  console.log("Download complete!");
}, 3000); // 3-second delay to simulate file completion

console.log("Download request sent, waiting for file...");

Call Stack: JavaScript has a call stack where function execution is managed in a Last-In, First-Out (LIFO) order.
Web APIs (or Background Tasks): These include setTimeout, setInterval, fetch, DOM events, and other non-blocking operations.
Callback Queue (Task Queue): When an asynchronous operation is completed, its callback is pushed into the task queue.
Event Loop: It continuously checks the call stack and, if empty, moves tasks from the queue to the stack for execution.


6)
function delayedGreeting(name, callback) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
    callback();  // Calling the callback function after the greeting is logged
  }, 2000);
}

// Example of a callback function that could be passed to delayedGreeting
function afterGreeting() {
  console.log("Greeting has been displayed!");
}

// Calling the delayedGreeting function with a name and callback
delayedGreeting("Alice", afterGreeting);




