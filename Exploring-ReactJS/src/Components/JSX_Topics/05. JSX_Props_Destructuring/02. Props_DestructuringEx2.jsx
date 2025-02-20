import React from "react";
const data = [
	{
		id: 1,
		name: "John Doe",
		age: 28,
		email: "johndoe@example.com",
		location: "New York",
		profilePic: "https://via.placeholder.com/150",
	},
	{
		id: 2,
		name: "Jane Smith",
		age: 25,
		email: "janesmith@example.com",
		location: "Los Angeles",
		profilePic: "https://via.placeholder.com/150",
	},
	{
		id: 3,
		name: "Alice Johnson",
		age: 30,
		email: "alicejohnson@example.com",
		location: "Chicago",
		profilePic: "https://via.placeholder.com/150",
	},
];


// child component that receives props
const UserDataComponent = ({ id, name, age, email, location, profilePic }) => {
	return (
		<div>
			<div>
				{/* display component */}
				<ol>
					<li>{id}</li>
					<li>{name}</li>
					<li>{age}</li>
					<li>{email}</li>
					<li>{location}</li>
					<li>{profilePic}</li>
				</ol>
			</div>
		</div>
	);
};

// parent component, passing props to child component
const UserData = () => {
	return (
		<div>
			<h1>Props Destructuring</h1>
			{data.map((user) => (
				<UserDataComponent
					key={user.id}
					id={user.id}
					name={user.name}
					age={user.age}
					email={user.email}
					location={user.location}
					profilePic={user.profilePic}
				/>
			))}
		</div>
	);
};

export default UserData;
