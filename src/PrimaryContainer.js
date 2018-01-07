import React, {Component} from 'react'
import { connect } from 'react-redux'

import CurrentTimer from './CurrentTimer'
import {subtractOneSecond} from './index'

class PrimaryContainer extends Component {
  render() {
    const {timerList, subtractOneSecond} = this.props
    const currentTimer = timerList.filter(timer => timer.isDisplayed)
    console.log('primary container:', currentTimer[0])
    return (
      <CurrentTimer
        displayTimer={currentTimer[0]}
        subtractOneSecond={subtractOneSecond}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    timerList: state
  }
}

export default connect(mapStateToProps, {subtractOneSecond})(PrimaryContainer)
