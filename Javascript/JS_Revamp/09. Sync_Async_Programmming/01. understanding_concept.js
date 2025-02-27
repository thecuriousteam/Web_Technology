// Synchronous Programming - In this type of programming, the code is executed line by line. It means that the code is executed in steps sequence. The next line of code is executed only after the previous line of code has been executed. It is also known as blocking programming because the execution of the code is blocked until the current line of code has been executed

// Asynchronous Programming - In this type of programming, the code is executed without waiting for the previous line of code to be executed. It means that the code is executed in parallel. The next line of code is executed without waiting for the previous line of code to be executed. It is also known as non-blocking programming because the execution of the code is not blocked until the current line of code has been executed

// simple example
let a = 10;
let b = 20;
let c = a + b;

// synchronous programming

console.log("Step 1");
// this is taking time to execute
let todo = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(todo); //this returned proomise
console.log("Step 3");

// after executing the above code, this will be executed this will block the thread
console.log("The sum is: ", c);

// the above did not waited and coontinuted to execute the next task this issue con be resolved using 1. Callbacks, 2. Promises, 3. Async/Await

// asynchoronus programming resolving using async/await
console.log("Async Programming >>>");
console.log("Step 1");
// async await function
const getData = async () => {
  // await will wait for the response once get the response then it will move to the next line
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
  console.log("Step 2");
};
getData();

console.log("The sum is: ", c);
console.log("Step 3");
