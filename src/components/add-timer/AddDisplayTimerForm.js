import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Button from '../common/Button'

export const AddDisplayTimerForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState('')

  return (
    <form
      className="newDisplayTimerForm"
      onSubmit={e => handleSubmit(e, title)}>
      <TextField
        required
        id='displayTimer-title'
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)} />
      <br />
      <Button color="primary" type="submit">Submit</Button>
    </form>
  )
}

AddDisplayTimerForm.propTypes = {
  handleSubmit: PropTypes.func
}
