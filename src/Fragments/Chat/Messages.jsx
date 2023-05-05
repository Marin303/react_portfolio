import React from "react";
import ChatStyles from "../../Components/Chat/Chat.module.css"
function Messages({ messages, thisMember }) {
  function renderMessage(message, thisMember) {
    const { member, data } = message;
    const senderMessage = member.id === thisMember.id;
    const chatBubble = senderMessage
    ? `${ChatStyles.Messages} ${ChatStyles.thisMember}`
    : ChatStyles.Messages;
    /* console.log(member) */
    return (
      <li key={message.id} className={chatBubble}>
        <span className={ChatStyles.avatar}>
          <img src={member.clientData.avatar} alt="Avatar" />
        </span>
        <div className={ChatStyles.MessageContent}>
          <div className={ChatStyles.username}>{member.clientData.username}</div>
          <div className={ChatStyles.text}>{data}</div>
        </div>
      </li>
    );
  }

  return (
    <ul className={ChatStyles.MessagesList}>
      {messages.map((m) => renderMessage(m, thisMember))}
    </ul>
  );
}

export default Messages;
