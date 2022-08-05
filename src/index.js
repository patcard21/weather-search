import React from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch.js";
import Search from "./search.js";

import "./sky.jpg";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1> Weather App</h1>
      <WeatherSearch />
      <div className="Footer">
        <a href="https://github.com/patcard21/weather-search" target="_blank">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
