import React, { useState } from "react";
import ChatCss from "../../Components/Chat/Chat.module.css";

const useWeatherFetch = (location) => {
  const [weather, setWeather] = useState(null);

  console.log("Weather", weather);

  const fetchWeatherData = () => {
    /* console.log(`Location: ${location}`); */

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

  if (!isActive) {
    return null;
  }

  return (
    <div>
      <div className="WeatherContainer">
        <h1>Weather</h1>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          autoFocus={true}
        />
        <button className={ChatCss.ChatBtn} onClick={fetchWeatherData}>
          SEARCH
        </button>

        {weather?.main && (
          <div>
            <p>Search: {weather.name}</p>
            <p>Country: {weather.sys.country}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            {weather.weather[0].icon && (
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
