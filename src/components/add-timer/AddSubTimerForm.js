import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../common/Button'
import { hrs, min, sec } from '../../lib/helpers'
import { totalHMSToSec } from '../../lib/timeHelpers'
import { TimePicker } from './TimePicker'
import { useTitle } from '../../hooks/use-title'

export const AddSubTimerForm = ({ handleAddSubTimer }) => {
  const [title, setTitle] = useTitle()
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const { hours, minutes, seconds } = time
  
  const handleChange = name => e => setTime({ ...time, [name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const totalTime = totalHMSToSec(hours, minutes, seconds)
    handleAddSubTimer(title, totalTime)
  }

  return (
    <form
      className="addSubTimerForm"
      onSubmit={handleSubmit}>
      {/* <TextField
        required
        id='subTimer-title'
        label='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)} /> */}
      <br/>
      <TimePicker
        type="hours"
        data={hrs}
        current={hours}
        handleChange={handleChange('hours')} />
      <TimePicker
        type="minutes"
        data={min}
        current={minutes}
        handleChange={handleChange('minutes')} />
      <TimePicker
        type="seconds"
        data={sec}
        current={seconds}
        handleChange={handleChange('seconds')} />
      <br/>
      <Button color="primary" type="submit">Submit</Button>
    </form>
  )
}

AddSubTimerForm.propTypes = {
  handleAddSubTimer: PropTypes.func,
}
