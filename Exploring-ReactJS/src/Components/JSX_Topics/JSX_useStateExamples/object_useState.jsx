import React, { useState } from "react";

// object curd operation
const ObjectUseStateExampleWithoutUserInput = () => {
	const obj = {
		name: "",
		age: "",
		email: "",
	};

	const [dataObject, setDataObject] = useState(obj);

	// add operation
	const addToObj = () => {
		setDataObject({
			name: "Nandan",
			age: "24",
			email: "test@example.com",
		});
	};

	// update individual or all object properties
	const updateObj = () => {
		// update individual object (keep all prev object and update the required properties)
		// setDataObject((prevObj) => ({ ...prevObj, name: "Nandan G N" }));

		// without using return (function expression)
		setDataObject((prevObj) => ({
			...prevObj,
			name: "Nandan G N",
			age: "25",
			email: "newtestmail@gamil.com",
		}));

		// with using return (function expression)
		setDataObject((prevObj) => {
			// returning object
			return {
				...prevObj,
				name: "Nandan G N",
				age: "25",
				email: "newtestmail@gamil.com",
			};
		});
	};

	// delete obj
	const deleteObj = () => {
		setDataObject("{}");
	};

	return (
		<div>
			<div>
				{/* display information */}
				<p>Name: {dataObject.name}</p>
				<p>age: {dataObject.age}</p>
				<p>Name: {dataObject.email}</p>

				<button onClick={addToObj}>Add</button>
				<button onClick={updateObj}>Update</button>
				<button onClick={deleteObj}>Delete</button>
			</div>
		</div>
	);
};

const ObjectUseStateExampleWithUserInput = () => {
	const obj = {
		name: "",
		age: "",
		email: "",
	};

	const [dataObject, setDataObject] = useState(obj);

	const changeState = (event) => {
		const { name, value } = event.target;
		setDataObject((prevObj) => ({
			...prevObj,
			[name]: value,
		}));

		// setDataObject({
		// 	name: "",
		// 	age: "",
		// 	email: "",
		// });
	};

	const updateObj = () => {
		setDataObject((prevObj) => ({
			...prevObj,

			name: "Nandan G N",
			age: "25",
			email: "testmail.com",
		}));
	};

	return (
		<div>
			<div>
				<input
					type="text"
					name="name"
					value={dataObject.name}
					onChange={changeState}
					placeholder="Enter name"
				/>

				<input
					type="text"
					name="age"
					value={dataObject.age}
					onChange={changeState}
					placeholder="Enter age"
				/>

				<input
					type="text"
					name="email"
					value={dataObject.email}
					onChange={changeState}
					placeholder="Enter email"
				/>

				{/* display information */}
				<p>Name: {dataObject.name}</p>
				<p>age: {dataObject.age}</p>
				<p>Email: {dataObject.email}</p>
				<button onClick={changeState}>Add</button>
				<button onClick={updateObj}>Update</button>
			</div>
		</div>
	);
};

// User Management

const UserManagementCRUD = () => {
	const [user, setUser] = useState([]);
	const [formData, setFormData] = useState({
		id: "",
		name: "",
		email: "",
		createdAt: new Date().toISOString().split("T")[0], // Default today's date
	});
	const [isEditing, setIsEditing] = useState(false);

	// Handle input changes
	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!isEditing) {
			// Add a new user
			setUser([
				...user,
				{
					...formData,
					id: Date.now(),
					createdAt: new Date().toLocaleString(),
				},
			]);
		} else {
			// Edit an existing user
			setUser((prevUsers) =>
				prevUsers.map((u) => (u.id === formData.id ? { ...formData } : u))
			);
			setIsEditing(false);
		}
		setFormData({
			id: "",
			name: "",
			email: "",
			createdAt: new Date().toISOString().split("T")[0],
		});
	};

	// Edit user
	const handleEdit = (id) => {
		const userToEdit = user.find((u) => u.id === id);
		setFormData(userToEdit);
		setIsEditing(true);
	};

	// Delete user
	const handleDelete = (id) => {
		setUser(user.filter((u) => u.id !== id));
	};

	return (
		<div>
			<h1>CRUD Operations in Object</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Name"
					required
				/>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Email"
					required
				/>
				<input
					type="date"
					name="createdAt"
					value={formData.createdAt}
					onChange={handleChange}
					placeholder="Created At"
					required
				/>
				<button type="submit">{isEditing ? "Update" : "Add"} User</button>
			</form>

			<h2>Users List</h2>
			{user.length === 0 ? (
				<p>No Users Found</p>
			) : (
				<ul>
					{user.map((eachUser) => (
						<li key={eachUser.id} className="font-bold">
							{eachUser.id} : {eachUser.name} : {eachUser.email} :{" "}
							{eachUser.createdAt}
							<button onClick={() => handleEdit(eachUser.id)}>Edit</button>
							<button onClick={() => handleDelete(eachUser.id)}>Delete</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

const ObjectUseStateExample = () => {
	return (
		<div>
			{/* <ObjectUseStateExampleWithoutUserInput /> */}

			{/* <ObjectUseStateExampleWithUserInput />
			 */}
			<UserManagementCRUD />
		</div>
	);
};

export default ObjectUseStateExample;
