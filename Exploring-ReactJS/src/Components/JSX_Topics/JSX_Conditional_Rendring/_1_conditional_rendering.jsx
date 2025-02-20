import React from "react";
import PropTypes from "prop-types";

// this example takes true or false values -> if true( hello users) or else (login dashboard)
const Example1 = ({ isLoggedIn }) => {
	return (
		<div>
			<h1>Example 1 Simple Props Which takes props object</h1>

			{isLoggedIn ? (
				<h1>Hello User</h1>
			) : (
				<h1>Please login to view dashboard</h1>
			)}
		</div>
	);
};

// using if else, else if, else statement - way 1
const Example2 = ({ user }) => {
	return (
		<div>
			<div>
				{user.role === "admin" ? (
					<div>
						<h1>Admin Panel is visible</h1>
					</div>
				) : user.role === "user" ? (
					<div>
						<h1>User Dashboard is visible</h1>
					</div>
				) : user.role === "" ? (
					<div>
						<h1>User need to login</h1>
					</div>
				) : (
					<div>
						<h1>Invalid Request</h1>
					</div>
				)}
			</div>
		</div>
	);
};

// using if else, else if, else statement - way 2
function Example2_way2({ user }) {
	if (!user) {
		return <h1>Please login as user</h1>;
	} else if (user.role === "admin") {
		return (
			<div>
				<h1>Admin Dashboard</h1>
				<h2>
					Hello, {user.name}, You are {user.role}
				</h2>
				<p>Manage users, view reports, and configure system settings.</p>
			</div>
		);
	} else if (user.role === "user") {
		return (
			<div>
				<h1>User Dashboard</h1>
				<h2>
					Hello, {user.name}, You are {user.role}
				</h2>
				<p>See Dashboard and edit users dashboard</p>
			</div>
		);
	} else {
		return (
			<div>
				<h1>User Dashboard</h1>
				<h2>Hello, {user.name}</h2>
				<p>Invalid missing Role or Name {user.role}</p>
			</div>
		);
	}
}

// props validation for way 1
Example2.propTypes = {
	user: PropTypes.object.isRequired,
};

// props validation for way 2
Example2_way2.propTypes = {
	user: PropTypes.object.isRequired,
	name: PropTypes.object.isRequired,
};

// react revamp
const Dashboard = ({ isLoggedIn }) => {
	return (
		<div>
			{isLoggedIn ? (
				<div>
					<h1>You Have LoggedIn </h1>
				</div>
			) : (
				<div>
					<h1>You Need Login</h1>
				</div>
			)}
		</div>
	);
};

const Conditional_RenderingExample = () => {
	return (
		<div>
			If Else Example
			<div>
				{/* condition one */}
				<Example1 isLoggedIn={false} />

				{/* condition two */}
				<Example1 isLoggedIn={true} />

				{/* we need to call the props by below way (object inside we need to use its properties in {})  */}
				<Example2 user={{ role: "admin" }} />

				<Example2_way2 user={{ name: "Nandan", role: "admin" }} />
				<Example2_way2 user={{ name: "Nandan", role: "user" }} />
				<Example2_way2 user={{ name: "Nandan", role: "" }} />

				<Dashboard isLoggedIn={true} />
			</div>
		</div>
	);
};

export default Conditional_RenderingExample;
