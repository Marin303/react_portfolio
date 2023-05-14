import "./App.css";
import Home from "./Components/Home/Home";
import Chat from "./Components/Chat/Chat";
import Contact from "./Components/Contact/Contact";
import Weather from "./Components/Weather/Weather";
import { useState } from "react";

const tabHeaders = ["home", "partly_cloudy_day", "forum", "mail"];
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
      </header>

      <div className="content">
        <div className="content-inner">
          <Home isActive={activeIndex === 0} />

          <Weather isActive={activeIndex === 1} />

          <Chat isActive={activeIndex === 2} />

          <Contact isActive={activeIndex === 3} />
        </div>
      </div>
    </article>
  );
};

export default App;
