import React, {Component} from 'react'
import { connect } from 'react-redux'

import CurrentTimer from './CurrentTimer'

class PrimaryContainer extends Component {
  render() {
    const {timerList} = this.props
    const currentTimer = timerList.filter(timer => timer.isDisplayed)
    return (
      <CurrentTimer displayTimer={currentTimer[0]} />
    )
  }
}

function mapStateToProps(state) {
  return {
    timerList: state
  }
}

export default connect(mapStateToProps, null)(PrimaryContainer)
