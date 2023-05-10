import React from "react";
import ChatCss from '../../Components/Chat/Chat.module.css'
const Weather = ({ isActive }) => {
  if (!isActive) {
    return null;
  }
  return (
    <div>
      <div className="WeatherContainer">
        <h1>Weather</h1>
        <input type="text" />
        <button className={ChatCss.ChatBtn}>SEARCH</button>
      </div>
    </div>
  );
};

export default Weather;
