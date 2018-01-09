import React from 'react'
import IconButton from 'material-ui/IconButton'
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious'
import SkipNextIcon from 'material-ui-icons/SkipNext'
import PlayArrowIcon from 'material-ui-icons/PlayArrow'

const TimerControls = (props) => (
  <div align='center'>
    <IconButton aria-label="Previous">
      <SkipPreviousIcon />
    </IconButton>
    <IconButton
      onClick={ () => props.toggleTicking() }
      aria-label="Play/pause"
    >
      <PlayArrowIcon />
    </IconButton>
    <IconButton aria-label="Next">
      <SkipNextIcon onClick={ () => props.nextSubTimer() } />
    </IconButton>
  </div>
)

export default TimerControls
