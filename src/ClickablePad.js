import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
import SoundEffects from "./SoundEffects";

export const ClickablePad = () => {
  const { bank, power, volume, playDrum } = useGlobalContext();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      let keyPressed = e.key.toUpperCase();
      let sound = document.getElementById(keyPressed);
      if (sound) {
        let name = sound.parentNode.id;
        playDrum(name, sound.id, power, volume);
      }
    });
  }, []);

  return (
    <div id="clickable_pad">
      {SoundEffects[bank].map((soundObj) => {
        const { id: name, keyTrigger: key, url } = soundObj;

        return (
          <button
            id={name}
            key={key}
            className="drum-pad"
            onClick={() => playDrum(name, key, power, volume)}
          >
            <audio className="clip" id={key} src={url}></audio>
            {soundObj.keyTrigger}
          </button>
        );
      })}
    </div>
  );
};
