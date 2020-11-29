import PropTypes from 'prop-types'
import React from 'react'
import {IconButton} from "../common/IconButton"


export const OrderControls = ({ moveSubTimerOne }) => {
  return (
    <div align='center'>
      <IconButton
        onClick={() => moveSubTimerOne('up')}
        aria-label="Move Timer Up"
      >
      </IconButton>
      <IconButton
        onClick={() => moveSubTimerOne('down')}
        aria-label="Move Timer Down"
      >
      </IconButton>
    </div>
  )
}

OrderControls.propTypes = {
  moveSubTimerOne: PropTypes.func,
}