import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
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
        <div className="top-hd"></div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HeaderNav} />
            <Route path="/ddd" component={HeaderGoBack} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default PageHeader;
