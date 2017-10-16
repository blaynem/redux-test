import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testThis } from '../actions'
import axios from 'axios';

class App extends Component {
  testThis = () => {
    this.props.testThis()
  }
  render() {
    return (
      <div>
        Testin
        <button onClick={this.testThis}>Test</button>
      </div>
    );
  }
}

export default connect(null, { testThis })(App);