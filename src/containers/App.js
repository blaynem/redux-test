import React, { Component } from 'react';

import FormSubmit from '../components/Form.Submit';
import UserDisplay from '../components/User.Display';

class App extends Component {
  render() {
    return (
      <div id="App">
        <h1>React Redux Test</h1>
        <FormSubmit />
        <UserDisplay />
      </div>
    );
  }
}

export default App;