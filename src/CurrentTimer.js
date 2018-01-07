import React from 'react'
import Typography from 'material-ui/Typography'

import SubTimer from './SubTimer'

const CurrentTimer = (props) => {
  const {displayTimer} = props


  const subTimers = displayTimer.subTimers.map(timer => (
    <SubTimer timer={timer} key={'subTimer-' + timer.id} />
  ))

  return (
    <div>
      <Typography type='display3' align='center' gutterBottom>{displayTimer.title}</Typography>
      {subTimers}
    </div>
  )
}

export default CurrentTimer
