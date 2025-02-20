// console.log("Timeout Started");
// setTimeout(() => {
// 	console.log("Hello World");
// }, 2000);
// console.log("Timeout Completed");

// stopwatch
let clock = 10;

let stopwatch = () => {
	if (clock > 0) {
		console.log("Message Sending in ", clock);
		clock--;
		setTimeout(stopwatch, 500);
	} else {
		console.log("Message Sent");
	}
};

stopwatch();
