import React, { Component } from 'react';
import './App.css';
import PageHeader from '#/pageHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo: '',
      bannerList: [],
      recommend: []
    };
  }

  async componentDidMount() {
  }

  render() {
    
    return (
      <div className="App">
        <PageHeader />
      </div>
    );
  }
}

export default App;
