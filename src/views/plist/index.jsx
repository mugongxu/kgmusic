import React, { Component } from 'react';
import { ajax } from '@/utils';
import { NavLink } from 'react-router-dom';
import '@/assets/scss/plist.scss';

class PlistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plistList: [],
      page: 1,
      total: 0,
      pagesize: 0
    };
  }

  componentDidMount() {
    this.getPlistList();
    document.addEventListener('scroll', this.onscroll.bind(this), true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onscroll.bind(this), true);
  }

  async getPlistList() {
    const response = await ajax.get('/km/plist/index', {
      params: {
        page: this.state.page
      }
    });
    const data = response.data;
    const plist =  data.plist;
    let plistList = plist.list.info || [];
    // 转化尺寸
    plistList = plistList.map(item => {
      item.imgurl = item.imgurl.replace('{size}', '400');
      return item;
    });
    // 数据合并
    const concatArr = [...this.state.plistList, ...plistList]
    // 保存数据
    this.setState({
      plistList: [...concatArr],
      total: plist.list.total,
      pagesize: plist.pagesize
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
        this.getPlistList();
      });
    }
  }

  render() {
    
    return (
      <div className="plist-list-wrapper">
        <ul className="plist-img-list">
          {
            this.state.plistList.map((item, index) =>
              <li key={index}>
                <NavLink
                  to={{
                    pathname: `/nplist/list/${item.specialid}`,
                    title: item.specialname
                  }}>
                  <div className="plist-img-left">
                    <img src={item.imgurl} alt="" />
                  </div>
                  <div className="plist-img-content">
                    <p className="plist-img-content-first">{item.specialname}</p>
                    <p className="plist-img-content-sub">
                      <i className="icon-music"></i>
                      {item.playcount}
                    </p>
                  </div>
                  <div className="plist-img-right">
                    <i className="plist-img-arrow"></i>
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

export default PlistList;
