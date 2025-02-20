import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherLookup = () => {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// On first render, retrieve the previously saved city
	useEffect(() => {
		const savedCity = localStorage.getItem("preferredCity");
		if (savedCity) {
			setCity(savedCity);
		}
	}, []);

	// Fetch the city and weather details from the API whenever `city` changes
	useEffect(() => {
		if (!city) return;

		async function fetchWeatherDetails() {
			setLoading(true);
			setError(null);
			setWeather(null);

			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
						city
					)}&units=metric&appid=96354f474cb466aca989cda2f3fab5c7`
				);

				if (!response.ok) {
					const errorMsg = `Error fetching weather data. Status: ${response.status}`;
					setError(errorMsg);
					toast.error(errorMsg);
					return;
				}

				const data = await response.json();
				setWeather(data);
				toast.success(`Weather for ${data.name} fetched successfully!`);
				localStorage.setItem("preferredCity", city);
			} catch (e) {
				const errMsg = e.message || "City not found";
				setError(errMsg);
				toast.error(errMsg);
				setWeather(null);
			} finally {
				setLoading(false);
			}
		}

		fetchWeatherDetails();
	}, [city]);

	// Handler to set the city when the search button is clicked
	const handleSearchClick = () => {
		const enteredCity = city.trim();
		if (enteredCity) {
			setCity(enteredCity);
		} else {
			toast.error("Please enter a valid city name");
		}
	};

	return (
		<div>
			<ToastContainer position="top-right" autoClose={3000} />

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
			{error && <p>{error}</p>}

			{weather && !loading && !error && (
				<div>
					<h2>
						{weather.name}, {weather.sys.country}
					</h2>
					<p>Temperature: {weather.main.temp} °C</p>
					<p>Feels Like: {weather.main.feels_like} °C</p>
					<p>Condition: {weather.weather[0].description}</p>
					<p>Humidity: {weather.main.humidity}%</p>
				</div>
			)}
		</div>
	);
};

export default WeatherLookup;
