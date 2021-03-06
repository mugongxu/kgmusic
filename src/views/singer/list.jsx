import React, { Component } from 'react';
import { ajax } from '@/utils';
import { NavLink } from 'react-router-dom';
import '@/assets/scss/singer.scss';

class SingerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classid: props.match.params.id,
      singerList: []
    };
  }

  async componentDidMount() {
    const response = await ajax.get(`/km/singer/list/`, {
      params: {
        classId: this.state.classid,
        json: true
      }
    });
    const data = response.data;
    let singerList = data.list || [];
    // 转化尺寸
    singerList = singerList.map(item => {
      item.imgurl = item.imgurl.replace('{size}', '400');
      return item;
    });
    this.setState({
      singerList: [...singerList]
    });
  }

  render() {
    
    return (
      <div className="singer-list-wrapper">
        <ul className="singer-img-list">
          {
            this.state.singerList.map((item, index) =>
              <li key={index}>
                <NavLink
                  to={{
                    pathname: `/nsinger/info/${item.singerId}`,
                    title: item.singerName,
                    hideTop: true
                  }}>
                  <div className="singer-img-left">
                    <img src={item.imgurl} alt="" />
                  </div>
                  <div className="singer-img-content">
                    <p>{item.singerName}</p>
                  </div>
                  <div className="singer-img-right">
                    <i className="singer-img-arrow"></i>
                  </div>
                </NavLink>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default SingerList;
