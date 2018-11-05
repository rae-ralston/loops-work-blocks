import React, { Component } from 'react';
import 'typeface-roboto'

import NavDrawer from './components/nav/NavDrawer'
import PrimaryContainer from './components/primary/PrimaryContainer'

class App extends Component {
  render() {
    return (
      <div>
        <NavDrawer />
        <PrimaryContainer />
      </div>
    )
  }
}

export default App;
