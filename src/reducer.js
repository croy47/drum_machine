const reducer = (state, action) => {
  if (action.type === "TOGGLE_ON_OFF") {
    console.log("switch", !state.power);
    return { ...state, power: !state.power };
  }

  if (action.type === "TOGGLE_BANK") {
    if (state.bank === "bankOne") {
      return { ...state, bank: "bankTwo" };
    } else {
      return { ...state, bank: "bankOne" };
    }
  }

  if (action.type === "CHANGE_VOL") {
    return { ...state, volume: action.payload };
  }

  if (action.type === "AUDIO_PLAYED") {
    return { ...state, display: action.payload };
  }

  return { ...state };
};

export default reducer;
