import React, { useEffect, useState } from "react";
import ChatCss from "../../Components/Chat/Chat.module.css";

const useWeatherFetch = (lat, lon) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      
      .catch(()=> console.log("failed to load"))
  }, [lat, lon]);
console.log(data);
  return data;
};

const Weather = ({ isActive }) => {
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const data = useWeatherFetch(lat, lon);

  const searchLocation = () => {
    fetch(`https://nominatim.openstreetmap.org/search/${location}?format=json&addressdetails=1&limit=1&polygon_svg=1`)
      .then((res) => res.json())
      .then((data) => {
        setLat(data[0].lat);
        setLon(data[0].lon);
      })
      .catch(()=> console.log("failed to load"))
  }

  if (!isActive) {
    return null;
  }

  return (
    <div>
      <div className="WeatherContainer">
        <h1>Weather</h1>
        <input
          type="text"
          onChange={(event) => setLocation(event.target.value)}
          value={location}
          autoFocus={true}
        />
        <button className={ChatCss.ChatBtn} onClick={searchLocation}>
          SEARCH
        </button>
        {data?.hourly && (
          <div>
            <p>Temperature: {data.hourly.temperature_2m}°C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

