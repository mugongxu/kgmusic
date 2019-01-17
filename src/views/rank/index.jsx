import React, { Component } from 'react';
import { ajax } from '@/utils';

class RankList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    
    return (
      <div className="rank-list-wrapper">
        排行榜
      </div>
    );
  }
}

export default RankList;
