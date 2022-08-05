import React from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch.js";
import Search from "./search.js";
import "./sky.jpg";

import "./styles.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: "./sky.jpg" }}>
      <h1> Weather App</h1>
      <WeatherSearch />
      <footer>
        <a href="https://github.com/patcard21/weather-search" target="_blank">
          GitHub Repository
        </a>
      </footer>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
