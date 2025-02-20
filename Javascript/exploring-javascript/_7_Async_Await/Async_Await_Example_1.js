async function fetchUserData(userId) {
	try {
		// Making the HTTP request using fetch
		const apiResponse = await fetch(
			`https://jsonplaceholder.typicode.com/users/${userId}`
		);

		// Check if the response is OK (status 200-299)
		if (!apiResponse.ok) {
			console.log("Error in the API Response:" + apiResponse.toString());
		}

		// Parse the response as JSON
		const responseData = apiResponse.json();
		console.log(responseData);

		return responseData;
	} catch (err) {
		console.error(err);
	}
}

async function displayData(userId) {
	console.log(`fetching user data for User ID: ${userId}`);

	// Call the fetchUserData function and wait for the data
	const response = await fetchUserData(userId);
	// console.log(response);

	// if response is there then it will display data
	if (response) {
		console.log("Name: " + response.name);
		console.log("Email: " + response.email);
		console.log("Company: " + response.company.name);
	} else {
		console.log("No Data Found");
	}
}

displayData(1);
