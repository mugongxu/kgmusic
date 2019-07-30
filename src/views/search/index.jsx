import React, { Component } from 'react';
import SongsList from '#/common/songsList';
import { ajax } from '@/utils';
import '@/assets/scss/search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSearchList: [],
      searchResultList: [],
      keyword: '',
      total: 0,
      page: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ keyword: event.target.value });
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
    const data = response.data || {};
    const hotSearchList = data.list || [];
    this.setState({
      hotSearchList
    });
  }

  // 获取搜索歌曲信息
  async searchSong() {
    // 数据请求
    const response = await ajax.get('/km/search/song', {
      params: {
        page: this.state.page,
        keyword: this.state.keyword
      }
    });
    const data = response.data || {};
    this.setState({
      searchResultList: [...data.list],
      total: data.total
    });
  }

  // 热搜
  searchHot(index) {
    let keyword = this.state.hotSearchList[index].keyword;
    this.setState({
      keyword: keyword
    }, () => {
      this.searchSong();
    });
  }

  render() {
    const resultLength = this.state.searchResultList.length;
    return (
      <div className="search-wrapper">
        <div className="search-box">
          <div className="search-form-box">
            <form name="searchForm" className="search-form">
              <span className="search-icon"></span>
              <input
                type="text"
                className="search-keyword"
                value={this.state.keyword}
                placeholder="歌手/歌名/拼音"
                onChange={this.handleChange} />
              <input
                type="button"
                className="search-btn search-disabled-btn"
                value="搜索"
                onClick={this.searchSong.bind(this)}/>
            </form>
          </div>
        </div>
        <div
          className="hot-search"
          style={{
            display: resultLength > 0 ? 'none' : 'block'
          }}>
          <div className="hot-search-hd">最近热门</div>
          <ul className="hot-search-list">
            {
              this.state.hotSearchList.map((item, index) =>
                <li key={index} onClick={this.searchHot.bind(this, index)}>
                  <a className="hot-keyword js-hot-keyword">{item.keyword}</a>
                </li>
              )
            }
          </ul>
        </div>
        <div
          className="search-result"
          style={{
            display: resultLength > 0 ? 'block' : 'none'
          }}>
          <div className="search-result-hd"> 共有37条结果 </div>
          <SongsList
            songsList={this.state.searchResultList} />
        </div>
      </div>
    );
  }
}

export default Search;
