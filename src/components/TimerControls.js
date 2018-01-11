import React, { Component } from 'react'

import IconButton from 'material-ui/IconButton'
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious'
import SkipNextIcon from 'material-ui-icons/SkipNext'
import PlayArrowIcon from 'material-ui-icons/PlayArrow'

class TimerControls extends Component {
  render() {
    const { toggleTicking, nextSubTimer } = this.props
    return (
      <div align='center'>
        <IconButton aria-label="Previous">
          <SkipPreviousIcon onClick={ () => nextSubTimer('prev')} />
        </IconButton>
        <IconButton
          onClick={ () => toggleTicking() }
          aria-label="Play/pause"
          >
          <PlayArrowIcon />
        </IconButton>
        <IconButton aria-label="Next">
          <SkipNextIcon onClick={ () => nextSubTimer('next') } />
        </IconButton>
      </div>
    )
  }
}

export default TimerControls
