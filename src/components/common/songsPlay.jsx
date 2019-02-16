import React, { Component } from 'react';
import { ajax, utils } from '@/utils';
import '@/assets/scss/songsPlay.scss';

class SongsPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: '',
      songInfo: {},
      songsList: [],
      authors: {},
      index: 0,
      pause: false,
      currentTime: 0,
      currentTimeStr: '00:00',
      duration: 0,
      durationStr: '00:00',
      lyricsList: []
    };
    this.ftPlayer = React.createRef();
    this.panelPlay = React.createRef();
    this.songTimer = null;
    // 事件绑定
    this.pauseSong = this.pauseSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.downloadSong = this.downloadSong.bind(this);
    this.showPanelPlay = this.showPanelPlay.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    // 监听
    this.listenSongPlayEnd();
    this.listenSongOnPlay();
  }

  showFtPlayer(songsList, index) {
    this.setState({
      songsList,
      index
    }, () => {
      this.getSongInfo();
    });
  }
  
  // 获取歌曲信息
  async getSongInfo() {
    let item = this.state.songsList[this.state.index];
    this.ftPlayer.current.style.display = 'block';
    const hash = item.hash;
    this.setState({
      hash: hash
    });
    // 数据请求
    const response = await ajax.get('/yy/index.php', {
      params: {
        r: 'play/getdata',
        hash: hash
      }
    });
    const data = response.data.data;
    // 不存在播放链接则播放下一个
    if (!data.play_url) {
      this.nextSong();
      return;
    }
    this.setState({
      songInfo: { ...data },
      authors: { ...data.authors[0] },
      pause: false
    });
    // 自动播放音乐
    let kumaoPlayer = document.getElementById('kumao');
    kumaoPlayer.src = data.play_url;
    kumaoPlayer.play();
    // 歌词处理
    let lyricsArr = data.lyrics.split(/\n/);
    let newLyricsArr = [];
    lyricsArr.forEach(item => {
      if (!item) return;
      let temp = item.split(']');
      let time = (temp[0] || '').replace('[', '').split(':');
      let timestamp = (Number(time[0] || 0) * 60 + Number(time[1] || 0)).toFixed(2);
      newLyricsArr.push({
        timestamp: Number(timestamp),
        lyrics: temp[1] || ''
      });
    });
    this.setState({
      lyricsList: newLyricsArr
    });
  }

  pauseSong() {
    let kumaoPlayer = document.getElementById('kumao');
    let pause = this.state.pause;
    if (pause) {
      kumaoPlayer.play();
    } else {
      kumaoPlayer.pause();
    }
    this.setState({
      pause: !pause
    });
  }

  nextSong() {
    let index = this.state.index;
    let len = this.state.songsList.length;
    index = index < len - 1 ? index + 1 : 0;
    this.setState({
      index
    }, () => {
      this.getSongInfo();
    });
  }

  prevSong() {
    let index = this.state.index;
    let len = this.state.songsList.length;
    index = index ? index - 1 : len - 1;
    this.setState({
      index
    }, () => {
      this.getSongInfo();
    });
  }

  downloadSong() {}

  // 监听歌曲是否播完
  listenSongPlayEnd() {
    let kumaoPlayer = document.getElementById('kumao');
    kumaoPlayer.addEventListener('ended', () => {
      this.nextSong();
    }, false);
  }

  // 监控正在播放
  listenSongOnPlay() {
    let kumaoPlayer = document.getElementById('kumao');
    kumaoPlayer.addEventListener('timeupdate', () => {
      // console.log(kumaoPlayer.duration, kumaoPlayer.currentTime);
      const currentTime = Number(kumaoPlayer.currentTime.toFixed(2));
      const duration = kumaoPlayer.duration;
      this.setState({
        currentTime: currentTime,
        duration: duration,
        currentTimeStr: utils.secondTommss(currentTime),
        durationStr: utils.secondTommss(duration)
      });
    });
  }

  showPanelPlay() {
    this.panelPlay.current.style.display = 'block';
  }
  
  goBack() {
    this.panelPlay.current.style.display = 'none';
  }

  render() {
    return (
      <div className="songs-play-wrapper">
        <div className="ft-player" ref={this.ftPlayer}>
          <div className="ft-go-info" onClick={this.showPanelPlay}>
            <div className="ft-left">
              <img
                src={this.state.authors.avatar}
                onError={() => this.src=this.state.songInfo.img}
                alt="" />
            </div>
            <div className="ft-center">
              <p className="ft-desc">{this.state.songInfo.song_name}</p>
              <p className="ft-sub-desc">{this.state.songInfo.author_name}</p>
            </div>
          </div>
          <div className="ft-right">
            <i className={
              this.state.pause
                ? 'btn-play'
                : 'btn-pause'
            } onClick={this.pauseSong}></i>
            <i className="btn-next" onClick={this.nextSong}></i>
            <i className="ft-icon-download" onClick={this.downloadSong}></i>
          </div>
        </div>
        {/* 全屏播放 */}
        <div className="panel-play" ref={this.panelPlay}>
          <div className="bg-overlay" style={{
            backgroundImage: `url("${this.state.authors.avatar}")`
          }}></div>
          <div className="play-overlay"></div>
          <div className="top-fixes">
            <p className="title" id="title">{this.state.songInfo.song_name}</p>
            <div className="goback" onClick={this.goBack}>
              <i></i>
            </div>
          </div>
          <div className="panel-play-bd">
            <div className="panel-play-img-box">
              <img
                src={this.state.authors.avatar}
                onError={() => this.src=this.state.songInfo.img}
                alt="" />
            </div>
            <div className="panel-play-lrc-box">
              <div className="panel-play-lrc">
                {
                  this.state.lyricsList.map((item, index) =>
                    <p key={index}>{item.lyrics}</p>
                  )
                }
              </div>
            </div>
            <div className="time-wrap">
              <div className="timeshow">{this.state.currentTimeStr}</div>
              <div className="progress-wrap">
                <div className="progress-bar">
                  <div className="preview-progress"></div>
                  <div className="progress" style={{
                    width: `${this.state.currentTime / this.state.duration * 100}%`
                  }}>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="time">{this.state.durationStr}</div>
            </div>
            <div className="play-operate">
              <i className="btn-prev" onClick={this.prevSong}></i>
              <i className={
                this.state.pause
                  ? 'btn-play'
                  : 'btn-pause'
              } onClick={this.pauseSong}></i>
              <i className="btn-next" onClick={this.nextSong}></i> 
            </div>
          </div>
        </div>
        {/* 播放控件 */}
        <div id="player" className="player">
          <audio id="kumao" width="100%" height="100%" controls></audio>
        </div>
      </div>
    );
  }
};

export default SongsPlay;
