import React, { useEffect, useState } from "react";
import ChatCss from "../../Components/Chat/Chat.module.css";

const useWeatherFetch = (location) => {
  const [weather, setWeather] = useState(null);

  console.log("Weather", weather);

  useEffect(() => {
    console.log(`Location: ${location}`);
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
  }, [location]);

  return weather;
};

const Weather = ({ isActive }) => {
  const [location, setLocation] = useState("");
  const weather = useWeatherFetch(location);

  const searchLocation = () => {
    setLocation(location);
  };

  if (!isActive) {
    return null;
  }

  console.log("Weather:", weather);

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
        <button className={ChatCss.ChatBtn} onClick={searchLocation}>
          SEARCH
        </button>

        {weather?.main && (
          <div>
            <p>Temperature: {weather.main.temp}°C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
