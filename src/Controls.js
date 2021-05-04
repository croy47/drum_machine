import React from "react";
import { FaPowerOff, FaVolumeOff } from "react-icons/fa";
// import { GiSpeaker } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";

import { useGlobalContext } from "./Context";
const Controls = () => {
  const {
    bank,
    display,
    power,
    volume,
    toggleOnOff,
    toggleBank,
    changeVol,
  } = useGlobalContext();
  // console.log("power", power);
  // console.log(display);

  return (
    <div id="controls">
      <div id="display"> {!power ? "POWER OFF" : display}</div>
      <div id="vol-btn">
        <FaVolumeOff />

        <input type="range" value={volume} onInput={(e) => changeVol(e)} />
      </div>
      <div id="bank">
        <div id="toggle-btn" onClick={toggleBank}>
          <div
            className={`${bank === "bankTwo" ? "toggler bank-two" : "toggler"}`}
          ></div>
        </div>
        <p id="toggler-text">{bank === "bankOne" ? "Bank-1" : "Bank-2"}</p>
      </div>
    </div>
  );
};

export { Controls };
