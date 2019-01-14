import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className="header-nav">
    </div>
  );
};

const HeaderGoBack = () => {
  return (
    <div className="header-goback"></div>
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
        <BrowserRouter>
          <Route path="/" exact component={HeaderNav} />
          <Route path="/ddd" component={HeaderGoBack} />
        </BrowserRouter>
      </div>
    );
  }
};

export default PageHeader;
