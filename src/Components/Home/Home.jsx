import React from "react";
import me from "./images/me.png";
import croatia_flag from "./images/croatia_flag.png";
const Home = ({ isActive }) => {
  if (!isActive) {
    return null;
  }
  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome to my <i>Portfolio</i>!
      </p>
      <p>Take a look at some of my projects and feel free to contact me.</p>
      <div className="country">
        <p> Coming from:</p>
        <a href="https://www.croatia.hr" target="_blank" rel="noreferrer">
          <img src={croatia_flag} alt="croatia_flag"/>
        </a>
      </div>

      <img
        src={me}
        alt="me"
        style={{
          marginTop: "-2vh",
          clipPath: "circle(40%)",
          WebkitClipPath: "circle(40%)",
          width: "160px",
        }}
      />
    </div>
  );
};

export default Home;
