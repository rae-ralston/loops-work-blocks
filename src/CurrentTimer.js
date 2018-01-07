import React from 'react'
import Typography from 'material-ui/Typography'

const CurrentTimer = (props) => {
  const {displayTimer} = props
  const subTimers = displayTimer.subTimers.map(timer => (
    <div key={'subTimer-' + timer.id}>
      <Typography type='title' align='center'>{timer.title}</Typography>
      <Typography type='subheading' align='center'>{timer.time} minutes</Typography>
    </div>
  ))
  
  return (
    <div>
      <Typography type='display3' align='center' gutterBottom>{displayTimer.title}</Typography>
      {subTimers}
    </div>
  )
}

export default CurrentTimer
