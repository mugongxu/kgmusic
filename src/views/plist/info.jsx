import React, { Component } from 'react';
import SongsList from '#/common/songsList';
import { ajax } from '@/utils';
import '@/assets/scss/plist.scss';

class PlistSongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specialid: props.match.params.id,
      bannerurl: '',
      songList: [],
      plistInfo: {}
    };
  }

  async componentDidMount() {
    const response = await ajax.get(`/plist/list/${this.state.specialid}`, {
      params: {
        specialid: this.state.specialid,
        json: true
      }
    });
    const data = response.data;
    let songList = data.list.list.info || [];
    let plistInfo = data.info.list || {};
    // 转化尺寸
    let bannerurl = plistInfo.imgurl;
    bannerurl = bannerurl.replace('{size}', '400');
    // 保存
    this.setState({
      bannerurl,
      songList: [...songList],
      plistInfo: { ...plistInfo }
    });
  }

  render() {
    return (
      <div className="rank-info-wrapper">
        <div className="rank-info-hd">
          <img src={this.state.bannerurl} alt=""/>
        </div>
        <SongsList
          rank={true}
          songsList={this.state.songList} />
      </div>
    );
  }
}

export default PlistSongList;
