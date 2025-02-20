import React, { useState } from "react";
import { FaFileCirclePlus, FaListCheck, FaTrash } from "react-icons/fa6";

const TaskApp = () => {
	// state variables
	const [taskName, setTaskName] = useState("");
	const [filter, setFilter] = useState("All");
	const [taskList, setTaskList] = useState([]);

	// functionality

	// add functionality
	const addTask = (event) => {
		event.preventDefault();
		if (!taskName) return;
		setTaskList([
			...taskList,
			{ id: Date.now(), name: taskName, completed: false },
		]);
		setTaskName("");
	};

	// update functionality
	const updateTaskList = (taskId) => {
		setTaskList(
			taskList.map((task) => {
				if (task.id === taskId) {
					return { ...task, completed: !task.completed };
				} else {
					return task;
				}
			})
		);
	};

	// delete task
	const deleteTask = (taskId) => {
		setTaskList(taskList.filter((task) => task.id !== taskId));
	};

	// filter functionality
	const filterList = taskList.filter((task) => {
		if (filter === "All") {
			return true;
		}
		if (filter === "Active") {
			return !task.completed;
		}
		if (filter === "Completed") {
			return task.completed;
		}
	});

	return (
		<div className="w-screen justify-center items-center flex-col">
			<div className="flex flex-col justify-center items-center mb-6 ">
				<h1 className="font-mono text-3xl font-bold">Curious Todo's</h1>
				<p className="text-[18px] font-thin">Your Productivity List 😎</p>
			</div>

			{/* form UI */}
			<div className="w-screen flex justify-center items-center">
				<form onSubmit={addTask} className="space-x-2 flex ">
					<input
						type="text"
						placeholder="Enter Your Task..."
						value={taskName}
						onChange={(event) => setTaskName(event.target.value)}
						className="border-2 p-2 border-purple-500 rounded-lg  w-[500px]"
					/>

					<div className="flex mt-2">
						<button
							type="submit"
							className="bg-purple-600 p-2 text-white font-mono rounded-lg flex justify-center items-center gap-2">
							<span>
								<FaFileCirclePlus />
							</span>
							<span>Add Task</span>
						</button>
					</div>
				</form>
			</div>

			{/* Filter Category */}
			<div className="w-screen flex justify-center items-center p-2 gap-10">
				{["All", "Active", "Completed"].map((status) => (
					<button
						key={status}
						className="bg-purple-600 p-2 rounded-lg text-white font-mono font-semibold mt-6"
						onClick={() => setFilter(status)}>
						{status}
					</button>
				))}
			</div>

			{/* task list */}
			<div className="flex flex-col justify-between items-center w-screen">
				<div className="flex flex-col justify-center items-center mt-6 ">
					<h1 className="font-mono text-3xl font-bold">Todo List</h1>
				</div>

				<div className="flex w-[500px]">
					<ul className="mt-2">
						{filterList.map((task) => (
							<li key={task.id} className="flex justify-between w-[500px] mt-5">
								<input
									type="checkbox"
									checked={task.completed}
									onChange={() => updateTaskList(task.id)}
								/>
								<p>{task.name}</p>
								<button className="" onClick={() => deleteTask(task.id)}>
									<FaTrash />
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TaskApp;
