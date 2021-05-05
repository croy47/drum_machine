import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import SoundEffects from "./SoundEffects";

const AppContext = React.createContext();
//Provider, Consumer

const initialState = {
  power: true,
  volume: 50,
  bank: "bankOne",
  display: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleOnOff = () => {
    dispatch({ type: "TOGGLE_ON_OFF" });
  };

  const toggleBank = () => {
    dispatch({ type: "TOGGLE_BANK" });
  };

  const changeVol = (e) => {
    dispatch({ type: "CHANGE_VOL", payload: e.target.value });
  };

  const playDrum = (name, key, power, volume) => {
    if (power) {
      let sound = document.getElementById(key);
      sound.currentTime = 0;
      sound.volume = parseFloat(volume / 100).toFixed(1);
      sound.play();
      dispatch({ type: "DISPLAY_AUDIO_NAME", payload: name });
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
