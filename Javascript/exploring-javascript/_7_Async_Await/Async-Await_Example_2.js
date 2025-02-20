// async function
async function fetchData(url) {
	try {
		// fetching data from API
		const data = await fetch(url);

		// if status is not okay print error
		if (!data.ok) {
			console.log("Fetching data failed");
		}

		// parsing the response
		const parsedData = await data.json();
		console.log("APIs response:");
		console.log(parsedData);
	} catch (e) {
		console.log("Failed to fetch data", e);
	}
}

const url = "https://jsonplaceholder.typicode.com/posts/1";
fetchData(url);
