import React, { Component } from 'react';

import UserForm from '../components/User.Form';
import UserDisplay from '../components/User.Display';

class App extends Component {
  render() {
    return (
      <div id="App">
        <h1>React Redux Test</h1>
        <UserForm />
        <UserDisplay />
      </div>
    );
  }
}

export default App;