import React, { useState } from "react";
import { FaAtom, FaDumpster, FaTable, FaTrashAlt } from "react-icons/fa";
import { FaDeleteLeft, FaTableList, FaTrashCan } from "react-icons/fa6";
// importing react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import work from "./work.png";

const Todo_Add_Delete = () => {
	// todolist objects
	const [todo, setTodo] = useState({
		title: "",
		priority: "",
		status: "",
		dueDate: "",
	});

	// todolist array
	const [todoList, setTodoList] = useState([]);

	// handleInputChange
	const handleInputChange = (event) => {
		// user input and value
		const { name, value } = event.target;

		// add all input values to the object
		setTodo((prevObj) => ({ ...prevObj, [name]: value }));
	};

	// handle add todo to array
	const addToList = () => {
		if (todo.title.trim()) {
			// if block
			setTodoList((prevList) => [
				...prevList,
				{
					...todo,
					createdAt: new Date().toLocaleDateString(),
				},
			]);

			toast.success("Todo List Added Successfully", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});

			// resetting the state
			setTodo({
				title: "",
				priority: "",
				status: "",
				dueDate: "",
			});
		} else {
			toast.error("Please fill all required fields", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		}
	};

	// handle delete todo from array
	const deleteTodoList = (index) => {
		if (todoList.length <= 0) {
			toast.error("No Todo's available to delete", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		} else {
			// delete logic
			setTodoList(
				todoList.filter((_, i) => {
					return i != index;
				})
			);
		}
	};

	// delete all todo

	const deleteAllTodoList = () => {
		if (todoList.length <= 0) {
			toast.error("No Todo's available to delete", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		} else {
			// delete logic
			setTodoList([]);
		}
	};

	// display todo list
	const viewTodoList = () => {
		if (todoList.length <= 0) {
			return (
				<div>
					<div className="flex-col w-full p-2 justify-center items-center">
						<h1 className="mb-5 text-center text-2xl">
							List all your today's tasks
						</h1>

						<div className="flex justify-center items-center">
							<img
								src={work}
								alt="todo"
								className="w-[250px] h-[250px] justify-center items-center"
							/>
						</div>
					</div>
				</div>
			);
		} else {
			// table view
			return (
				<div className="flex justify-center items-center">
					<table className="table-auto w-full mx-auto border-separate border border-gray-200 p-2 rounded-lg overflow-x-auto">
						<thead className="border-gray-100 rounded-lg text-center  text-white">
							<tr>
								<th className="border border-gray-300 p-2 rounded-lg bg-[#8800ff] shadow-lg">
									#
								</th>
								<th className="border border-gray-300 p-2 w-[350px] rounded-lg bg-[#8800ff] shadow-lg">
									Title
								</th>
								<th className="border border-gray-300 p-2 rounded-lg bg-[#8800ff] shadow-lg">
									Priority
								</th>
								<th className="border border-gray-300 p-2 rounded-lg bg-[#8800ff] shadow-lg">
									Status
								</th>
								<th className="border border-gray-300 p-2 rounded-lg bg-[#8800ff] shadow-lg">
									Created At
								</th>
								<th className="border border-gray-300 p-2 rounded-lg bg-[#8800ff] shadow-lg">
									Due Date
								</th>
								<th className="border border-gray-300 p-2 rounded-lg bg-[#8800ff] shadow-lg">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{todoList.map((listItem, index) => (
								<tr key={index} className="">
									<td className="border border-gray-300 p-2 hover:bg-gray-100 rounded-lg hover:shadow-lg">
										{index + 1}
									</td>
									<td className="border border-gray-300 p-2 max-w-[350px] break-words whitespace-normal hover:bg-gray-100 rounded-lg hover:shadow-lg">
										{listItem.title}
									</td>
									<td className="border border-gray-300 p-2  hover:bg-gray-100 rounded-lg hover:shadow-lg">
										{listItem.priority}
									</td>
									<td className="border border-gray-300 p-2 whitespace-nowrap hover:bg-gray-100 rounded-lg hover:shadow-lg">
										{listItem.status}
									</td>
									<td className="border border-gray-300 p-2 hover:bg-gray-100 rounded-lg hover:shadow-lg">
										{listItem.createdAt}
									</td>
									<td className="border border-gray-300 p-2  whitespace-nowrap hover:bg-gray-100 rounded-lg hover:shadow-lg">
										{listItem.dueDate}
									</td>
									<td className="border border-gray-300  hover:bg-gray-100 rounded-lg hover:shadow-lg">
										<FaTrashAlt
											onClick={() => deleteTodoList(index)}
											className="flex justify-center items-center mx-auto hover:cursor-pointer text-red-500 shadow-md transition transform hover:scale-90"
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		}
	};

	return (
		<div className="flex font-mono text-balance flex-wrap">
			{/* task input */}
			<div className="flex-col h-[50%] w-[40%] justify-center items-center p-5">
				<div className="flex justify-center items-center p-2">
					<h1 className="text-3xl flex gap-2 p-2">
						<FaAtom className="text-[#8800ff] justify-center items-center hover:rotate-45" />
						Add Your Inspiring Todo
					</h1>
				</div>

				{/* inputs */}
				<div>
					{/* title */}
					<div className="flex gap-5 justify-start items-center p-5">
						<h1>Enter title for TODO</h1>
						<input
							type="text"
							name="title"
							value={todo.title}
							onChange={handleInputChange}
							placeholder="Enter title..."
							className="border-2 border-gray-200 p-2 rounded-md hover:border-black shadow-sm hover:shadow-lg w-[370px]"
						/>
					</div>

					<div className="flex gap-5 p-5">
						{/* priority */}
						<div className="flex gap-2 justify-start items-center mt-2">
							<h1>Task Priority</h1>

							<select
								name="priority"
								value={todo.priority}
								onChange={handleInputChange}
								className={`border-2 border-gray-100 p-2 rounded-md hover:border-black shadow-sm hover:shadow-lg w-auto ${
									todo.priority === "Low"
										? "bg-green-400 text-white font-bold"
										: todo.priority === "Medium"
										? "bg-yellow-400 text-white font-bold"
										: todo.priority === "High"
										? "bg-red-400 text-white font-bold"
										: "bg-blue-400 text-white font-bold"
								}`}>
								<option value="">Select Priority</option>

								<option value="High" className="bg-red-400">
									High
								</option>
								<option value="Medium" className="bg-yellow-400">
									Medium
								</option>
								<option value="Low" className="bg-green-400">
									Low
								</option>
							</select>
						</div>

						{/* status */}
						<div className="flex gap-2 justify-start items-center mt-2">
							<h1>Task Status</h1>

							<select
								name="status"
								value={todo.status}
								onChange={handleInputChange}
								className={`border-2 border-gray-100 p-2 rounded-md hover:border-black shadow-sm hover:shadow-lg w-auto ${
									todo.status === "Not Started"
										? "bg-green-400 text-white font-bold"
										: todo.status === "In Progress"
										? "bg-yellow-400 text-white font-bold"
										: todo.status === "Hold"
										? "bg-red-400 text-white font-bold"
										: todo.status === "Done"
										? "bg-blue-400 text-white font-bold"
										: "bg-blue-400 text-white font-bold"
								}`}>
								<option value="">Task Status</option>
								<option value="Not Started" className="bg-green-400">
									Not Started
								</option>
								<option value="In Progress" className="bg-yellow-400">
									In Progress
								</option>
								<option value="Hold" className="bg-red-400">
									Hold
								</option>
								<option value="Done" className="bg-purple-400">
									Done
								</option>
							</select>
						</div>
					</div>

					{/* date input */}
					<div className="flex gap-2 justify-start items-center p-5">
						<h1>Due Date For Task</h1>
						<input
							type="date"
							name="dueDate"
							value={todo.dueDate}
							placeholder="Due Date"
							onChange={handleInputChange}
							className="text-center border-2 border-gray-200 p-2 rounded-md hover:border-black shadow-sm hover:shadow-lg w-[395px]"
						/>
					</div>

					{/* button */}

					<div className="flex gap-20 p-5">
						<div>
							<button
								className="p-2 bg-[#8800ff] text-white transform transition-transform hover:scale-90 font-sans rounded-lg font-bold shadow-lg flex justify-center items-center gap-3"
								onClick={addToList}>
								<FaTableList /> Add Task
							</button>
						</div>
						<div>
							<button
								className="p-2 bg-[#8800ff] text-white transform transition-transform hover:scale-90 font-sans rounded-lg font-bold shadow-lg flex justify-center items-center gap-3"
								onClick={deleteAllTodoList}>
								<FaTrashCan /> Clear All
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* table */}
			<div className="flex h-[50%] w-[60%]">
				<div className="flex-col justify-center items-center p-2 w-full">
					<h1 className="text-3xl flex gap-2 p-5 justify-center items-center">
						<FaTable className="text-[#8800ff] justify-center items-center" />
						Table View
					</h1>

					<div className="flex justify-center items-center">
						{viewTodoList()}
					</div>
				</div>
			</div>

			<ToastContainer />
		</div>
	);
};

export default Todo_Add_Delete;
