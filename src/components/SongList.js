import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title}>
          <li>{song.title}</li>
          <button onClick={() => this.props.selectedSong(song)}>Select</button>
        </div>
      );
    });
  };

  render() {
    //this.props gives songs returned
    //mapStateToProps with dispatch function
    return <div>{this.renderList()} </div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectedSong: selectedSong })(
  SongList
);
