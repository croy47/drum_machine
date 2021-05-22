import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

export const Music = () => {
  const {
    isPlaying,
    power,
    volume,
    music,
    playDrum,
    playing,
    musicEnd,
    clearMusic,
  } = useGlobalContext();

  useEffect(() => {
    if (power && isPlaying) {
      let interval = 0;
      music.map((key) => {
        let sound = document.getElementById(key);
        let duration = sound.duration * 1000;
        let name = sound.parentNode.id;
        interval += duration;
        return setTimeout(
          () => playDrum(name, key, power, volume, isPlaying),
          interval
        );
      });
      setTimeout(musicEnd, interval);
    }
  }, [isPlaying]);

  return (
    <div className="music-container">
      <p className="music-str">
        {" "}
        {music.length > 0
          ? music.join(" ")
          : power
          ? "CREATE YOUR MUSIC NOW"
          : ""}
      </p>
      <div className="btn-container">
        <button id="play-btn" onClick={playing} className="btn">
          {" "}
          Play{" "}
        </button>
        {!isPlaying && (
          <button
            id="clearMusic"
            className="btn"
            onClick={() => clearMusic(isPlaying)}
          >
            {" "}
            Clear
          </button>
        )}
      </div>
    </div>
  );
};
