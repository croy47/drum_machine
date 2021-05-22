import React from "react";
import { FaVolumeOff } from "react-icons/fa";
// import { GiSpeaker } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";

import { useGlobalContext } from "./Context";
const Controls = () => {
  const { bank, display, power, volume, toggleBank, changeVol } =
    useGlobalContext();

  return (
    <div id="controls">
      <div id="display"> {!power ? "POWER OFF" : display}</div>
      <div id="vol-btn">
        <label htmlFor="volume_input" className="accessible-elem">
          Volume
        </label>
        <FaVolumeOff />
        <input
          name="volume_input"
          type="range"
          value={volume}
          onInput={(e) => changeVol(e, power)}
        />
      </div>
      <div id="bank">
        <div id="toggle-btn" onClick={toggleBank}>
          <div
            className={`${
              bank === "bankTwo" && power ? "toggler bank-two" : "toggler"
            }`}
          ></div>
        </div>
        <p id="toggler-text">
          {bank === "bankOne" && power ? "Bank-1" : power ? "Bank-2" : "Bank-1"}
        </p>
      </div>
    </div>
  );
};

export { Controls };
