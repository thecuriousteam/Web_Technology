import React, { useState, useEffect } from "react";
// importing react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherLookup_Toaster = () => {
	// state variable to store search value
	const [searchCity, setSearchCity] = useState("");

	// state variable to store city
	const [city, setCity] = useState("");

	// store weather data
	const [weather, setWeather] = useState("null");
	const [loading, setLoading] = useState(false);

	// use effect to check weather previously fetched city is there or not
	useEffect(() => {
		const savedCity = localStorage.getItem("savedCity");
		if (savedCity) {
			setCity(savedCity);
			setSearchCity(savedCity);
		}
	}, []);

	// Fetch the city and weather details from the API whenever `city` changes

	useEffect(() => {
		if (!city) return;
		// fetch logic

		async function fetchWeatherData() {
			setLoading(true);
			// clear previous error and weather data
			setLoading(null);

			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
						city
					)}&units=metric&appid=96354f474cb466aca989cda2f3fab5c7`
				);

				if (!response.ok) {
					const error = `{message: Error fetching weather data, Status: {response.status}}`;
					toast.error(error, {
						position: "top-center",
						autoClose: 3000,
						hideProgressBar: false,
						theme: "colored",
					});
					return;
				}

				const data = await response.json();
				setWeather(data);
				toast.success(`Weather for ${data.name} fetched successfully!`);
				localStorage.setItem("preferredCity", city);
			} catch (e) {
				const error = e.message || "City Not Found";
				toast.error(error, {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: false,
					theme: "colored",
				});
				setWeather(null);
			} finally {
				setLoading(false);
			}
		}

		fetchWeatherData();
	}, [city]);

	// Handler to set the city when the search button is clicked
	const handleSearchClick = () => {
		const enteredCity = city.trim();
		if (enteredCity) {
			setCity(enteredCity);
		} else {
			toast.error("Please enter a valid city name", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				theme: "colored",
			});
		}
	};

	return (
		<div>
			WeatherLookup_Toaster
			<div>
				<input
					type="text"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					placeholder="Enter city name..."
				/>
				<button onClick={handleSearchClick}>Search</button>
			</div>
			{loading && <p>Loading Weather...</p>}
			{weather && !loading && (
				<div>
					{/* <h2>
						{weather.name}, {weather.sys.country}
					</h2> */}
					{/* <p>Temperature: {weather.main.temp} °C</p>
					<p>Feels Like: {weather.main.feels_like} °C</p>
					<p>Condition: {weather.weather[0].description}</p>
					<p>Humidity: {weather.main.humidity}%</p> */}
				</div>
			)}
			<div>
				<ToastContainer />
			</div>
		</div>
	);
};

export default WeatherLookup_Toaster;
