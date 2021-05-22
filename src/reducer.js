// const initialState = {
//   power: true,
//   volume: 50,
//   bank: "bankOne",
//   display: "",
//   music: [],
// };

const reducer = (state, action) => {
  if (action.type === "TOGGLE_ON_OFF") {
    // console.log("switch", !state.power);
    return { ...state, power: !state.power, music: [], display: "" };
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

  if (action.type === "MUSIC_PLAYING") {
    if (state.music.length === 0) {
      return { ...state, display: "CREATE FIRST" };
    }
    return { ...state, isPlaying: true };
  }

  if (action.type === "MUSIC_END") {
    return { ...state, isPlaying: false };
  }

  if (action.type === "CLEAR_MUSIC") {
    let displayStr = `${state.music.length > 0 ? "CLEARED" : "NO MUSIC"}`;
    return { ...state, music: [], display: displayStr };
  }

  if (action.type === "DISPLAY_AUDIO_NAME") {
    let musicOn = action.payload[2];
    if (musicOn) {
      return { ...state, display: action.payload[0] };
    } else {
      return {
        ...state,
        display: action.payload[0],
        music: [...state.music, action.payload[1]],
      };
    }
  }

  return { ...state };
};

export default reducer;
