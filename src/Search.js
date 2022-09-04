import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  const [city, setCity] = useState(" ");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState(null);
  function currentWeather(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
    let apiKey = "3a9443f3da6d108da14d3f4bfbedd54c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(currentWeather);
  }

  function submitCity(event) {
    event.preventDefault();
  }
  let form = (
    <form onSubmit={submitCity}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" onClick={updateCity} />
    </form>
  );
  if (result) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Wind: {weather.wind} m/s</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
