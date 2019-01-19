import React, { Component } from 'react';
import { ajax } from '@/utils';
import { NavLink } from 'react-router-dom';
import '@/assets/scss/rank.scss';

class RankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankList: []
    };
  }

  async componentDidMount() {
    const response = await ajax.get('/rank/list&json=true');
    const data = response.data;
    let rankList = data.rank.list || [];
    // 转化尺寸
    rankList = rankList.map(item => {
      item.imgurl = item.imgurl.replace('{size}', '400');
      return item;
    });
    this.setState({
      rankList: [...rankList]
    });
  }

  render() {
    
    return (
      <div className="rank-list-wrapper">
        <ul className="rank-img-list">
          {
            this.state.rankList.map(item =>
              <li key={item.rankid}>
                <NavLink
                  to={'/rank/info/'+item.rankid}>
                  <div className="rank-img-left">
                    <img src={item.imgurl} alt="" />
                  </div>
                  <div className="rank-img-content">
                    <p>{item.rankname}</p>
                  </div>
                  <div className="rank-img-right">
                    <i className="rank-img-arrow"></i>
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

export default RankList;
