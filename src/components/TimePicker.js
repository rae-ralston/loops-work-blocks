import React from 'react'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'

import { padTimeForDisplay } from '../helpers'

const TimePicker = props => {
  const { type, data, handleChange, state } = props
  return (
    <TextField
      id="select-currency"
      select
      label={ type }
      value={ state }
      onChange={ handleChange(type) }
      margin="normal"
    >
      {
        data.map(unit => (
          <MenuItem key={ `${type}-${unit}` } value={ unit }>
            { padTimeForDisplay(unit) }
          </MenuItem>
        ))
      }
    </TextField>
  )
}

export default TimePicker
