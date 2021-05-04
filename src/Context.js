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

  const playDrum = (id, volume, power) => {
    if (power) {
      let button = document.getElementById(id);
      let audio = button.childNodes[0];
      audio.currentTime = 0;
      audio.volume = (volume / 100).toFixed(1);
      audio.play();
      dispatch({ type: "AUDIO_PLAYED", payload: id });
    } else {
      alert("Switch On Drum first by clicking the power button");
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
