import React, {Component} from 'react'

import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'

import TimerControls from './TimerControls'
import {convertSecToHMS} from './helpers'

class SubTimer extends Component {
  state = {
    timeLeft: this.props.timer.totalSeconds,
    interval: null,
    isTicking: true,
  }

  componentDidMount() {
    const interval = setInterval(this.timer, 1000)
    this.setState({interval})
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  timer = () => {
    if (this.props.timer.isCurrent && this.state.isTicking) {
      this.setState({timeLeft: this.state.timeLeft - 1})
    }
  }

  toggleTicking = () => {
    console.log("turn off ticking!", this.state.isTicking)
    this.setState({isTicking: !this.state.isTicking})
  }

  render() {
    const {timer} = this.props
    let HMS = convertSecToHMS(this.state.timeLeft)
    timer.hours = HMS[0]
    timer.min = HMS[1]
    timer.sec = HMS[2]
    console.log('@@@', timer)
    return (
      <Card>
        <div>
          <Typography type='title' align='center'>{timer.title}</Typography>
          <Typography type='body2' align='center'>is current: {JSON.stringify(timer.isCurrent)}</Typography>
          <Typography type='subheading' align='center'>
            {timer.hours} : {timer.min} : {timer.sec}
          </Typography>
          <Typography type='title' align='center'>-</Typography>

        </div>
        {timer.isCurrent ? <TimerControls toggleTicking={this.toggleTicking} /> : <div></div>}
        <Divider/>
      </Card>
    )
  }
}

export default SubTimer
