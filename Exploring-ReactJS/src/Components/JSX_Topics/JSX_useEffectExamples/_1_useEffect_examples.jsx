import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const UseEffectSimpleCounter = () => {
	const [counter, setCounter] = useState(0);

	// useEffect(<function><dependency>)
	useEffect(() => {
		console.log("State is rendered");
	});

	return (
		<div>
			<div>
				<h1>Counter is: {counter}</h1>

				{/* onclick increase count */}
				<button onClick={() => setCounter(counter + 1)}>Increase</button>
			</div>
		</div>
	);
};

const UseEffectTimer = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		// if we want to run the effect in interval we need to use below syntax

		const timer = setInterval(() => {
			setSeconds((prevSec) => prevSec + 1);
		}, 1000);

		console.log("Counter running: " + timer);

		return () => clearTimeout(timer);
	}, []);

	// passing [seconds] props helps to run useEffect function for every seconds if we didn't pass props then useEffect function will run only once

	return (
		<div>
			<div>
				<h1>Timer: {seconds}</h1>
			</div>
		</div>
	);
};

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});

	// Effect to apply the theme on initial load and save to localStorage
	useEffect(() => {
		if (theme === "dark") {
			console.log("Theme Set to : " + theme);
			document.documentElement.classList.add("dark");
		} else {
			console.log("Theme Set to : " + theme);
			document.documentElement.classList.remove("dark");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	const themeSetting = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<div>
			<div
				className={` h-[500px] flex flex-col justify-center items-center mb-2 rounded-lg shadow-lg ${
					theme === "light"
						? "text-black bg-white shadow-lg shadow-white transition-colors duration-500"
						: "text-white bg-black shadow-lg shadow-white transition-colors duration-500"
				}`}>
				<h1 className="text-3xl font-mono font-bold">React Theme Switcher</h1>
			</div>

			<div className="justify-end items-end flex">
				<button
					onClick={themeSetting}
					className="p-5 rounded-full bg-black text-white dark:bg-white dark:text-black  shadow-md hover:shadow-lg transition-all ">
					{theme === "light" ? (
						<FaSun className="text-2xl" />
					) : (
						<FaMoon className="text-2xl" />
					)}
				</button>
			</div>
		</div>
	);
};

const UseEffectExamples = () => {
	return (
		<div>
			<div>
				{/* <UseEffectSimpleCounter /> */}

				{/* <UseEffectTimer /> */}

				<ThemeSwitcher />
			</div>
		</div>
	);
};

export default UseEffectExamples;
