import React, { useState } from "react";

const StateAddDeleteExample_Array = () => {
	const [todo, setTodo] = useState([]);
	const [deleteIndex, setDeleteIndex] = useState("");

	// add operation
	const addTodo = () => {
		const newTodo = `ITEM ${todo.length + 1}`;

		setTodo([...todo, newTodo]);

		console.log(">>>>>>>>>>>> Items Added:", todo);
	};

	const deleteTodo = (index) => {
		setTodo(
			todo.filter((currentItem, currentIndex) => {
				// as i'm using {} we need to use return statement
				console.log(">>>>>>>>>>>>>>> Current Item: " + currentItem);
				return currentIndex !== index;
			})
		);
	};

	const deleteAll = () => {
		if (todo.length <= 0) {
			window.alert("Todo is empty");
		} else {
			setTodo([]);
		}
	};

	const displayTodo = () => {
		return (
			<div>
				<ol>
					{todo.map((item, index) => (
						<li key={index}>
							{item}
							<button className="m-2" onClick={() => deleteTodo(index)}>
								Delete
							</button>
						</li>
					))}
				</ol>
			</div>
		);
	};
	console.log(">>>>>>>>>>>>>>>>> After Delete Operation: ", todo);

	return (
		<div>
			<button onClick={addTodo}>Add Todo</button>
			<br />

			<button onClick={deleteAll}>Delete All</button>
			{displayTodo()}
		</div>
	);
};

export default StateAddDeleteExample_Array;
