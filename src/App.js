import React, { Component } from 'react';
import './App.css';
import { ajax } from './utils';
import { BrowserRouter, Route } from 'react-router-dom';

const HomePage = ({ match }) => {
  return (
    <div>123456</div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo: ''
    };
  }

  async tick() {
    const response = await ajax.get('/banner');
    console.log(response);
  }

  render() {
    return (
      <div className="App">
        <a onClick={this.tick.bind(this)}>点击获取信息</a>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/ddd" component={HomePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
