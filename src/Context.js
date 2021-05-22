import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
// import SoundEffects from "./SoundEffects";

const AppContext = React.createContext();
//Provider, Consumer

const initialState = {
  power: true,
  volume: 50,
  bank: "bankOne",
  display: "",
  music: [],
  isPlaying: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleOnOff = () => {
    dispatch({ type: "TOGGLE_ON_OFF" });
  };

  const toggleBank = () => {
    dispatch({ type: "TOGGLE_BANK" });
  };

  const changeVol = (e, power) => {
    if (power) {
      dispatch({ type: "CHANGE_VOL", payload: e.target.value });
    }
  };

  const playing = () => {
    dispatch({ type: "MUSIC_PLAYING" });
  };

  const musicEnd = () => {
    dispatch({ type: "MUSIC_END" });
  };

  const clearMusic = (isPlaying) => {
    if (isPlaying) {
      dispatch({ type: "CLEAR_MUSIC" });
      dispatch({ type: "MUSIC_END" });
    }
    dispatch({ type: "CLEAR_MUSIC" });
  };

  const playDrum = (name, key, power, volume, isPlaying = false) => {
    if (power) {
      let sound = document.getElementById(key);
      sound.currentTime = 0;
      sound.volume = parseFloat(volume / 100).toFixed(1);
      sound.play();
      dispatch({ type: "DISPLAY_AUDIO_NAME", payload: [name, key, isPlaying] });
    } else {
      alert("Switch on Drum Machine By Clicking the Power Button");
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleOnOff,
        toggleBank,
        changeVol,
        playDrum,
        playing,
        musicEnd,
        clearMusic,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
