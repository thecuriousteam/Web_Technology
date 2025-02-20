import React from "react";

const ListDataExample1 = () => {
	const numbers = [1, 2, 3, 4, 5];

	return (
		<div>
			<ul>
				{numbers.map((number, index) => (
					<li key={index}>{number}</li>
				))}
			</ul>
		</div>
	);
};

const ListDataExample2 = () => {
	const usersInfo = [
		{
			username: "HuXn",
			email: "test@gmail.com",
			location: "USA",
		},
		{
			username: "John",
			email: "jd@gmail.com",
			location: "Arab",
		},
		{
			username: "Alex",
			email: "alexmersion@gmail.com",
			location: "India",
		},
	];

	return (
		<div>
			<div>
				{/* rending list data using traditional method */}
				<h1>Rendering Using Traditional Method</h1>
				{usersInfo.map((users) => (
					<ol key={Math.random()}>
						<li>{users.username}</li>
						<li>{users.email}</li>
						<li>{users.location}</li>
					</ol>
				))}
			</div>
		</div>
	);
};

const usersInfo = [
	{
		username: "HuXn",
		email: "test@gmail.com",
		location: "USA",
	},
	{
		username: "John",
		email: "jd@gmail.com",
		location: "Arab",
	},
	{
		username: "Alex",
		email: "alexmersion@gmail.com",
		location: "India",
	},
];

const ListDataExample3 = ({ userInfo }) => {
	return (
		<div>
			{userInfo.map(
				(
					// i want the destructured data
					{ username, email, location }
				) => (
					<ol key={Math.random()} className="list-disc">
						<li>{username}</li>
						<li>{email}</li>
						<li>{location}</li>
					</ol>
				)
			)}
		</div>
	);
};

const ListDataExamples = () => {
	return (
		<div>
			ListData
			<ListDataExample1 />
			<ListDataExample2 />
			<ListDataExample3 userInfo={usersInfo} />
		</div>
	);
};

export default ListDataExamples;
