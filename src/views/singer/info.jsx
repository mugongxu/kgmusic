import React, { Component } from 'react';
import SongsList from '#/common/songsList';
import { ajax } from '@/utils';
import '@/assets/scss/singer.scss';

class SingerSongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singerid: props.match.params.id,
      bannerurl: '',
      songList: [],
      singerInfo: {},
      page: 1,
      total: 0,
      pagesize: 0
    };
  }

  componentDidMount() {
    this.getSongsList();
    document.addEventListener('scroll', this.onscroll.bind(this), true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onscroll.bind(this), true);
  }

  async getSongsList() {
    const response = await ajax.get(`/km/singer/info`, {
      params: {
        singerid: this.state.singerid,
        json: true,
        page: this.state.page
      }
    });
    const data = response.data;
    let songList = (data.songs || {}).list || [];
    let singerInfo = data.info || {};
    // 转化尺寸
    let bannerurl = singerInfo.imgurl || '';
    bannerurl = bannerurl.replace('{size}', '400');
    // 数据合并
    const concatArr = [...this.state.songList, ...songList]
    // 保存
    this.setState({
      bannerurl,
      songList: [...concatArr],
      singerInfo: { ...singerInfo },
      total: data.songs.total,
      pagesize: data.songs.pagesize
    });
  }

  onscroll() {
    //变量scrollTop是滚动条滚动时，距离顶部的距离
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //变量windowHeight是可视区的高度
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //变量scrollHeight是滚动条的总高度
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    //滚动条到底部的条件
    if (scrollTop + windowHeight === scrollHeight) {
      const oldPage = this.state.page;
      const newPage = oldPage + 1;
      // 判断是否获取出了所有数据
      const oldTotal = oldPage * this.state.pagesize;
      if (oldTotal >= this.state.total) return;
      this.setState({
        page: newPage
      }, () => {
        this.getSongsList();
      });
    }
  }

  render() {
    return (
      <div className="singer-info-wrapper">
        <div className="singer-info-hd">
          <img src={this.state.bannerurl} alt=""/>
        </div>
        <SongsList
          songsList={this.state.songList} />
      </div>
    );
  }
}

export default SingerSongList;
