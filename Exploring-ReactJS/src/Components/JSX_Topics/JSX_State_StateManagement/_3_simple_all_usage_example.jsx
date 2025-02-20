import React, { useState } from "react";

const Example1 = () => {
	// Declare a state variable called 'count' and a function to update it (setCount).
	const [count, setCount] = useState(0); // 0 is the initial value of count.

	return (
		<div>
			<h1>Count Value: {count}</h1>
			<div className="space-x-3">
				{/* increment */}
				<button onClick={() => setCount(count + 1)}>Increment</button>
				{/* decrement */}
				<button onClick={() => setCount(count - 1)}>Decrement</button>
				{/* resetting */}
				<button onClick={() => setCount(0)}> Reset</button>
			</div>
		</div>
	);
};

// Managing Complex State (Object)
const Example2 = () => {
	// initializing state
	const [user, setUser] = useState({
		name: "Nandan",
		age: 24,
	});

	// updating object state
	const updateAge = () => setUser({ ...user, age: user.age + 1 });

	return (
		<div>
			<h1>User Name: {user.name}</h1>
			<h2>User Age: {user.age}</h2>
			<button onClick={updateAge}>Increase Age</button>
		</div>
	);
};

// managing multiple objects with modifications
const Example3 = () => {
	// initial state
	const [user, setUser] = useState({
		fullname: "",
		age: "",
		email: "",
		password: "",
	});

	// add user to update the state
	const addUser = () => {
		setUser({
			fullname: "Nandan",
			age: "24",
			email: "test@gmail.com",
			password: "testpassword",
		});
	};

	return (
		<div>
			<div>
				<h1>Name: {user.fullname}</h1>
				<h1>Age: {user.age}</h1>
				<h1>Email: {user.email}</h1>
				<h1>Password: {user.password}</h1>

				<button onClick={addUser}>Add User</button>
			</div>
		</div>
	);
};

// managing multiple objects with user input
const Example4 = () => {
	// object states
	const [user, setUser] = useState({
		fullname: "",
		age: "",
		email: "",
		password: "",
	});

	// little complex logic
	const addUser = (event) => {
		// when multiple inputs are there we need to follow below logic
		// Get name and value of the input
		const { name, value } = event.target; // Destructure the 'name' and 'value' from the input field
		setUser((prevUser) => ({
			// ...prevUser,
			...prevUser, // Keep existing values
			[name]: value, // Update the specific field
		}));
	};

	const submitUser = (event) => {
		if (user.password != "Nandan") {
			event.preventDefault();
			alert("Wrong password");
		} else {
			event.preventDefault();
			alert("Form submitted Thank you: " + user.fullname);
			console.log(user);
		}
	};

	return (
		<div>
			<div className="flex gap-2 p-2 w-[600px]">
				<h1 className="flex justify-start items-center p-2 font-mono text-[20px]">
					Enter Your Full Name:{" "}
				</h1>
				<input
					type="text"
					name="fullname"
					placeholder="your fullname..."
					value={user.name}
					onChange={addUser}
					required={true}
					className="p-2 border-2 border-slate-200 rounded-lg "
				/>
			</div>

			<div className="flex gap-2 p-2 w-[600px]">
				<h1 className="flex justify-start items-center p-2 font-mono text-[20px]">
					Enter Age:{" "}
				</h1>
				<input
					type="text"
					name="age"
					placeholder="your age..."
					value={user.age}
					onChange={addUser}
					className="p-2 border-2 border-slate-200 rounded-lg "
				/>
			</div>

			<div className="flex gap-2 p-2 w-[600px]">
				<h1 className="flex justify-start items-center p-2 font-mono text-[20px]">
					Enter Email:{" "}
				</h1>
				<input
					type="text"
					name="email"
					placeholder="your email..."
					value={user.email}
					onChange={addUser}
					className="p-2 border-2 border-slate-200 rounded-lg "
				/>
			</div>

			<div className="flex gap-2 p-2 w-[600px]">
				<h1 className="flex justify-start items-center p-2 font-mono text-[20px]">
					Enter Password:{" "}
				</h1>
				<input
					type="password"
					name="password"
					placeholder="your password..."
					value={user.password}
					onChange={addUser}
					className="p-2 border-2 border-slate-200 rounded-lg "
				/>
			</div>

			<div>
				<button
					type="submit"
					onClick={submitUser}
					className="p-2 border-[#8800ff] rounded-lg bg-[#8800ff] text-white hover:bg-[#9500ff] border-none">
					Submit
				</button>
			</div>
		</div>
	);
};

const LoginForm = () => {
	// setting states

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// login
	const handleLogin = () => {
		if (email === "nandan@gmail.com" && password === "test@123") {
			alert("Login Successful");
		} else {
			alert("Login Unsuccessful");
		}
	};
	return (
		<div>
			<div>
				<div>
					<div>
						<h1>Enter Your Email</h1>
					</div>

					<div>
						<input
							type="text"
							placeholder="Your Email..."
							value={email}
							// the below way we will take input of each state
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>
				</div>

				<div>
					<div>
						<h1>Enter Your Password</h1>
					</div>

					<div>
						<input
							type="password"
							placeholder="Your Password..."
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>
				</div>

				<div>
					<button type="submit" onClick={handleLogin}>
						Login Now
					</button>
				</div>
			</div>
		</div>
	);
};

const TodoList = () => {
	// states for todo
	const [list, setList] = useState([]);
	const [prompt, setPrompt] = useState("");
	const addTodo = () => {
		// input we need to take and that input we need pass to list

		if (prompt.trim()) {
			setList([...list, prompt]);
			setPrompt("");
		}
	};

	return (
		<div>
			<div>
				<h1>Enter your list</h1>
				<input
					type="text"
					placeholder="Enter your list..."
					value={prompt}
					onChange={(event) => setPrompt(event.target.value)}
				/>
				<button onClick={addTodo}>Add ToDo</button>

				{/* display todo */}
				<ul>
					{list.map((todo, index) => (
						<li key={index} className="list-decimal">
							{todo}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

// conditional rendering example
const ToggleButton = () => {
	// state declaration and initialization
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			{/* conditional rendering */}

			<div>
				<button onClick={() => setToggle(!toggle)}>
					{toggle ? "Show" : "Hide"} Message
				</button>
				{/* printing visibility */}

				{toggle && <h1>Thank You for clicking toggle button</h1>}
			</div>
		</div>
	);
};

const EmpData = () => {
	// State to hold the current employee's data being entered
	const [employee, setEmployee] = useState({
		empName: "",
		empID: "",
		empPhone: "",
	});

	// State to hold the list of employees added
	const [empList, setEmpList] = useState([]);

	// State to toggle whether the table is shown or hidden
	const [showTable, setShowTable] = useState(false);

	// Function to handle input changes and dynamically update the employee state
	const addEmp = (event) => {
		const { name, value } = event.target; // Extract name and value from input field
		setEmployee((prevData) => ({
			...prevData, // Keep existing fields intact
			[name]: value, // Dynamically update the field being edited
		}));
	};

	// Function to add the current employee to the list and reset the input fields
	const handleAddEmployee = () => {
		// Check if all fields are filled
		if (
			employee.empName.trim() &&
			employee.empID.trim() &&
			employee.empPhone.trim()
		) {
			// Add the employee to the list
			setEmpList((prevEmployees) => [...prevEmployees, employee]);

			// Reset input fields
			setEmployee({
				empName: "",
				empID: "",
				empPhone: "",
			});
		}
	};

	// Table displaying the list of employees dynamically
	const displayTable = (
		<table
			className="border-gray-500 w-[500px] rounded-lg shadow-lg bg-white border-separate"
			style={{ borderSpacing: "0" }}>
			<thead>
				<tr className="bg-gray-100">
					<th className="p-3 font-bold rounded-tl-lg">Employee Number</th>
					<th className="p-3 font-bold">Employee Name</th>
					<th className="p-3 font-bold">Employee ID</th>
					<th className="p-3 font-bold rounded-tr-lg">Phone Number</th>
				</tr>
			</thead>

			<tbody>
				{empList.map((emp, index) => (
					<tr key={index} className="hover:bg-gray-100">
						<td className="p-3">{index + 1}</td> {/* Employee Number */}
						<td className="p-3">{emp.empName}</td> {/* Employee Name */}
						<td className="p-3">{emp.empID}</td> {/* Employee ID */}
						<td className="p-3">{emp.empPhone}</td>{" "}
						{/* Employee Phone Number */}
					</tr>
				))}
			</tbody>
		</table>
	);

	return (
		<div className="flex-col justify-start items-center p-10">
			{/* Page Title */}
			<h1 className="flex justify-center items-center font-mono text-xl font-bold p-5">
				Curious Business Solutions Employee Data
			</h1>

			{/* Input for Employee Name */}
			<div className="flex gap-2 p-2 justify-center items-center">
				<div className="w-[150px]">
					<h1>Enter Your Name: </h1>
				</div>
				<div>
					<input
						type="text"
						name="empName" // Corresponds to state field empName
						value={employee.empName} // Controlled input
						onChange={addEmp} // Update state dynamically
						placeholder="Please enter your name as per corporate details..."
						className={"w-[500px]"}
					/>
				</div>
			</div>

			{/* Input for Employee ID */}
			<div className="flex gap-2 p-2 justify-center items-center">
				<div className="w-[150px]">
					<h1>Enter Your ID: </h1>
				</div>
				<div>
					<input
						type="text"
						name="empID" // Corresponds to state field empID
						value={employee.empID} // Controlled input
						onChange={addEmp} // Update state dynamically
						placeholder="Please enter your ID as per corporate details..."
						className={"w-[500px]"}
					/>
				</div>
			</div>

			{/* Input for Employee Phone Number */}
			<div className="flex gap-2 p-2 justify-center items-center">
				<div className="w-[150px]">
					<h1>Enter Your Phone: </h1>
				</div>
				<div>
					<input
						type="text"
						name="empPhone" // Corresponds to state field empPhone
						value={employee.empPhone} // Controlled input
						onChange={addEmp} // Update state dynamically
						placeholder="Please enter your phone number as per corporate details..."
						className={"w-[500px]"}
					/>
				</div>
			</div>

			{/* Buttons for Add Employee and Toggle Table */}
			<div className="flex gap-2 p-2 justify-center items-center">
				<div>
					<button
						onClick={handleAddEmployee} // Add employee to the list
						className="p-2 font-mono text-white bg-[#8800ff] rounded-lg">
						Add Employee
					</button>
				</div>

				<div>
					<button
						onClick={() => setShowTable(!showTable)} // Toggle table visibility
						className="p-2 font-mono text-white bg-[#8800ff] rounded-lg">
						{showTable ? "Hide" : "Show"} {/* Change button text dynamically */}
					</button>
				</div>
			</div>

			{/* Display Employee Table */}
			<div className="p-2 flex justify-center items-center mt-10">
				{showTable && displayTable} {/* Conditionally render the table */}
			</div>
		</div>
	);
};

const StateExample = () => {
	return (
		<div>
			StateExample
			<div>
				{/* <Example1 />
				<Example2 /> */}

				{/* <Example3 /> */}
				{/* <Example4 /> */}

				{/* <LoginForm /> */}

				{/* <TodoList /> */}

				{/* <ToggleButton /> */}

				<EmpData />
			</div>
		</div>
	);
};

export default StateExample;
