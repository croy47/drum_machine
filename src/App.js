import react from "react";
import { ClickablePad } from "./ClickablePad";
import { FaPowerOff } from "react-icons/fa";

import { Controls } from "./Controls";
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
          <FaPowerOff />
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
      <footer>
        <p>
          Designed by <a href="mailto:croy4744@gmail.com"> Chandan Roy</a>
        </p>
        <p>
          {" "}
          <a href="https://github.com/croy47/drum_machine"> Source Code</a>
        </p>
      </footer>
    </main>
  );
}

export default App;
