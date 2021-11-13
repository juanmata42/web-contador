import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: 'December, 27, 2021' };
  }
  render() {
    return (
      <>
        <Clock deadline={this.state.deadline} />
      </>
    );
  }
}
export default App;
