import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch(props) {
	const [city, setCity] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [weather, setWeather] = useState({});

	function displayWeather(response) {
		setLoaded(true);
		console.log(response.data);
		setWeather({
			temperature: Math.round(response.data.main.temp),
			wind: Math.round(response.data.wind.speed),
			humidity: Math.round(response.data.main.humidity),
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			description: response.data.weather[0].description
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = "f342232225801b254dd2b555d44be1e9";
		let units = "metric";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
		axios.get(apiUrl).then(displayWeather);

		// have access to the city
		// make an api call
		// update the weather UI
	}
	function updateCity(event) {
		setCity(event.target.value);
	}
	let form = (
		<form onSubmit={handleSubmit}>
			<input type="search" placeholder="Type a city" onChange={updateCity} />
			<button type="submit" value="Search">
				{" "}
				Search
			</button>
		</form>
	);
	if (loaded) {
		return (
			<div>
				{form}
				<ul>
					<li>Temperature: {weather.temperature} C</li>
					<li>Description: {weather.description} </li>
					<li>Wind: {weather.wind} km/h</li>
					<li>Humidity: {weather.humidity}%</li>
					<li>
						{" "}
						<img src={weather.icon} alt={weather.description} />
					</li>
				</ul>
			</div>
		);
	} else {
		return form;
	}
}
