import React from "react";
import ContactInfo from "./ContactInfo";
import MessageForm from "./MessageForm";
import "../css/contactme.css";
const ContactMe = () => {
  return (
    <div className="contactme">
     <ContactInfo/>
      <MessageForm/>
    </div>
  );
};

export default ContactMe;
