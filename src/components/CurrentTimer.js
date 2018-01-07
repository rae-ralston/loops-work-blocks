import React, {Component} from 'react'
import Typography from 'material-ui/Typography'

import SubTimer from './SubTimer'

class CurrentTimer extends Component {
  // state = {
  //   currentCount:
  // }

  handleTick = (displayTimerId, subTimerId, isCurrent) => {
    console.log(this.props)
      // setInterval(
      //   this.props.subtractOneSecond(displayTimerId, subTimerId)
      //   , 1000
      // )
    // }
    console.log('inside handleTick', displayTimerId, subTimerId, isCurrent)
  }

  render() {
    const {displayTimer} = this.props
    const subTimers = displayTimer.subTimers.map(timer => (
      <SubTimer
        displayTimerId={displayTimer.id}
        timer={timer}
        key={'subTimer-' + timer.id}
        handleTick={this.handleTick}
      />
    ))
    return (
      <div>
        <Typography type='display3' align='center' gutterBottom>
          {displayTimer.title}
        </Typography>
        {subTimers}
      </div>
    )
  }
}

export default CurrentTimer