import React from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./sky.jpg";

import "./styles.css";

function App() {
	return (
		<div className="App" style={{ backgroundImage: "./sky.jpg" }}>
			<h1> Weather App</h1>
			<WeatherSearch />
		</div>
	);
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
