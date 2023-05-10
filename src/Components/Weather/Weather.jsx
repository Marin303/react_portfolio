import React, { useEffect, useState } from "react";
import ChatCss from "../../Components/Chat/Chat.module.css";

const useWeatherFetch = () => {
  const [weather, setWeather] = useState("");
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
    `)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setWeather(data);
      });
  }, []);
  
  return [data, weather];
};

const Weather = ({ isActive }) => {
  const [data, weather] = useWeatherFetch();
  
  if (!isActive) {
    return null;
  }

  return (
    <div>
      <div className="WeatherContainer">
        <h1>Weather</h1>
        <input type="text" />
        <button className={ChatCss.ChatBtn} onClick={useWeatherFetch}>
          SEARCH
        </button>
        {data &&(
          <div>
            <p>Temperature: {weather.hourly.temperature_2m[0]}°C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
