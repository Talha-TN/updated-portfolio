import React, { createContext, useRef, useState } from "react";
import MessageDiv from "./MessageDiv";
const messageContext = createContext();
const Form = () => {
  const [message, setMessage] = useState(null);
  const nameRef = useRef();
  const mailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const handleSubmit = () => {
    const messageInfo = {
      name: nameRef.current.value,
      email: mailRef.current.value,
      subject: subjectRef.current.value,
      msg: messageRef.current.value,
    };
    messageInfo.name
      ? setMessage(messageInfo)
      : alert("Please fill the input fileds");
    nameRef.current.value = "";
    mailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };
  const handleDelete = () => {
    setMessage(null);
  };

  const values = {
    message,
  };

  return (
    <div className="inputFields">
      <input ref={nameRef} type="text" placeholder="name" className="name" />
      <input ref={mailRef} type="email" placeholder="email" className="email" />
      <input
        ref={subjectRef}
        type="text"
        placeholder="subject"
        className="subject"
      />
      <textarea
        ref={messageRef}
        className="text-area"
        name=""
        id=""
        rows="3"
        colum="3"
        placeholder="messege"
      ></textarea>
      <button className="submit-btn" onClick={() => handleSubmit()}>
        Send Messege
      </button>
      <button
        className="submit-btn btn-danger mt-2"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
      <messageContext.Provider value={values}>
        {message && <MessageDiv />}
      </messageContext.Provider>
    </div>
  );
};
export default Form;
export { messageContext };
