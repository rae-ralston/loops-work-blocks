import React, { Component } from 'react';

import NavDrawer from './components/NavDrawer'
// import DisplayTimersOnly from './containers/DisplayTimersOnly'
import PrimaryContainer from './containers/PrimaryContainer'
import 'typeface-roboto'

class App extends Component {
  render() {
    return (
      <div>
        <NavDrawer />
        <PrimaryContainer />
      </div>
    );
  }
}

export default App;
