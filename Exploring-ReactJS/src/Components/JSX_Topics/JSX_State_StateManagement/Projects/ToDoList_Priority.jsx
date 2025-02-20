import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";

const ToDoList_Priority = () => {
	// object state
	const [listObject, setListObject] = useState({
		listTitle: "",
		listPriority: "low",
	});

	// array state
	const [listArray, setListArray] = useState([]);

	// logic to add into object by taking input
	const addObject = (event) => {
		// taking name and value from input
		const { name, value } = event.target;

		// setting object *confusing part*
		setListObject((preObject) => ({
			// keep previous object
			...preObject,

			// add field dynamically
			[name]: value,
		}));
	};

	// logic to add object into array
	const addArray = () => {
		if (listObject.listTitle.trim() && listObject.listPriority.trim()) {
			// setting array *confusing part*
			setListArray((prevObject) => [...prevObject, listObject]);
			setListObject({
				listTitle: "",
				listPriority: "",
			});
		} else {
			alert("Please add title and priority to list");
		}
	};

	const displayTodoList = () => {
		return (
			<div>
				<h2 className="text-xl font-semibold mb-4 text-gray-700">
					Your To-Do List
				</h2>

				{listArray.length > 0 ? (
					<ol className="space-y-2 ml-10">
						{listArray.map((list, index) => (
							// template literals
							<li
								key={index}
								className={`text-lg font-mono list-decimal ${
									list.listPriority === "High"
										? "bg-red-200 p-2 rounded-lg font-semibold font-mono text-black"
										: list.listPriority === "Medium"
										? "bg-yellow-200 p-2 rounded-lg font-semibold font-mono text-black"
										: list.listPriority === "Low"
										? "bg-green-200 p-2 rounded-lg font-semibold font-mono text-black"
										: "bg-transparent font-bold font-mono"
								}`}>
								<span>{list.listTitle}</span> -{" "}
								<span>{list.listPriority} Priority</span>
							</li>
						))}
					</ol>
				) : (
					<p className="text-black p-2 text-center font-mono">
						No to-dos yet! Add one above.
					</p>
				)}
			</div>
		);
	};

	return (
		<div className="max-w-xl max-h-fit mx-auto bg-gray-100 rounded-lg shadow-lg p-6 mt-10">
			<div className="text-center font-mono text-2xl font-thin p-3">
				<h1>Todo List With Priority</h1>
			</div>

			<div className="mb-10">
				{/* title */}
				<div className="flex gap-4 p-4 text-lg font-mono mx-auto w-full justify-center items-center">
					<h1>Enter the task title </h1>
					<input
						type="text"
						name="listTitle"
						value={listObject.listTitle}
						placeholder="List Title..."
						onChange={addObject}
						className="p-2 rounded-lg border-[2px] border-black"
					/>
				</div>

				<div className="flex gap-4 p-4 text-lg font-mono m-2 mx-auto w-full justify-center items-center">
					<h1>Select the task Priority</h1>
					{/* input select */}
					<select
						name="listPriority"
						value={listObject.listPriority}
						onChange={addObject}
						className="p-2 rounded-lg border-[2px] border-black">
						<option value="">Select Priority</option>
						<option value="High">High</option>
						<option value="Medium">Medium</option>
						<option value="Low">Low</option>
					</select>
				</div>

				<div>
					<button
						onClick={addArray}
						className="flex justify-center items-center gap-2 p-2 m-2 border-2 rounded-xl border-purple-700 bg-purple-700 text-white hover:bg-purple-800 transition">
						<FaTasks />
						Add Task
					</button>

					<div>{displayTodoList()}</div>
				</div>
			</div>
		</div>
	);
};

export default ToDoList_Priority;
