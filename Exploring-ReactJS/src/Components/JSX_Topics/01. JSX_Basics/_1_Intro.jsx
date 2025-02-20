// Learn JSX syntax, embedding JavaScript, and expressions in JSX.

import React from "react";

const Level0 = () => {
	return (
		<div>
			<h1>Hello, JSX!</h1>
			<p>This is a paragraph written using JSX.</p>
		</div>
	);
};

// variables, expressions, functions
const Level1 = () => {
	const name = "Curious Community";
	const year = 2024;
	const domain = "https://community.curiousdevelopers.in";
	return (
		<div>
			<div>
				<h1>Hello, {name}</h1>
				<p>
					We established in the year {year}, and our domain is{" "}
					<a href={domain}>Visit Now</a>
				</p>
			</div>
		</div>
	);
};

// special expressions
const Level2 = () => {
	const isLoggedIn = true;
	return (
		<div>
			<h1>Welcome, {isLoggedIn ? "user" : "guest"}</h1>

			{/* printing is the user is logged in */}
			{isLoggedIn && <p>You have the message</p>}
		</div>
	);
};

// adding custom style
const Level3 = () => {
	return (
		<div
			style={{
				color: "#8800ff",
				backgroundColor: "#f7f7fe",
				padding: "20px 10px 20px 10px",
			}}>
			<h1>Curious Community</h1>
		</div>
	);
};

const Intro_React = () => {
	return (
		<div>
			Intro_React
			<div>{<Level0 />}</div>
			<div>{<Level1 />}</div>
			<div>{<Level2 />}</div>
			<div>{<Level3 />}</div>
		</div>
	);
};

export default Intro_React;
