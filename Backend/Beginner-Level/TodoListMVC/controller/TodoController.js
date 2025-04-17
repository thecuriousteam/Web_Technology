const todoStorage = require("../model/TodoModel");

const TodoController = {
	addTodo: (req, res) => {
		const { title, description } = req.body;
		if (!title || !description) {
			return res
				.status(400)
				.json({ message: "Bad Request All Fields Required" });
		}

		const createTodo = todoStorage.addTodo(title, description);
		return res
			.status(200)
			.json({ message: "Todo added successfully", data: createTodo });
	},

	updateTodo: (req, res) => {
		const id = req.params.id;

		console.log(">>>>>>>>> id inside update controller", id);
		const { status } = req.body;
		const updates = req.body;

		if (!status) {
			return res.status(400).json({ message: "Please update the status" });
		}

		console.log(">>>>>>>>>>>>>>> updates", updates);
		const updatedTodo = todoStorage.updateTodo(id, updates);
		console.log(">>>>>>>>>>>>> updated todo", updatedTodo);
		return res
			.status(200)
			.json({ message: "Todo Update Successfully", data: updatedTodo });
	},

	deleteTodo: (req, res) => {
		const { id } = req.body;

		if (!id) {
			return res
				.status(400)
				.json({ message: " Please specify the id to delete" });
		}

		const checkTodo = todoStorage.deleteTodo(id);

		if (!checkTodo) {
			return res.status(404).json({ message: "Todo Not Found" });
		}

		return res.status(200).json({ message: "Todo Deleted Successfully" });
	},

	getAllTodo: (req, res) => {
		console.log("Inside GetAllTodo Controller");

		const allTodo = todoStorage.getAllTodo();
		console.log(">>>>>>>>> alltodo", allTodo.length);

		if (allTodo.length === 0) {
			return res.status(404).json({ message: "No Todo Found", data: allTodo });
		}

		return res
			.status(200)
			.json({ message: "Todo Fetched Successfully", data: allTodo });
	},

	getTodoById: (req, res) => {
		const { id } = req.body;
		if (!id) {
			return res
				.status(400)
				.json({ message: " Please specify the id of todo" });
		}

		const todo = todoStorage.getTodoById(id);
		if (!todo) {
			return res.status(404).json({ message: `Todo not found for ID: ${id}` });
		}

		return res
			.status(200)
			.json({ message: "Todo fetched successfully.", data: todo });
	},
};

module.exports = TodoController;
