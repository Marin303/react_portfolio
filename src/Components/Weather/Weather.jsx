import React, { useState } from "react";
import ChatCss from "../../Components/Chat/Chat.module.css";

const useWeatherFetch = (location) => {
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = () => {
    if (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
        })
        .catch(() => console.log("Failed to load weather data"));
    }
  };

  return { weather, fetchWeatherData };
};

const Weather = ({ isActive }) => {
  const [location, setLocation] = useState("");
  const { weather, fetchWeatherData } = useWeatherFetch(location);
const [checkCondition, setCheckCondition] = useState(false)

  if (!isActive) {
    return null;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLocation("");
    setCheckCondition(true)
  };

  return (
    <div className="weatherBackground">
      <h1>Weather APP</h1>
      <form onSubmit={handleOnSubmit} className="WeatherContainer">
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          autoFocus={true}
          placeholder="Enter country/city name"
        />
        <button className={ChatCss.ChatBtn} onClick={fetchWeatherData}>
          Search
        </button>
      </form>

      {weather?.main ? (
        <div className="weatherValues">
          <p>Search: {weather.name}</p>
          <p>Country: {weather.sys.country}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <br />
          <p>Visual display of current weather:</p>
          {weather.weather[0].icon && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          )}
        </div>
      ) : (
        checkCondition &&
        <p>No weather data found for the given location</p>
      )}
    </div>
  );
};

export default Weather;
