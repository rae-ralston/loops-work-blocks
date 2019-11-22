import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'material-ui/IconButton'
import PauseIcon from 'material-ui-icons/Pause'
import PlayArrowIcon from 'material-ui-icons/PlayArrow'
import SkipNextIcon from 'material-ui-icons/SkipNext'
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious'

const TimerControls = ({ toggleTicking, nextSubTimer, isTicking }) => (
  <div align='center'>
    <IconButton
      onClick={ () => nextSubTimer('prev')}
      aria-label="Previous"
    >
      <SkipPreviousIcon />
    </IconButton>
    <IconButton
      onClick={ () => toggleTicking() }
      aria-label="Play/pause"
      >
      { isTicking ? <PauseIcon /> : <PlayArrowIcon />}
    </IconButton>
    <IconButton
      onClick={ () => nextSubTimer('next') }
      aria-label="Next"
    >
      <SkipNextIcon />
    </IconButton>
  </div>
)

TimerControls.propTypes = {
  toggleTicking: PropTypes.func,
  nextSubTimer: PropTypes.func,
  isTicking: PropTypes.bool,
}

export default TimerControls