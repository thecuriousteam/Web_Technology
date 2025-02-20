import React from "react";
import UserData from "./02. Props_DestructuringEx2";
import ProductsComponentUI from "./03. Props_DestructuringEx3";
const usersInfo = [
	{
		username: "HuXn",
		email: "test@gmail.com",
		location: "USA",
	},
];

const userData = {
	name: "John Doe",
	age: 28,
	email: "johndoe@example.com",
	location: "New York",
	profilePic: "https://via.placeholder.com/150", // Sample profile image
};

const Example1 = ({ username, email, location }) => {
	return (
		<div>
			<div>
				<p>Username: {username}</p>
				<p>Email: {email}</p>
				<p>location: {location}</p>
			</div>
		</div>
	);
};

const Example2 = ({ name, age, email, location, profilePic }) => {
	return (
		<div>
			<div>
				<p>Name: {name}</p>
				<p>Age: {age}</p>
				<p>Email: {email}</p>
				<p>Location: {location}</p>
				<p>Profile Pic: {profilePic}</p>
			</div>
		</div>
	);
};

const PropsDestructuringExample = () => {
	// when we are accessing the JSON Array we need to create a local variable (Destructure)
	// const [{ username, email, location }] = usersInfo;

	// if we not use spread syntax we need to follow below method like destructuringyo
	const { name, age, email, location, profilePic } = userData;

	return (
		<div>
			<div>
				{/* <Example1 username={username} email={email} location={location} /> */}

				{/* way 1 -> pass data using spread*/}
				{/* <Example2 {...userData} /> */}

				{/* if we not use spread syntax we need to destructure */}

				{/* way 2 -> pass data individually  */}
				{/* <Example2
					name={name}
					age={age}
					email={email}
					location={location}
					profilePic={profilePic}
				/> */}

				{/* <UserData /> */}
				<ProductsComponentUI />
			</div>
		</div>
	);
};

export default PropsDestructuringExample;
