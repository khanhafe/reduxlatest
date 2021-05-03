import React from "react";
import { connect } from "react-redux";

const songDetail = ({ mySelectedsong }) => {
  if (!mySelectedsong) {
    return <div>select a song</div>;
  }
  return (
    <div>
      <b>SONG - </b>
      {mySelectedsong.title}
      <br />
      <b> DURATION - </b>
      {mySelectedsong.duration}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { mySelectedsong: state.selectedSong };
};

export default connect(mapStateToProps)(songDetail);
