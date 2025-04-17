// GET route - returns a list of items (e.g., users)
module.exports = (app) => {
	// This could be data fetched from a database in a real application
	const users = [
		{ id: 1, name: "Alice" },
		{ id: 2, name: "Bob" },
	];

	// simple get request
	app.get("/users", (req, res) => {
		res.status(200).send(users);
	});

	// get request with :id

	// GET route - get the users based on id
	app.get("/users/:id", (req, res) => {
		// store the id
		let userID = req.params.id;

		// Convert the route parameter to a number
		userID = parseInt(userID, 10);
		console.log(typeof userID);

		// finding the user
		const user = users.find((user) => user.id === userID);
		if (!user) {
			return res.status(404).send({ error: `user not found for ID ${userID}` });
		}

		res.send(user);
	});

	// GET route with multiple path parameters
	app.get("/users/:category:/:id", (req, res) => {
		const { category, id } = req.params;
		res.status(200).send({ user_category: { category }, user_id: { id } });
	});

	// GET route with optional parameters
	app.get("/users/:category/:id/edit?", (req, res) => {
		const { category, id } = req.params;
		const { edit } = req.params;

		if (edit) {
			res
				.status(200)
				.send({ user_category: { category }, user_id: { id }, mode: { edit } });
		} else {
			res.status(200).send({ user_category: { category }, user_id: { id } });
		}
	});

	// GET route with query parameter
	app.get("/search", (req, res) => {
		// Sample data
		const items = [
			{ id: 1, name: "Apple", category: "fruit" },
			{ id: 2, name: "Banana", category: "fruit" },
			{ id: 3, name: "Carrot", category: "vegetable" },
			{ id: 4, name: "Pineapple", category: "fruit" },
			{ id: 5, name: "Broccoli", category: "vegetable" },
		];

		const { q, category } = req.query;

		// filter based on category -> if category exist then apply filter to it else return the entire items

		// 1. Filter based on the 'category' parameter:
		//    - If 'category' is provided, filter the 'items' array to only include items whose 'category' property matches.
		//    - If 'category' is not provided, just use the entire 'items' array.
		let filterBasedOnCategory = category
			? items.filter((item) => item.category === category)
			: items;

		// filter based on question/query
		// 2. Filter based on the 'q' (query) parameter:
		//    - If 'q' is provided, convert 'q' to lowercase.
		//    - Then refine 'filterBasedOnCategory' to only include items whose 'name' (in lowercase) includes the query string.
		if (q) {
			let query = q.toLowerCase();

			// filter the filtered items
			filterBasedOnCategory = filterBasedOnCategory.filter((item) =>
				item.name.toLowerCase().includes(query)
			);
		}

		res.status(200).send({
			message: "Search Result",
			query: q,
			category,
			result: filterBasedOnCategory,
		});
	});
};
