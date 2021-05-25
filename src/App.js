import React from "react";
import { ClickablePad } from "./ClickablePad";
import {
  FaPowerOff,
  FaTwitter,
  FaFreeCodeCamp,
  FaGithubSquare,
} from "react-icons/fa";

import { Controls } from "./Controls";
import { Music } from "./Music";
import { useGlobalContext } from "./Context";

function App() {
  const { power, toggleOnOff } = useGlobalContext();
  return (
    <main>
      {/* Power */}
      <div id="power-btn-container">
        <button
          className="btn btn-outline-dark btn-animate"
          onClick={toggleOnOff}
        >
          <FaPowerOff /> <p className="accessible-elem">power</p>
        </button>

        <div
          className={`${power ? "power-light power-on" : "power-light"}`}
        ></div>
      </div>
      {/* power end */}
      {/* Drum Machine */}
      <div id="drum-machine">
        <ClickablePad />
        <Controls />
      </div>
      <Music />
      <footer>
        <p>
          Designed by <a href="mailto:croy4744@gmail.com"> Chandan Roy</a>
        </p>

        <p>
          {" "}
          <a
            href="https://github.com/croy47/drum_machine"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            Source Code
          </a>
        </p>
        <div>
          <a
            href="https://twitter.com/chandanroy1995"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="contact-icons" />
          </a>
          <a
            href="https://www.freecodecamp.org/croy4744"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFreeCodeCamp className="contact-icons" />
          </a>

          <a
            href="https://github.com/croy47/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="contact-icons" />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
