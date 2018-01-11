import React, { Component } from 'react'
import { connect } from 'react-redux'

import CurrentTimer from '../components/CurrentTimer'
import rotateSubTimer from '../actions/rotateSubTimer'

class PrimaryContainer extends Component {
  render() {
    const { timerList } = this.props
    const currentTimer = timerList.filter(timer => timer.isDisplayed)
    
    // console.log("primary container: ",this.props)
    return (
      <CurrentTimer
        displayTimer={currentTimer[0]}
        rotateSubTimer={rotateSubTimer}
      />
    )
  }
}

const mapStateToProps = state => ({ timerList: state })

export default connect(mapStateToProps, { rotateSubTimer })(PrimaryContainer)
