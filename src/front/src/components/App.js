import React, { Component } from 'react';
import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {'component': props.component};
  }

  render() {
    return (
        <div id="firstDiv">
          {this.props.component}
        </div>
    )
  }

}

export default App;