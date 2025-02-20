// creating promise that take 2 arguments resolve and reject
const coinToss = new Promise((resolve, reject) => {
	const outcome = Math.random() > 0.5 ? "heads" : "tails";

	setTimeout(() => {
		if (outcome === "heads") {
			resolve({ data: "You got heads" });
		} else {
			reject("You got tails");
		}
	}, 3000);
});

// handling promise

coinToss
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.log(error);
	});
