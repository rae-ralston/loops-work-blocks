import React, { Component } from 'react';
import 'typeface-roboto'

import NavDrawer from './components/NavDrawer'
import PrimaryContainer from './containers/PrimaryContainer'

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
