import React from 'react'
import PropTypes from 'prop-types'

import { AddSubTimerForm } from './AddSubTimerForm'
import { AddDisplayTimerForm } from './AddDisplayTimerForm'

const AddTimer = ({ type, ...props }) => (
  type === 'sub' ?
    <AddSubTimerForm {...props} /> :
    <AddDisplayTimerForm {...props} />
)

AddTimer.propTypes = {
  type: PropTypes.string
}

export default AddTimer