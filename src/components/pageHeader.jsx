import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { navRouter, routeConfig } from '@/router';
import '@/assets/scss/pageHeader.scss';

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <ul>
        {
          navRouter.map(item => {
            return (
              <li key={item.path}>
                <NavLink
                  exact
                  to={item.path}
                  activeClassName="cur">
                  {item.name}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

const HeaderGoBack = (props) => {
  console.log(props);
  const goBack = () => {
    props.history.goBack();
  };
  // 路由匹配
  const path = props.match.path;
  let hideTop = false;
  let title = '';
  routeConfig.forEach(item => {
    if (item.path === path) {
      title = item.name;
      hideTop = item.hideTop;
    }
  });

  let className = hideTop ? 'header-goback' : 'header-goback header-doback-bg';
  
  return (
    <div className={className}>
      <p className="page-title">{props.location.title||title}</p>
      <div className="goback" onClick={goBack}>
        <i></i>
      </div>
    </div>
  );
};

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header-fixed">
        <div className="top-hd">
          <NavLink
            to='/'
            className="logo">
            <i>酷猫音乐</i>
          </NavLink>
          <div></div>
          <NavLink
            to='/nsearch/index'
            className="btn-search">
          </NavLink>
        </div>
        {
          routeConfig.map(item => {
            if (item.model === 1) {
              return (<Route exact key={item.path} path={item.path} component={HeaderNav}></Route>);
            } else {
              return (<Route key={item.path} path={item.path} component={HeaderGoBack}></Route>);
            }
          })
        }
      </div>
    );
  }
};

export default PageHeader;
