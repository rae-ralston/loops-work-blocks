import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'material-ui/IconButton'
import ArrowUpwardIcon from 'material-ui-icons/ArrowUpward'
import ArrowDownwardIcon from 'material-ui-icons/ArrowDownward'

export const OrderControls = ({ moveSubTimerOne }) => {
  return (
    <div align='center'>
      <IconButton
        onClick={() => moveSubTimerOne('up')}
        aria-label="Move Timer Up"
      >
        <ArrowUpwardIcon />
      </IconButton>
      <IconButton
        onClick={() => moveSubTimerOne('down')}
        aria-label="Move Timer Down"
      >
        <ArrowDownwardIcon />
      </IconButton>
    </div>
  )
}

OrderControls.propTypes = {
  moveSubTimerOne: PropTypes.func,
}