import React from "react";

const Contact = ({ isActive }) => {
  if (!isActive) {
    return null;
  }

  return (
    <div>
      <p>Contact</p>
      <i class="fa fa-facebook-official fa-2x" aria-hidden="true" ></i><br />
      <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i><br />
      <i class="fa fa-github fa-2x" aria-hidden="true"></i>
    </div>
  );
};

export default Contact;
