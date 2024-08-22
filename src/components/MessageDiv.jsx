import React, { useContext } from "react";
import { messageContext } from "./Form";
const MessageDiv = () => {
  const { message } = useContext(messageContext);

  return (
    <div className="message-container">
      <h1 className="message-title">Name is: {message.name}</h1>
      <p className="message-detail">Email is: {message.email}</p>
      <p className="message-detail">Subject: {message.subject}</p>
      <p className="message-text">Message: {message.msg}</p>
      <button>remove</button>
    </div>
  );
};

export default MessageDiv;
