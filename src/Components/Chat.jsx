import React from "react";


const Chat = ({ isActive }) => {
  if (!isActive) {
    return null;
  }
  return (
    <div>
      <h2>Home</h2>
      <p>This is the tab content, you can put anything you like in here.</p>
    </div>
  );
};

export default Chat;
