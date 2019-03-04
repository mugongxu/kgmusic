import React, { Component } from 'react';
import SongsList from '#/common/songsList';
import { ajax } from '@/utils';
import Swiper from '@/plugins/swiper/custom';
import '@/assets/scss/newSong.scss';

const SwiperPage = ({ bannerList }) => {
  const opt = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  };
  if (bannerList.length !== 0) {
    return (
      <Swiper {...opt}>
        {
          bannerList.map((item, index) =>
            <div className="item" key={index}>
              <img src={item.imgurl} alt={item.title} width="100%" height="auto" />
            </div>
          )
        }
      </Swiper>
    );
  } else {
    return '';
  }
};

class NewSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo: '',
      bannerList: [],
      recommend: []
    };
  }

  async componentDidMount() {
    const response = await ajax.get('/km/banner');
    const data = response.data;
    this.setState({
      bannerList: [...data.banner],
      recommend: [...data.data]
    });
  }

  render() {
    
    return (
      <div className="new-songs-wrapper">
        <div className="card-swipe">
          <SwiperPage bannerList={this.state.bannerList} />
        </div>
        <SongsList
          songsList={this.state.recommend} />
      </div>
    );
  }
}

export default NewSong;
