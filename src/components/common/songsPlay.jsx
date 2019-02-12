import React, { Component } from 'react';
import '@/assets/scss/songsPlay.scss';

class SongsPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ftPlayer = React.createRef();
    this.panelPlay = React.createRef();
  }

  showFtPlayer(item) {
    this.ftPlayer.current.style.display = 'block';
    console.log(item);
  }

  render() {
    return (
      <div className="songs-play-wrapper">
        <div className="ft-player" ref={this.ftPlayer}>
          <div>123</div>
          <div></div>
        </div>
        <div className="panel-play" ref={this.panelPlay}></div>
      </div>
    );
  }
};

export default SongsPlay;
