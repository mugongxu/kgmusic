import React, { Component } from 'react';
import SongsList from '#/common/songsList';
import { ajax } from '@/utils';
import { format } from 'date-fns';
import '@/assets/scss/rank.scss';

class RankSongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankId: props.match.params.id,
      bannerurl: '',
      songList: [],
      timestamp: 0
    };
  }

  async componentDidMount() {
    const response = await ajax.get('/km/rank/info', {
      params: {
        rankId: this.state.rankId,
        page: 1,
        json: true
      }
    });
    const data = response.data;
    let songList = data.list || [];
    let timestamp = data.info.timestamp || 0;
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
            <span>上次更新时间：{format(this.state.timestamp * 1000, 'YYYY-MM-DD')}</span>
          </div>
        </div>
        <SongsList
          rank={true}
          songsList={this.state.songList} />
      </div>
    );
  }
}

export default RankSongList;
