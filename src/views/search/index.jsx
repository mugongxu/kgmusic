import React, { Component } from 'react';
import SongsList from '#/common/songsList';
import { ajax } from '@/utils';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSearchList: [],
      searchResultList: []
    };
  }

  async componentDidMount() {
    // 获取热搜列表
    const response = await ajax.get('/km/search/hot', {
      params: {
        format: 'json',
        plat: 0,
        count: 30
      }
    });
    const data = response.data.data || {};
    const hotSearchList = data.info || [];
    this.setState({
      hotSearchList
    });
  }

  render() {
    
    return (
      <div className="search-wrapper">
        <div className="search-box">
          <div className="search-form-box">
            <form name="searchForm" className="search-form">
              <span className="search-icon"></span>
              <input type="text" className="search-keyword" placeholder="歌手/歌名/拼音"/>
              <input type="button" className="search-btn search-disabled-btn" value="搜索"/>
            </form>
          </div>
        </div>
        <div className="hot-search">
          <div className="hot-search-hd">最近热门</div>
          <ul className="hot-search-list">
            {
              this.state.hotSearchList.map((item, index) =>
                (<li key={index}>{item.keyword}</li>)  
              )
            }
          </ul>
        </div>
        <div className="search-result"></div>
      </div>
    );
  }
}

export default Search;
