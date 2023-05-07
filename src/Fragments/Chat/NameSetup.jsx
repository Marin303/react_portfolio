import React, { useState } from "react";
import ChatStyles from '../../Components/Chat/Chat.module.css'
function NameSetup(props) {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.handleSubmitForm(username);
  };

  return (
    <div className={ChatStyles.nameSetupWrapper}>
      <div className={ChatStyles.NameSetup}>
        <h1>Enter your name to join the chat</h1>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Enter chat name - max 20 characters"
            value={username}
            onChange={handleUsernameChange}
            maxLength={20}
          />
          <button type="submit" className={ChatStyles.ChatBtn}>Join</button>
        </form>
      </div>
    </div>
  );
}

export default NameSetup;
