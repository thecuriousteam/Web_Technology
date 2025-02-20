import React, { useState } from "react";

// Managing an Array Without User Input
const ArrayUseStateExampleWithoutUserInput = () => {
	const [array, setArray] = useState([]);

	// function to add new item
	const addToArr = () => {
		const newItem = `Item ${array.length + 1}`;
		setArray((prevArray) => [...prevArray, newItem]);
	};

	/* Logic
  FUNCTION updateArray(index, newItem):
    1. Initialize an empty list: updatedList
    2. FOR each item (itm) and its index (idx) in the original array:
          IF idx == index:
            Add newItem to updatedList
          ELSE:
            Add itm to updatedList
    3. Update the state with the new list: setArray(updatedList)
  END FUNCTION
  */

	// function to update the item in array
	const updateArray = (index, newItem) => {
		const updatedList = array.map((itm, idx) =>
			idx === index ? newItem : itm
		);
		setArray(updatedList);
	};

	/*
  FUNCTION deleteItem(index):
    1. Initialize an empty list: updatedItems
    2. FOR each item (item) and its index (idx) in the original array (items):
        IF idx != index:
            Add item to updatedItems
        ELSE:
            Skip this item (do not include in updatedItems)
    3. Update the state with the new list: setItems(updatedItems)
  END FUNCTION
  */

	// function to delete the value
	const deleteItem = (index) => {
		const updatedList = array.filter((_, idx) => idx != index);
		setArray(updatedList);
	};

	const displayArray = () => {
		<div>
			<ul>
				{array.map((item, index) => {
					<li key={index}>
						`Index: ${index} Item: ${item}`{/* update and delete button */}
						<div>
							<button onClick={() => updateArray(index, `Updated ${item}`)}>
								Update Item
							</button>
							<button onClick={() => deleteItem(index)}>Delete Item</button>
						</div>
					</li>;
				})}
			</ul>
		</div>;
	};
	return (
		<div>
			<h1>Manage Array Without User Input</h1>
			<button onClick={addToArr}>Add Item</button>

			<h2>Items:</h2>
			<ul>
				{array.map((item, index) => (
					<li key={index}>
						{item}{" "}
						<div className="space-x-3">
							<button onClick={() => updateArray(index, `Updated ${item}`)}>
								Update
							</button>
							<button onClick={() => deleteItem(index)}>Delete</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

// Managing an Array With User Input
const ArrayUseStateExampleWithUserInput = () => {
	const [array, setArray] = useState([]);
	const [input, setInput] = useState("");

	// add to array
	const addInputToArray = () => {
		if (input.trim()) {
			setArray((prevInput) => [...prevInput, input]);
			setInput("");
		}
	};

	// update array item
	const updateArray = (index, newValue) => {
		// remember it should be item, index

		/**
     * SYNTAX
      array.map((currentValue, index, array) => {
      // return a transformed value
      });
     */
		const updatedArray = array.map((itm, idx) =>
			idx === index ? newValue : itm
		);
		setArray(updatedArray);
	};

	// delete array item
	const deleteArray = (index) => {
		const updatedArray = array.filter((_, idx) => idx !== index);
		setArray(updatedArray);
	};

	return (
		<div>
			<div>
				<h1>Array CURD Operations Using User Input</h1>

				<h2>Enter the array element: </h2>
				<input
					type="text"
					value={input}
					onInput={(event) => setInput(event.target.value)}
					placeholder="Enter elements to array...."
				/>

				<button onClick={addInputToArray}>Add</button>

				<div>
					<ul>
						{/* remember it should be item, index */}
						{array.map((item, index) => (
							<li key={index}>
								Item: {item}
								<div className="space-x-3">
									<button
										onClick={() => {
											const newValue = prompt(
												"Enter the value to update in index: " + index
											);

											if (newValue != null) {
												// call function
												updateArray(index, newValue);
											}
										}}>
										Update
									</button>
									<button onClick={() => deleteArray(index)}>Delete</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

const SimpleTodoList = () => {
	const [todoList, setTodoList] = useState([]);
	const [input, setInput] = useState("");

	console.log(">>>>>>>>>>>>>>>>>>>>>> Initial todoList", todoList);

	// add to todo
	const addTodo = () => {
		if (input.trim() !== "") {
			const newList = {
				id: Date.now(),
				task: input.trim(),
				complete: false,
			};
			setTodoList((prevList) => [...prevList, newList]);
			setInput("");

			// console.log("Task: ", newList.complete);
		}
	};
	console.log(
		">>>>>>>>>>>>>>>>>>>>>> After Change In State todoList",
		todoList
	);

	// logic to manipulate the checkbox
	const addCompleteStatus = (todoId) => {
		setTodoList(
			todoList.map((todo) =>
				todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
			)
		);
	};

	// updateTodo
	const updateTodoList = (index) => {
		const askInput = prompt("Enter task to update: ");

		// prompt validation
		if (askInput && askInput.trim() !== "") {
			setTodoList(
				todoList.map((todo) =>
					todo.id === index ? { ...todo, task: askInput.trim() } : todo
				)
			);
		}
	};

	const deleteTodoList = (index) => {
		setTodoList(todoList.filter((todo) => todo.id !== index));
	};

	return (
		<div>
			<div>
				<h1>Simple todo list</h1>

				<input
					type="text"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					placeholder="Enter the task input..."
				/>
				<button onClick={addTodo}>Add Task</button>
			</div>

			{/* display todo */}
			<ol>
				{todoList.map((todo) => (
					<li key={todo.id}>
						<div>
							<input
								type="checkbox"
								onChange={() => addCompleteStatus(todo.id)}
							/>
							id: {todo.id} - Task: {todo.task} - Status:{" "}
							{todo.complete === true ? "Completed" : "Pending"}
							<div className="space-x-3">
								<button onClick={() => updateTodoList(todo.id)}>Update</button>
								<button onClick={() => deleteTodoList(todo.id)}> Delete</button>
							</div>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
};

// advanced todolist
const ComplexTodo = () => {
	/*
Flowchart:
1. Start
2. Initialize states: todos (empty list), input (empty string), filter ('all').
3. User enters text into input field -> Update input state.
4. User clicks "Add":
   - Check if input is non-empty.
   - Create a new todo object.
   - Add to todos list.
   - Clear input field.
5. User interacts with todos:
   - Toggle completed status -> Update completed state of the todo.
   - Edit a todo -> Update text state of the todo.
   - Delete a todo -> Remove the todo from the list.
6. User selects filter:
   - Update filter state.
   - Display filtered todos.
7. Display todo list and handle updates.
8. End

Pseudocode:

INITIALIZE todos as empty list
INITIALIZE input as empty string
INITIALIZE filter as "all"

FUNCTION addTodo():
  IF input is not empty:
    CREATE newTodo with unique id, trimmed text from input, and completed as false
    APPEND newTodo to todos
    CLEAR input

FUNCTION toggleComplete(todoId):
  FOR EACH todo in todos:
    IF todo.id matches todoId:
      TOGGLE todo.completed

FUNCTION deleteTodo(todoId):
  REMOVE todo from todos where todo.id matches todoId

FUNCTION editTodo(todoId, newText):
  FOR EACH todo in todos:
    IF todo.id matches todoId:
      UPDATE todo.text to newText

FUNCTION changeFilter(newFilter):
  SET filter to newFilter

FUNCTION getFilteredTodos():
  IF filter is "active":
    RETURN todos where completed is false
  ELSE IF filter is "completed":
    RETURN todos where completed is true
  ELSE:
    RETURN todos

RENDER input field, add button, filter buttons, and todo list
HANDLE updates to todos and display based on filter
*/

	// State to hold the list of todos
	const [todos, setTodos] = useState([]);
	// State to manage the input value for a new todo
	const [input, setInput] = useState("");
	// State to handle the current filter (all, active, completed)
	const [filter, setFilter] = useState("all");

	// Handler to add a new todo
	const addTodo = () => {
		if (input.trim() !== "") {
			// Prevent adding empty todos
			const newTodo = {
				id: Date.now(), // Generate a unique ID for each todo
				text: input.trim(), // Save the trimmed text of the todo
				completed: false, // Initialize as not completed
			};
			setTodos([...todos, newTodo]); // Add the new todo to the list
			setInput(""); // Clear the input field
		}
	};

	// Handler to toggle the completed status of a todo
	const toggleComplete = (id) => {
		setTodos(
			todos.map(
				(todo) =>
					todo.id === id ? { ...todo, completed: !todo.completed } : todo // Flip the completed status for the matched todo
			)
		);
	};

	// Handler to delete a todo
	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id)); // Remove the todo with the matching ID
	};

	// Handler to edit a todo
	const editTodo = (id, newText) => {
		setTodos(
			todos.map(
				(todo) => (todo.id === id ? { ...todo, text: newText } : todo) // Update the text for the matched todo
			)
		);
	};

	// Handler to change the filter status
	const changeFilter = (newFilter) => {
		setFilter(newFilter); // Update the filter state
	};

	// Function to get filtered todos based on the current filter
	const filteredTodos = todos.filter((todo) => {
		if (filter === "active") return !todo.completed; // Show only active todos
		if (filter === "completed") return todo.completed; // Show only completed todos
		return true; // Show all todos
	});

	return (
		<div className="app">
			<h1>Todo Application</h1>

			{/* Input for adding a new todo */}
			<div className="input-section">
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)} // Update input state on change
					placeholder="Add a new todo..."
				/>
				<button onClick={addTodo}>Add</button> {/* Button to add a new todo */}
			</div>

			{/* Buttons to filter todos */}
			<div className="filter-section">
				<button
					onClick={() => changeFilter("all")}
					className={filter === "all" ? "active" : ""}>
					All
				</button>
				<button
					onClick={() => changeFilter("active")}
					className={filter === "active" ? "active" : ""}>
					Active
				</button>
				<button
					onClick={() => changeFilter("completed")}
					className={filter === "completed" ? "active" : ""}>
					Completed
				</button>
			</div>

			{/* List of todos */}
			<ul className="todo-list">
				{filteredTodos.map((todo) => (
					<li key={todo.id} className={todo.completed ? "completed" : ""}>
						{/* Checkbox to toggle completion */}
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => toggleComplete(todo.id)}
						/>

						{/* Editable todo text */}
						<span
							contentEditable
							suppressContentEditableWarning
							onBlur={(e) => editTodo(todo.id, e.target.textContent)} // Save changes on blur
						>
							{todo.text}
						</span>

						{/* Button to delete the todo */}
						<button onClick={() => deleteTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

const ArrayUseStateExample = () => {
	return (
		<div>
			{/* <ArrayUseStateExampleWithoutUserInput /> */}

			{/* <ArrayUseStateExampleWithUserInput /> */}

			{/* <ComplexTodo /> */}

			<SimpleTodoList />
		</div>
	);
};

export default ArrayUseStateExample;
