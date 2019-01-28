import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { routeConfig } from '@/router';


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }
  render() {
    return (
      <div className="main-container-wrapper">
        {
          routeConfig.map(item => {
            const Component = item.component;
            const style = {
              marginTop: item.hideTop ? '3.4286rem' : '6.67rem'
            };
            return (
              <Route
                exact
                key={item.path}
                path={item.path}
                render={(props) => (
                  <div style={style}>
                    <Component {...props} />
                  </div>
                )} />
            )
          })
        }
      </div>
    );
  }
};

export default MainContainer;
