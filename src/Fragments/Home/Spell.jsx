import React, { useEffect, useRef } from "react";

const Spell = () => {
  const msgRef = useRef(null);

  useEffect(() => {
    const message = "Frontend Developer";
    let index = 0;
    const interval = 300;
    let timeout;

    const showText = () => {
      if (index < message.length) {
        msgRef.current.textContent = message.substring(0, index + 1);
        index++;
        timeout = setTimeout(showText, interval);
      }
    };

    showText();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <div id="msg" ref={msgRef}></div>
    </div>
  );
};

export default Spell;
