import React from 'react'
import PropTypes from 'prop-types'

import { padTimeForDisplay } from '../../lib/timeHelpers'

export const TimePicker = ({ type, data, handleChange, current }) => (
  <div>time picker</div>
)


TimePicker.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  handleChange: PropTypes.func,
  current: PropTypes.number,
  type: PropTypes.string,
}
