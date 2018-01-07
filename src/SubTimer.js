import React, {Component} from 'react'

import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

import TimerControls from './TimerControls'
import {padTimeForDisplay, totalTime} from './helpers'

class SubTimer extends Component {
  state = {
    time: totalTime(this.props.timer.hours, this.props.timer.minutes, this.props.timer.seconds),
  }

  tick() {

  }

  render() {
    const {timer} = this.props
    console.log(this.state)
    return (
      <Card>
        <div>
          <Typography type='title' align='center'>{timer.title}</Typography>
          <Typography type='body2' align='center'>is current: {JSON.stringify(timer.isCurrent)}</Typography>
          <Typography type='subheading' align='center'>
            {padTimeForDisplay(timer.hours)}:
            {padTimeForDisplay(timer.minutes)}:
            {padTimeForDisplay(timer.seconds)}
          </Typography>
        </div>
        {timer.isCurrent ? <TimerControls /> : <div></div>}
      </Card>
    )
  }
}

export default SubTimer
