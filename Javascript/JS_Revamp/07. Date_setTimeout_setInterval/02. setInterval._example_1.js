// setTimeout() method executes a function once after a specified delay (in milliseconds).

// setInterval(() => {
// 	console.log("Hello World");
// }, 2000);
// prints "Hello World" in every interval of time

// example 2
// let counter = 0;
// setInterval(() => {
// 	counter++;
// 	console.log(counter);
// }, 2000);
// console.log(counter);

// example 3
// setInterval(() => {
// 	let date = new Date();
// 	console.log(date.toLocaleTimeString());
// }, 1000);

// example 4
// Sending Message in counts with clear interval
// let counter = 0;
// const intervalId = setInterval(() => {
// 	counter++;
// 	console.log("Message Sending in >> " + counter);
// 	if (counter === 7) {
// 		console.log("Message Sent Successfully " + counter + " seconds");
// 		clearInterval(intervalId);
// 	}
// }, 1000);
