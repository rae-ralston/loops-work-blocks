import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import TimerControls from './TimerControls'
import { convertSecToHMS, createTime } from '../../lib/timeHelpers'
import { OrderControls } from './OrderControls';

const SubTimer = ({ 
  displayTimerId, 
  isLast,
  isTicking, 
  moveSubTimerOne,
  rotateSubTimer,
  timer, 
  toggleTicking, 
}) => {
  const [timeLeft, setTimeLeft] = useState(timer.totalSeconds)

  useEffect(() => {
    if (timer.isCurrent && isTicking) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    if (timeLeft < 0) {
      nextSubTimer('next')
    }
    
  });

  const nextSubTimer = direction => {
    setTimeLeft(timer.totalSeconds)
    isLast(timer)
    rotateSubTimer(displayTimerId, timer.id, direction)
  }

  let HMS = convertSecToHMS(timeLeft)
  timer.hours = HMS[0]
  timer.min = HMS[1]
  timer.sec = HMS[2]

  return (
    <Card>
      <div>
        <Typography type='title' align='center'>{timer.title}</Typography>
        <Typography type='subheading' align='center'>
          {createTime(timer)}
        </Typography>
      </div>
      {timer.isCurrent ?
        <TimerControls
          toggleTicking={toggleTicking}
          nextSubTimer={nextSubTimer}
          isTicking={isTicking} /> :
        <div></div>
      }
      <OrderControls moveSubTimerOne={direction => moveSubTimerOne({ 
          id: timer.id, 
          index: timer.index, 
          direction, 
          displayTimerId,
        })} 
      />
      <Divider/>
    </Card>
  )
}

SubTimer.propTypes = {
  isLast: PropTypes.func,
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
  moveSubTimerOne: PropTypes.func
}

export default SubTimer