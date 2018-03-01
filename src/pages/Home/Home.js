/* eslint-disable no-plusplus */

import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleClick() {
    this.setState({ count: ++this.state.count });
  }
  render() {
    return (
      <div>
        this is Home~<br />
        当前计数：{this.state.count}<br />
        <button onClick={() => { this.handleClick(); }}>自增</button>
      </div>
    );
  }
}
