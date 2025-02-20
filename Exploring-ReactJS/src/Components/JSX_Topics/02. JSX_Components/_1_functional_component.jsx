import React from "react";

// functional component
const User1 = () => {
	const isLoggedIn = false;
	const username = "Curious Community";
	return (
		<div>
			<h1>{isLoggedIn ? username : "guest"}</h1>
			{isLoggedIn && <p>Welcome {username}, to our website</p>}
		</div>
	);
};

// functional component with props

const User2 = (props) => {
	const isLoggedIn = true;
	return (
		<div>
			<h1>Hello, {isLoggedIn ? props.username : "guest"}</h1>
			{isLoggedIn && <p>{props.username}, Thanks for using our application</p>}
		</div>
	);
};

// react js revamp
const GreetUser = (props) => {
	return (
		<div>
			<h1>Hello, Welcome to React js {props.user}</h1>
		</div>
	);
};

const FunctionalComponent = () => {
	return (
		<div>
			FunctionalComponent
			<User1 />
			<User2 username="Riya" />
			<User2 username="Richa" />
			<GreetUser user="Nandan" />
		</div>
	);
};

export default FunctionalComponent;
