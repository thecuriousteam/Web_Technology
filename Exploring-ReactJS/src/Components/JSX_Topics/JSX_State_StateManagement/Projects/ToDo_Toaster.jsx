import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

// importing react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToDo_Toaster = () => {
	// state objects for todolist
	const [todo, setTodo] = useState({
		title: "",
		priority: "Low",
		description: "",
		dueDate: "",
	});

	// state to hold the array of todo's
	const [todoArray, setTodoArray] = useState([]);

	// handle input changes of todo

	const handleInputChanges = (event) => {
		const { name, value } = event.target;

		// done mistake below
		setTodo((prevTodo) => ({
			...prevTodo,
			[name]: value,
		}));
	};

	// handle add todo item to array

	const addTodo = () => {
		if (todo.title.trim()) {
			// add todo operations here *remember the logic little confusing*

			setTodoArray((prevData) => [
				...prevData,
				// todo,
				{
					// here we need to add all todo data along with duedate
					...todo,

					// new field to take created date dynamically
					createdAt: new Date().toLocaleDateString(),
				},
			]);

			toast.success("Task added successfully", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});

			// reset the object
			setTodo({
				title: "",
				priority: "Low",
				description: "",
				dueDate: "",
			});
		} else {
			toast.error("Please enter the information", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		}
	};

	const viewTask = () => {
		return (
			<div>
				{todoArray.map((todo, index) => (
					<div key={todo} className="m-3">
						<ol>
							<div
								className={`p-3 ${
									todo.priority === "High"
										? "bg-red-200 p-2 rounded-lg"
										: todo.priority === "Medium"
										? "bg-yellow-200 p-2 rounded-lg"
										: todo.priority === "Low"
										? "bg-green-200 p-2 rounded-lg"
										: "bg-purple-200 p-2 rounded-lg"
								}`}>
								<h1 className="text-lg font-mono">
									Todo List Number {index + 1}
								</h1>

								<span className="flex gap-2 text-sm m-2">
									<FaDotCircle />
									<FaDotCircle />
									<FaDotCircle />
								</span>
								<li key={todo} className="ml-2">
									<span className="font-mono mr-2">Title:</span>
									{todo.title}
								</li>
								<li key={todo} className="ml-2 break-words overflow-hidden">
									<span className="font-mono mr-2">Description:</span>
									{todo.description}
								</li>
								<li key={todo} className="ml-2">
									<span className="font-mono mr-2">Priority:</span>
									{todo.priority}
								</li>

								<div className="flex gap-2">
									<li key={todo} className="ml-2">
										<span className="font-mono mr-2">Created At:</span>
										{todo.createdAt}
									</li>
									<li key={todo}>
										<span className="font-mono mr-2">Due Date:</span>
										{todo.dueDate}
									</li>
								</div>
							</div>
						</ol>
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="flex p-10 gap-10 justify-center items-center bg-purple-200">
			<div className="p-5 w-[50%] max-w-[600px] bg-gray-100 rounded-lg shadow-lg">
				<div className="text-center m-5 font-mono text-2xl">
					<h1>Advanced Todo List</h1>
				</div>

				<div className=" max-h-[450px]">
					{/* title */}
					<div className="flex gap-2 p-2">
						<h1 className="p-2 max-w-[160px] font-mono">Enter Task Title</h1>
						<input
							type="text"
							name="title"
							value={todo.title}
							placeholder="Task Title..."
							onChange={handleInputChanges}
							className="p-2 rounded-lg max-w-[290px] w-full border-2 border-gray-200 hover:shadow-md hover:border-black"
						/>
					</div>

					{/* priority */}
					<div className="flex gap-2  p-2">
						<h1 className="p-2 max-w-[90px] w-full font-mono">Priority</h1>
						<select
							name="priority"
							value={todo.priority}
							onChange={handleInputChanges}
							className="p-2 max-w-[200px] rounded-lg border-2 border-gray-200 hover:shadow-md hover:border-black">
							<option value="">Select Priority</option>
							<option value="High">High</option>
							<option value="Medium">Medium</option>
							<option value="Low">Low</option>
						</select>
					</div>

					{/* description */}
					<div className="flex-col p-2">
						<h1 className="p-2  font-mono">Task Description</h1>
						<textarea
							name="description"
							value={todo.description}
							onChange={handleInputChanges}
							rows="4"
							cols="50"
							maxLength={100}
							wrap="hard"
							placeholder="Task Description..."
							className="p-2 mt-2 ml-2 max-h-[200px] w-full rounded-lg border-2 border-gray-200 hover:shadow-md hover:border-black"></textarea>
					</div>

					{/* due date */}
					<div className="flex gap-2 p-2">
						<h1 className="p-2 max-w-[90px] w-full font-mono">Due Date</h1>
						<input
							type="date"
							name="dueDate"
							value={todo.dueDate}
							onChange={handleInputChanges}
							placeholder="Dude Date"
							className="p-2 rounded-lg border-2 border-gray-200 hover:shadow-md hover:border-black"
						/>
					</div>

					<div className="flex gap-2 p-2">
						<button
							onClick={addTodo}
							className="p-2 flex justify-center items-center gap-2 text-white font-bold bg-purple-700 rounded-lg hover:bg-purple-600 transition-transform  hover:scale-95">
							<FaListCheck />
							Add Task
						</button>
					</div>

					{/* include toaster */}
					<ToastContainer />
				</div>
			</div>

			<div className="w-[50%] max-w-[600px] bg-gray-100 p-5 rounded-lg shadow-lg">
				<h1 className="text-center m-5 font-mono text-2xl">Table Data</h1>
				<div className="w-full max-h-[450px] h-[421px] overflow-y-scroll">
					{viewTask()}
				</div>
			</div>
		</div>
	);
};

export default ToDo_Toaster;
