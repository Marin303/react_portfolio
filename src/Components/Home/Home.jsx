import React from "react";
import me from "./images/me.png"

const Home = ({ isActive }) => {
  if (!isActive) {
    return null;
  }
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to my <i>Portfolio</i></p>
      <p>Here i will represent me and my projects together</p>
      <img src={me} alt="me" style={{ 
        clipPath: 'circle(40%)', 
        WebkitClipPath: 'circle(40%)',
        width:'30%' 
      }} />    </div>
  );
};

export default Home;
