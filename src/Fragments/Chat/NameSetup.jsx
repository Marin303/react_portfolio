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
    <>
      <div className={ChatStyles.NameSetup}>
        <h2>Chat APP</h2><br />
        <h2>Enter your name to join the chat</h2>
        <form onSubmit={handleSubmitForm} className={ChatStyles.ChatForm}>
          <input
            type="text"
            placeholder="Enter chat name - max 20 characters"
            value={username}
            onChange={handleUsernameChange}
            maxLength={20}
            autoFocus={true}
            className={ChatStyles.input}
          />
          <button type="submit" className={ChatStyles.ChatBtn}>Join</button>
        </form>
      </div>
    </>
  );
}

export default NameSetup;
