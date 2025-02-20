import React, { useState } from "react";

// storing and updating state in strings

const StringStoreUpdate = () => {
	// state usage
	const [name, setName] = useState(""); // initially state is null

	// handling change of state if we are not taking input
	// const handleChange = () => {
	// 	setName("Nandan");
	// };

	// handling change of state if we are taking input from user
	const handleChange = (event) => {
		setName(event.target.value); //user input
	};

	return (
		<div>
			<div>
				<h1>What is your sweet name: </h1>
				<input
					type="text"
					value={name}
					onChange={handleChange}
					placeholder="your name"
				/>
				<p>Hello, {name}</p>
			</div>
		</div>
	);
};

// storing and updating state in arrays

const ArrayStoreUpdate = () => {
	// state usage

	const [item, setItem] = useState([]); //array
	const [input, setInput] = useState(""); //string

	// we take input from user and store that input inside array
	const handleChangeWithUserInput = () => {
		if (input.trim()) {
			// below we are adding all the current item (...) and new item which we entered from user input
			setItem([...item, input]);
			setInput("");
		}
	};

	// handle input with static changes

	const handleChangeWithStaticData = () => {
		setItem([...item, `Item ${item.length + 1}`]);
	};

	return (
		<div>
			<div>
				<h1>Enter your shopping list: </h1>

				{/* we are taking input so we need to create this input for input state only */}
				<input
					type="text"
					placeholder="Add One By One... "
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>
				<button onClick={handleChangeWithUserInput} className="m-2">
					Add Dynamic Item
				</button>

				<button onClick={handleChangeWithStaticData} className="m-2">
					Add Static Item
				</button>

				<div>
					<ul>
						{item.map((eachItem, index) => (
							<li key={index}>Item: {eachItem}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

// storing and updating state in objects

const ObjectStoreUpdateWay1 = () => {
	const [user, setUser] = useState({ name: "", age: "" }); //initial state

	// object properties update

	// each properties update with each function
	const updateName = (event) => {
		setUser({ ...user, name: event.target.value });
	};

	const updateAge = (event) => {
		setUser({ ...user, age: event.target.value });
	};

	return (
		<div>
			<div>
				<h1>Enter Name to update: </h1>
				<input
					type="text"
					value={user.name}
					onChange={updateName}
					placeholder="Your Name..."
				/>
			</div>
			<div>
				<h1>Enter Age to update: </h1>
				<input
					type="text"
					value={user.age}
					onChange={updateAge}
					placeholder="Your Age..."
				/>
			</div>

			<div>
				<p>
					Name: {user.name} Age:{user.age}
				</p>
			</div>
		</div>
	);
};

const ObjectStoreUpdateWay2 = () => {
	const [user, setUser] = useState({ name: "", age: "" });

	// to update there is no need to write function for each object
	const handleUpdateState = (event) => {
		const { name, value } = event.target;

		// set the user data
		setUser(
			// as we are dynamically updating values to the properties we need to use the below syntax
			// arrow function
			(prevUser) => ({ ...prevUser, [name]: value })
		);
	};

	return (
		<div>
			<div>
				<h1>Enter name: </h1>
				<input
					type="text"
					value={user.name}
					name="name"
					onChange={handleUpdateState}
					placeholder="Your Name..."
				/>
			</div>

			<div>
				<h1>Enter age: </h1>
				<input
					type="text"
					name="age"
					value={user.age}
					onChange={handleUpdateState}
					placeholder="Your age..."
				/>
			</div>

			{/* display */}
			<div>
				<p>
					Name:{user.name} Age: {user.age}
				</p>
			</div>
		</div>
	);
};

const StateUsageExamples = () => {
	return (
		<div>
			<StringStoreUpdate />
			<br />
			<ArrayStoreUpdate />
			<br />
			<ObjectStoreUpdateWay1 />

			<br />
			<ObjectStoreUpdateWay2 />
		</div>
	);
};

export default StateUsageExamples;
