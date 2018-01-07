import React, { Component } from 'react';

import NavContainer from './NavContainer'
import PrimaryContainer from './PrimaryContainer'

import 'typeface-roboto'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <NavContainer/>
        <PrimaryContainer />
      </div>
    );
  }
}

export default App;
