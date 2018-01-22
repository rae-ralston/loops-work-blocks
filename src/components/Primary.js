import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CurrentTimer from './CurrentTimer'

export default class Primary extends Component {
  render() {
    const {
      timerList,
      rotateSubTimer,
      newSubTimer,
      incrementLoopsMade,
      updateDisplayTimerTitle,
    } = this.props
    const currentTimer = timerList.filter(timer => timer.isDisplayed)

    return (
      <CurrentTimer
        displayTimer={ currentTimer[0] }
        rotateSubTimer={ rotateSubTimer }
        newSubTimer={ newSubTimer }
        incrementLoopsMade={ incrementLoopsMade }
        updateDisplayTimerTitle={ updateDisplayTimerTitle }
      />
    )
  }
}

Primary.propTypes = {
  timerList: PropTypes.arrayOf(PropTypes.object),
  rotateSubTimer: PropTypes.func,
  incrementLoopsMade: PropTypes.func,
  newSubTimer: PropTypes.func,
  updateDisplayTimerTitle: PropTypes.func,
}
