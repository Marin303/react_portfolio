import React from "react";

const Contact = ({ isActive }) => {
  if (!isActive) {
    return null;
  }

  return (
    <div>
      <h2>Contact me</h2>
      <div className="ContactContainer">
        <a href="https://www.facebook.com/muktic2">
          <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>Facebok
        </a>
        <br />
        <a href="https://www.linkedin.com/in/marin-muktic/">
          <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>Linkedin
        </a>
        <br />
        <a href="https://github.com/Marin303">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>Github
        </a>
      </div>
    </div>
  );
};

export default Contact;
