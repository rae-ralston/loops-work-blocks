import React, { Component } from 'react'

import IconButton from 'material-ui/IconButton'
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious'
import SkipNextIcon from 'material-ui-icons/SkipNext'
import PlayArrowIcon from 'material-ui-icons/PlayArrow'
import PauseIcon from 'material-ui-icons/Pause'

export default class TimerControls extends Component {
  render() {
    const { toggleTicking, nextSubTimer, isTicking } = this.props
    return (
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
  }
}
