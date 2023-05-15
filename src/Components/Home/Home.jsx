import React from "react";
import me from "./images/me.png"

const Home = ({ isActive }) => {
  if (!isActive) {
    return null;
  }
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to my <i>Portfolio</i>!</p>
      <p>Take a look at some of my projects and feel free <br /> to contact me.</p>
      <img src={me} alt="me" style={{ 
        clipPath: 'circle(40%)', 
        WebkitClipPath: 'circle(40%)',
        width:'30%' 
      }} />    </div>
  );
};

export default Home;
