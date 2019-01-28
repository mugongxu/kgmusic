import React, { Component } from 'react';
import { ajax } from '@/utils';
import '@/assets/scss/rank.scss';

class RankSongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankid: props.match.params.id,
      bannerurl: '',
      songList: [],
      timestamp: 0
    };
  }

  async componentDidMount() {
    const response = await ajax.get('/rank/info/', {
      params: {
        rankid: this.state.rankid,
        page: 1,
        json: true
      }
    });
    const data = response.data;
    console.log(data);
    let songList = data.songs.list || [];
    let timestamp = data.songs.timestamp || 0;
    // 转化尺寸
    let bannerurl = data.info.banner7url;
    bannerurl = bannerurl.replace('{size}', '400');
    // 保存
    this.setState({
      bannerurl,
      songList: [...songList],
      timestamp
    });
  }

  render() {
    
    return (
      <div className="rank-info-wrapper">
        <div className="rank-info-hd">
          <img src={this.state.bannerurl} alt=""/>
          <div className="rank-info-time">
            <span>{this.state.timestamp}</span>
          </div>
        </div>
        <ul className="rank-img-list">
        </ul>
      </div>
    );
  }
}

export default RankSongList;
