import React, { Component } from 'react';

import NavContainer from './components/NavContainer'
import PrimaryContainer from './containers/PrimaryContainer'
import 'typeface-roboto'

class App extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        <PrimaryContainer />
      </div>
    );
  }
}

export default App;
