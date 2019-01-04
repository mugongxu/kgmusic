import React, { Component } from 'react';
import './App.css';
import { ajax } from './utils';
import { BrowserRouter, Route } from 'react-router-dom';
import Swiper from './plugins/swiper/custom';

const HomePage = ({ match }) => {
  return <div>123456</div>;
};

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo: '',
      bannerList: [],
      recommend: []
    };
  }

  async componentDidMount() {
    const response = await ajax.get('/banner');
    const data = response.data;
    this.setState({
      bannerList: [...data.banner],
      recommend: [...data.data]
    });
  }

  async tick() {
    const response = await ajax.get('/kg/?json=true');
    console.log(response);
  }

  render() {
    
    return (
      <div className="App">
        <div className="card-swipe">
          <SwiperPage bannerList={this.state.bannerList} />
        </div>
        <ul>
          {
            this.state.recommend.map((item, index) => 
              <li key={index}>
                <span className="filename">{item.filename}</span>
                <span className="addtime">{item.addtime}</span>
              </li>
            )
          }
        </ul>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/ddd" component={HomePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
