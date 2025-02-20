// const { json } = require("body-parser");
// const { ClientSession } = require("mongodb");

const todoStorage = [
	{
		id: 1,
		title: "Learn Express.js",
		description: "I'm learning express",
		status: false,
	},
];

class TodoModel {
	static getAllTodo() {
		return todoStorage;
	}

	static addTodo(title, description) {
		// new todo
		const newTodo = {
			id: todoStorage.length + 1,
			title: title,
			description: description || "",
			status: false,
		};
		todoStorage.push(newTodo);
		return newTodo;
	}

	static updateTodo(id, update) {
		// find todo if its there or not

		console.log(" id in model", id);
		const todo = todoStorage.find((todo_id) => todo_id.id === parseInt(id));

		console.log(">>>>>>>>>>>> todo in model", todo);
		if (!todo) {
			return null;
		}

		// update the todo
		if (update.tile !== undefined) {
			todo.title = update.title;
		}

		if (update.description !== undefined) {
			todo.description = update.description;
		}

		if (update.status !== undefined) {
			todo.status = update.status;
		}

		return todo;
	}

	static deleteTodo(id) {
		const todo_index = todoStorage.findIndex((todo_id) => todo_id.id === id);
		if (todo_index === -1) {
			return null;
		}
		// remove todo
		const removedTodo = todoStorage.splice(todo_index, 1);
		return removedTodo[0];
	}

	static getTodoById(id) {
		const index = todoStorage.findIndex((todo_id) => todo_id.id === id);
		console.log(">>>>>>>>>>>> Todo ID: ", index);

		if (index == -1) {
			return null;
		}
		return todoStorage[index];
	}
}

module.exports = TodoModel;
