import React, { Component } from 'react';
import SongsPlay from './songsPlay';
import '@/assets/scss/songList.scss';

class SongsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: props.rank
    };
    this.playBox = React.createRef();
  }

  playSongs(item, e) {
    this.playBox.current.showFtPlayer(item);
  }

  render() {
    const numMap = ['one', 'two', 'three'];
    return (
      <div>
        <ul className={this.state.rank ? 'songslist rank-songsList' : 'songslist'}>
          {
            this.props.songsList.map((item, index) =>
              <li key={index} className="songslist-item" onClick={this.playSongs.bind(this, item)}>
                <div className="songs-item-name">
                  <span>{item.filename}</span>
                </div>
                <div className="songs-item-download">
                  <i></i>
                </div>
                {
                  this.state.rank
                    ? (<span
                        className={numMap[index] ? ('songs-item-num ' + numMap[index]) : 'songs-item-num'}>
                        {index+1}
                      </span>)
                    : ''
                }
              </li>
            )
          }
        </ul>
        {/* 音乐播放框 */}
        <SongsPlay ref={this.playBox} />
      </div>
    );
  }
};

export default SongsList;
