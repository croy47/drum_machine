import React from "react";
import { useGlobalContext } from "./Context";
import SoundEffects from "./SoundEffects";

export const ClickablePad = () => {
  const { bank, power, volume, playDrum, playByKey } = useGlobalContext();

  return (
    <div id="clickable_pad">
      {SoundEffects[bank].map((soundObj) => {
        return (
          <button
            id={soundObj.id}
            key={soundObj.keyTrigger}
            className="drum-pad"
            onKeyDown={(event) => console.log(event.key)}
            onClick={() => playDrum(soundObj.id, volume, power)}
          >
            <audio
              className="clip"
              id={soundObj.keyTrigger}
              src={soundObj.url}
            ></audio>
            {soundObj.keyTrigger}
          </button>
        );
      })}
    </div>
  );
};
