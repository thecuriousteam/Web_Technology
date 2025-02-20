import React, { useState, useEffect } from "react";

function UseEffectExample1() {
	const [count, setCount] = useState(0);

	// useEffect syntax:
	// useEffect(effectFunction, [dependencies])
	useEffect(() => {
		// This code runs after every render where `count` changes.
		document.title = `use have clicked ${count} Times`;
	}, [count]); // <--- 'count' is the dependency

	return (
		<div>
			<div>
				{/* changing state */}

				<h1>Count Value is: {count}</h1>

				<button onClick={() => setCount(count + 1)}>Increment</button>
			</div>
		</div>
	);
}

function UseEffectExample2() {
	// initial state
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		// Start the timer when the component first shows up.
		const intervalId = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);

		// Return a cleanup function that stops the timer
		// when the component goes away or this effect needs to re-run.
		return () => {
			clearInterval(intervalId);
		};
	}, []);
	// The empty array means run this effect only once, when the component mounts.

	return (
		<div>
			<div>
				<h1>Seconds Passed: {seconds}</h1>
			</div>
		</div>
	);
}

function Stopwatch() {
	// variables
	const [timeLeft, setTimeLeft] = useState(10); // initially the default time is 10 seconds

	// SYNTAX:  useEffect(() => {}, []);
	useEffect(() => {
		// If timeLeft is 0, don't schedule another timeout.
		if (timeLeft === 0) return;

		// SYNTAX: const timeId = setTimeout(() => {}, 1000);
		const timeoutID = setTimeout(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		// Cleanup: Clear the timeout if the component unmounts or re-renders before the timeout finishes.
		return () => {
			clearTimeout(timeoutID);
		};
	}, [timeLeft]);
	return (
		<div>
			<div>
				<h1>Stopwatch Started: {timeLeft}</h1>
			</div>
		</div>
	);
}

function BlogPost() {
	const [post, setPost] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// function to fetch the API
		async function fetchPost() {
			try {
				// handle fetch data
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/posts"
				);
				if (!response.ok) {
					throw new Error("Error in fetching post");
				}

				const data = await response.json();
				setPost(data);
			} catch (e) {
				setError("Error in fetching post");
			} finally {
				setLoading(false);
			}
		}

		fetchPost();
	}, []);

	if (loading) return <p>Data is loading</p>;
	if (error) return <p>Error In API</p>;

	return (
		<div>
			<div>
				<h1>Posts</h1>
				<ul>
					{post.slice(0, 10).map((eachPost) => (
						<li key={eachPost.id}>
							<p className="font-bold">{eachPost.title}</p>
							<br />
							<p>{eachPost.body}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

function FetchUser() {
	const [userId, setUserId] = useState(1);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((response) => response.json())
			.then((data) => setUserData(data))
			.catch((err) => console.log(err));
	}, [userId]);

	return (
		<div>
			<div>
				{userData ? (
					<div>
						<p>ID: {userData.id}</p>
						<p>Name: {userData.name}</p>
						<p>Email: {userData.email}</p>
					</div>
				) : (
					<p>Loading Users...</p>
				)}
			</div>

			<button onClick={() => setUserId(userId + 1)}> Check New User</button>
		</div>
	);
}

const UseEffectExamples = () => {
	return (
		<div>
			useEffectExamples
			<div>
				{/* <UseEffectExample1 /> */}
				{/* <UseEffectExample2 /> */}

				{/* <Stopwatch /> */}

				{/* <FetchUser /> */}

				<BlogPost />
			</div>
		</div>
	);
};

export default UseEffectExamples;
