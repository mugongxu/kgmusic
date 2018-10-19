import React, { Component } from 'react';
import './App.css';
import { ajax } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo: ''
    };
  }

  async tick() {
    const response = await ajax.get('/plist/list/125032?json=true');
    console.log(response);
  }

  render() {
    return (
      <div className="App">
        <a onClick={this.tick.bind(this)}>点击获取信息</a>
      </div>
    );
  }
}

export default App;
