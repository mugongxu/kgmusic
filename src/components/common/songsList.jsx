import React, { Component } from 'react';
import '@/assets/scss/songList.scss';

class SongsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: props.rank
    };
  }
  render() {
    const numMap = ['one', 'two', 'three'];
    return (
      <ul className={this.state.rank ? 'songslist rank-songsList' : 'songslist'}>
        {
          this.props.songsList.map((item, index) => 
            <li key={index} className="songslist-item">
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
    );
  }
};

export default SongsList;
