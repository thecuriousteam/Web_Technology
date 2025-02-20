let tasks = [
	{
		id: 1,
		description: "Complete project report",
		status: "pending",
		dueDate: "2025-02-15",
	},
	{
		id: 2,
		description: "Buy groceries",
		status: "completed",
		dueDate: "2025-02-10",
	},
	{
		id: 3,
		description: "Attend team meeting",
		status: "pending",
		dueDate: "2025-02-12",
	},
];

const addTask = (description, dueDate) => {
	const newTask = {
		id: tasks.length + 1,
		description: description,
		status: "pending",
		dueDate: dueDate,
	};

	// push() operations
	tasks.push(newTask);
};

// add task logic
addTask("I want to learn react", "2025-02-13");
console.log("After adding new task >>", tasks);

// modify task based on id
const modifyTask = (taskId) => {
	tasks = tasks.map((task) => {
		if (task.id === taskId) {
			console.log({ ...task, status: "completed" });
			return { ...task, status: "completed" };
		} else {
			return task;
		}
	});
};

modifyTask(4);
console.log("After modifying task >>", tasks);

// filter task by status
const filterTaskByStatus = (status) => {
	const filteredTask = tasks.filter(
		(taskStatus) => taskStatus.status === status
	);
	return filteredTask;
};

console.log("Tasks Filtration: ", filterTaskByStatus("completed"));

// sort task by dueDate
const sortByDueDate = () => {
	return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

console.log("Sort By date >>", sortByDueDate());

// delete task
const deleteTask = (taskId) => {
	tasks = tasks.filter((task) => task.id !== taskId);
	return tasks;
};

const taskToDelete = deleteTask(4);

console.log("Deleted Task >>", tasks);
