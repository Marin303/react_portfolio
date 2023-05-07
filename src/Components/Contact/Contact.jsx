import React from "react";

const Contact = ({ isActive }) => {
  if (!isActive) {
    return null;
  }

  return <div>Contact</div>;
};

export default Contact;
