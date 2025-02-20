import React, { useState } from "react";
// importing react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm_Project = () => {
	const [userObject, setUserObject] = useState({
		id: "",
		name: "",
		project: "",
		dueDate: "",
	});

	const [searchUser, setSearchUser] = useState("");

	const [userList, setUserList] = useState([]);

	// handle input changes
	const inputChange = (event) => {
		const { name, value } = event.target;
		// set user object
		setUserObject((prevObj) => ({ ...prevObj, [name]: value }));
	};

	// add to array

	const addUser = () => {
		if (userObject.name.trim()) {
			//if logic -> add all data
			setUserList((prevData) => [
				...prevData,
				{
					...userObject,
					joinedAt: new Date().toLocaleTimeString(),
				},
			]);

			// success message
			toast.success("Date added successfully", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});

			// empty input
			setUserObject({
				id: "",
				name: "",
				project: "",
				dueDate: "",
			});
		} else {
			// else logic

			toast.error("Please fill all required fields", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		}
	};

	const checkUser = (name) => {
		// check user exist inside the list

		// .some() => it is a call back function which runs on each element of array, returns true if exist or false if not exist
		const checkList = userList.some((user) => user.name === name);
		if (checkList) {
			return toast.success("User existed in the object", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		} else {
			return toast.error("User not existed in the object", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		}
	};

	return (
		<div>
			<div>
				<h1>Login Form</h1>
			</div>

			<input
				name="name"
				value={userObject.name}
				onChange={inputChange}
				placeholder="Enter user name"
			/>
			<input
				name="project"
				value={userObject.project}
				onChange={inputChange}
				placeholder="Enter project name"
			/>
			<input
				name="dueDate"
				value={userObject.dueDate}
				onChange={inputChange}
				placeholder="Enter due date"
			/>
			<button onClick={addUser}>Add User</button>

			{/* taking input to search */}
			<input
				type="text"
				value={searchUser}
				onChange={(event) => setSearchUser(event.target.value)}
				placeholder="Enter the name to search..."
			/>

			<button onClick={() => checkUser(searchUser)}> check user</button>
			<ToastContainer />
		</div>
	);
};

export default LoginForm_Project;
