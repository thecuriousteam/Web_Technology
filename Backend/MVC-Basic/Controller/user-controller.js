const usermodeldata = require("../Model/user-model");

class userController {
	// methods with (req, res)

	// GET method to get all users
	static getAllUsers(req, res) {
		// get the data from the model and store it in variable
		const users = usermodeldata.getAllUsers();
		// frame the response to view
		res.json(users);
	}

	// POST method to add users
	static addUsers(req, res) {
		const { id, name } = req.body;
		if (!id || !name) {
			return res.status(400).json({ error: "ID and Name require" });
		}

		const newUser = { id, name };
		const addUser = usermodeldata.addUser(newUser);
		res.status(201).json(addUser);
	}

	// GET get user by id
	static getUserById(req, res) {
		const { id } = req.params;

		const fetchUser = usermodeldata.getUserById(id);
		if (!fetchUser) {
			return res.status(404).json({ error: "User not found" });
		}
		res.status(200).json(fetchUser);
	}
}

module.exports = userController;
