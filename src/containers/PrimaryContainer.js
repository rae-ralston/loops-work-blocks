import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CurrentTimer from '../components/CurrentTimer'
import rotateSubTimer from '../actions/rotateSubTimer'
import newSubTimer from '../actions/newSubTimer'
import incrementLoopsMade from '../actions/incrementLoopsMade'
import updateDisplayTimerTitle from '../actions/updateDisplayTimerTitle'

class PrimaryContainer extends Component {
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

PrimaryContainer.propTypes = {
  timerList: PropTypes.arrayOf(PropTypes.object),
  rotateSubTimer: PropTypes.func,
  incrementLoopsMade: PropTypes.func,
  newSubTimer: PropTypes.func,
  updateDisplayTimerTitle: PropTypes.func,
}

const mapStateToProps = state => ({ timerList: state })

export default connect(mapStateToProps, {
  rotateSubTimer,
  newSubTimer,
  incrementLoopsMade,
  updateDisplayTimerTitle,
})(PrimaryContainer)
