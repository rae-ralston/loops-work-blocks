import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'

import TimerControls from './TimerControls'
import { convertSecToHMS, padTimeForDisplay } from '../helpers'

export default class SubTimer extends Component {
  state = {
    timeLeft: this.props.timer.totalSeconds,
    interval: null,
  }

  componentDidMount() {
    const interval = setInterval(this.timer, 1000)
    this.setState({ interval })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  timer = () => {
    if (this.props.timer.isCurrent && this.props.isTicking) {
      this.setState({ timeLeft: this.state.timeLeft - 1 })
    }
    if (this.state.timeLeft < 0) {
      this.nextSubTimer('next')
    }
  }

  nextSubTimer = (direction) => {
    const { rotateSubTimer, timer } = this.props
    this.setState({ timeLeft: this.props.timer.totalSeconds })
    this.props.checkIfLastSubTimer(timer)
    rotateSubTimer(this.props.displayTimerId, this.props.timer.id, direction)
  }

  render() {
    const { timer, toggleTicking } = this.props
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
              toggleTicking={ toggleTicking }
              nextSubTimer={ this.nextSubTimer }
              isTicking={ this.state.isTicking }
            /> :
            <div></div>
        }
        <Divider/>
      </Card>
    )
  }
}

SubTimer.propTypes = {
  checkIfLastSubTimer: PropTypes.func,
  displayTimerId: PropTypes.number,
  isTicking: PropTypes.bool,
  rotateSubTimer: PropTypes.func,
  toggleTicking: PropTypes.func,
  timer: PropTypes.shape({
    id: PropTypes.number,
    index: PropTypes.number,
    hours: PropTypes.number,
    min: PropTypes.number,
    sec: PropTypes.number,
    isCurrent: PropTypes.bool,
    totalSeconds: PropTypes.number,
    title: PropTypes.string,
  }),
}
