const fetchData = new Promise((resolve, reject) => {
	const status = true;

	setTimeout(() => {
		if (status) {
			resolve({ data: "Fetching successful" });
		} else {
			reject("Fetching failed");
		}
	}, 3000);
});

fetchData
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.log(error);
	});
