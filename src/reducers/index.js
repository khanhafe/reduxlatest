const songReducer = () => {
  return [
    {
      title: "show me the meaning",
      duration: "2.15"
    },
    {
      title: "annkh uthi",
      duration: "4.15"
    },
    {
      title: "aaja prem ki gazab",
      duration: "3.15"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
