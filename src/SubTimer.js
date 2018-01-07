import React, {Component} from 'react'

import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'

import TimerControls from './TimerControls'
import {convertSecToHMS, totalHMSToSec} from './helpers'

class SubTimer extends Component {
  state = {
    time: totalHMSToSec(this.props.timer.hours, this.props.timer.minutes, this.props.timer.seconds),
  }

  tick() {

  }

  render() {
    const {timer} = this.props
    let HMS = convertSecToHMS(timer.totalSeconds)
    console.log(this.props)
    timer.hours = HMS[0]
    timer.min = HMS[1]
    timer.sec = HMS[2]

    return (
      <Card raised={timer.isCurrent}>
        <div>
          <Typography type='title' align='center'>{timer.title}</Typography>
          <Typography type='body2' align='center'>is current: {JSON.stringify(timer.isCurrent)}</Typography>
          <Typography type='subheading' align='center'>
            {timer.hours} : {timer.min} : {timer.sec}
          </Typography>
        </div>
        {timer.isCurrent ? <TimerControls /> : <div></div>}
        <Divider/>
      </Card>
    )
  }
}

// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

export default SubTimer
