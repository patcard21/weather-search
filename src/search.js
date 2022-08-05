import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    setMessage(`It is currently 20°C in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSearch}>
        <input type="search" placeholder="Type a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <h2> {message}</h2>
    </div>
  );
}

//*
