import React from 'react'
import PropTypes from 'prop-types'

import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'

import { padTimeForDisplay } from '../../lib/timeHelpers'

export const TimePicker = ({ type, data, handleChange, current }) => (
  <TextField
    select
    label={type}
    value={current}
    onChange={handleChange}
    margin="normal">
    {data.map(unit => (
      <MenuItem key={`${type}-${unit}`} value={unit}>
        {padTimeForDisplay(unit)}
      </MenuItem>
    ))}
  </TextField>
)


TimePicker.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  handleChange: PropTypes.func,
  current: PropTypes.number,
  type: PropTypes.string,
}
