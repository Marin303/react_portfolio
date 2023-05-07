
import React, { useState, useEffect } from "react";
/* import "../../App.css" */
import ChatStyles from "./Chat.module.css"
import Messages from "../../Fragments/Chat/Messages";
import Input from "../../Fragments/Chat/Input";
import NameSetup from "../../Fragments/Chat/NameSetup";
import randomAvatar from "../../Fragments/Chat/RandomAvatar";


const Chat = ({ isActive }) => {
  if (!isActive) {
    return null;
  }
  return (
    <div className={ChatStyles.Chat}>
      <ChatStart/>
    </div>
  );
};




const ChatStart = () => {
  const initialChatState = {
    member: { username: "", avatar: "" },
    messages: [],
  };
  const [chat, setChat] = useState(initialChatState);
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    if (chat.member.username !== "") {
      const drone = new window.Scaledrone(process.env.REACT_APP_CHANNEL_ID, {
        data: chat.member,
      });
      setDrone(drone);
    }
  }, [chat.member]);

  useEffect(() => {
    if (chat.messages.length) {
      const scrollElement = document.getElementsByClassName(ChatStyles.MessagesList)[0];
      scrollElement.scrollTop =
        scrollElement.scrollHeight - scrollElement.clientHeight;
      /* console.log("scrollElement: ", scrollElement) */
    }
  }, [chat.messages.length]);

  if (drone) {
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      chat.member.id = drone.clientId;
      setChat({ ...chat }, chat.member);

      const room = drone.subscribe("observable-room");

      room.on("message", (message) => {
        const { data, member, id } = message;
        chat.messages.push({ member, data, id });
        setChat({ ...chat }, chat.messages);
        /* console.log(chat); */
      });
    });
  }

  const onSendMessage = (message) => {
    if (message.trim() !== "") {
      drone.publish({
        room: "observable-room",
        message,
      });
    }
  };

  const handleSubmitForm = (username) => {
    chat.member = {
      username: username,
      avatar: randomAvatar(),
    };
    setChat({ ...chat }, chat.member);
  };

  return chat.member.username === "" ? (
    <NameSetup handleSubmitForm={handleSubmitForm} />
  ) : (
    <>
      <h1>React Web chat</h1>
      <div className={ChatStyles.ChatContainer}>
        <Messages messages={chat.messages} thisMember={chat.member} />
        <Input onSendMessage={onSendMessage} />
      </div>
    </>
  );
}

export default Chat;
