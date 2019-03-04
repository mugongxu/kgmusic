import React, { Component } from 'react';
import './App.css';
import PageHeader from '#/pageHeader';
import MainContainer from '#/mainContainer';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
  }

  render() {
    
    return (
      <HashRouter>
        <div className="App">
          <PageHeader />
          <MainContainer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
