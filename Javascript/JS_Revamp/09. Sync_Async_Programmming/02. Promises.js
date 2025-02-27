// Promise - A promise is a object used to handle asynchronous operations, it is used to find whether the asynchronous program is successfully executed are not
// Pending, Reject, Resolve

// // synatx
// const examplePromise = new Promise((resolve, reject) => {
//   // do something
// });

// handling promise
// examplePromise.then(resolve).catch(reject).finally(completed);

// .then(()=>{}) -> connection related to resolve

// let promiseExample1 = new Promise((resolve, reject) => {
//   let x = 0;
//   if (x == 0) {
//     resolve("X === 0");
//   } else {
//     reject("X !== 0");
//   }
// });

// handling promise
// promiseExample1
//   .then((resolve) => {
//     console.log("Promise Consumed");
//     console.log("Success: " + resolve);
//   })

//   .catch((reject) => {
//     console.log("Error: " + reject);
//   })
//   .finally(() => {
//     console.log("Program executed");
//   });

// promise example 2
let promiseExample2 = new Promise((resolve, reject) => {
  let foodReady = true;
  setTimeout(() => {
    // do certain task inside timeout
    console.log("Inside Async Task");
    if (foodReady) {
      resolve("Food Ready");
    } else {
      reject("Food is not available");
    }
  }, 2000);
});

// handling promise
// promiseExample2
//   .then((resolve) => console.log({ message: resolve }))
//   .catch((reject) => console.log({ message: reject }))
//   .finally(() => console.log({ message: "Code Executed" }));

// promise example 3
let apiData = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/todos/a1")
    .then((respose) => {
      if (!respose.ok) {
        reject({ message: "failed to fetch data from API" });
      }
      return respose.json();
    })
    .then((data) => resolve({ message: data }))
    .catch((error) => reject({ message: error }));
});

// handling promise
apiData
  .then((respose) => console.log(respose))
  .catch((reject) => console.log(reject))
  .finally(() => console.log("Code Executed"));
