import React from 'react'
import PropTypes from 'prop-types'

import CurrentTimer from './CurrentTimer'

const Primary = ({
    incrementLoopsMade,
    moveSubTimerOne,
    newSubTimer,
    rotateSubTimer,
    timerList,
    updateDisplayTimerTitle,
  }) => (
  <CurrentTimer
    displayTimer={
      timerList.filter(timer => timer.isDisplayed)[0]
    }
    rotateSubTimer={rotateSubTimer}
    newSubTimer={newSubTimer}
    incrementLoopsMade={incrementLoopsMade}
    updateDisplayTimerTitle={updateDisplayTimerTitle}
    moveSubTimerOne={moveSubTimerOne}
  />
)

Primary.propTypes = {
  timerList: PropTypes.arrayOf(PropTypes.object),
  rotateSubTimer: PropTypes.func,
  incrementLoopsMade: PropTypes.func,
  newSubTimer: PropTypes.func,
  updateDisplayTimerTitle: PropTypes.func,
  moveSubTimerOne: PropTypes.func,
}

export default Primary