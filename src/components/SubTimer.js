import React, { Component } from 'react'

import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'

import TimerControls from './TimerControls'
import { convertSecToHMS, padTimeForDisplay } from '../helpers'

class SubTimer extends Component {
  state = {
    timeLeft: this.props.timer.totalSeconds,
    interval: null,
    isTicking: true,
  }

  componentDidMount() {
    const interval = setInterval(this.timer, 1000)
    this.setState({ interval })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  timer = () => {
    if (this.props.timer.isCurrent && this.state.isTicking) {
      this.setState({ timeLeft: this.state.timeLeft - 1 })
    }
  }

  toggleTicking = () => this.setState({ isTicking: !this.state.isTicking })
  nextSubTimer = () =>
    this.props.rotateSubTimer(this.props.displayTimerId, this.props.timer.id)

  render() {
    const { timer } = this.props
    // console.log('$$$', this.props)
    let HMS = convertSecToHMS(this.state.timeLeft)
    timer.hours = HMS[0]
    timer.min = HMS[1]
    timer.sec = HMS[2]

    return (
      <Card>
        <div>
          <Typography type='title' align='center'>{ timer.title }</Typography>
          <Typography type='subheading' align='center'>
            { padTimeForDisplay(timer.hours) } : { padTimeForDisplay(timer.min) } : { padTimeForDisplay(timer.sec) }
          </Typography>
        </div>
        {
          timer.isCurrent ?
            <TimerControls
              toggleTicking={ this.toggleTicking }
              nextSubTimer={ this.nextSubTimer }
            /> :
            <div></div>
        }
        <Divider/>
      </Card>
    )
  }
}

export default SubTimer
