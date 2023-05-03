import './App.css';
import Chat from "./Components/Chat/Chat"
import { useState } from "react";

/*  const buttonWidth = 64;  
 const tabWidth = 300;   */
const tabHeaders = ["home", "lock", "settings", "groups", "table_view"];
/* const tabContent = [];*/
const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="widget">
      <header>
        {tabHeaders.map((tab, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            key={tab}
            className={`material-symbols-outlined ${
              
              activeIndex === index ? "active" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      <div
  className="underline"
  /* style={{
    transform: `translateX(${activeIndex * buttonWidth}px)`,
    width: `${buttonWidth}px`
  }} */
></div>

      </header>
      
      <div className="content">
        <div
          className="content-inner"
          >
          <div style={{ display: activeIndex === 0 ? "block" : "none" }}>
            <h2>Home</h2>
            <p>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
          <div style={{ display: activeIndex === 1 ? "block" : "none" }}>
            <h2>Account</h2>
            <p>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
          <div style={{ display: activeIndex === 2 ? "block" : "none" }}>
            <h2>Settings</h2>
            <p>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
          <Chat isActive={activeIndex === 3} />
          <div style={{ display: activeIndex === 4 ? "block" : "none" }}>
            <h2>Table</h2>
            <p>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};


export default App;
