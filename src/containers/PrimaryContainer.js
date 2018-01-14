import React, { Component } from 'react'
import { connect } from 'react-redux'

import CurrentTimer from '../components/CurrentTimer'
import rotateSubTimer from '../actions/rotateSubTimer'
import newSubTimer from '../actions/newSubTimer'
import incrementLoopsMade from '../actions/incrementLoopsMade'

class PrimaryContainer extends Component {
  render() {
    const {
      timerList,
      rotateSubTimer,
      newSubTimer,
      incrementLoopsMade
    } = this.props
    const currentTimer = timerList.filter(timer => timer.isDisplayed)
    return (
      <CurrentTimer
        displayTimer={ currentTimer[0] }
        rotateSubTimer={ rotateSubTimer }
        newSubTimer={ newSubTimer }
        incrementLoopsMade={ incrementLoopsMade }
      />
    )
  }
}

const mapStateToProps = state => ({ timerList: state })

export default connect(mapStateToProps, {
  rotateSubTimer,
  newSubTimer,
  incrementLoopsMade,
})(PrimaryContainer)
