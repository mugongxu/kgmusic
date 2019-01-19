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

const HeaderGoBack = () => {
  return (
    <div className="header-goback">1</div>
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
