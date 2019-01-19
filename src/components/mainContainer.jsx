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
              marginTop: item.model === 1 ? '6.4286rem' : '3.2143rem'
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
