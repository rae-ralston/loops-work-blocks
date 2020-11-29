import React from 'react'
import PropTypes from 'prop-types'
import Button from '../common/Button'
import { useTitle } from '../../hooks/use-title'

export const AddDisplayTimerForm = ({ handleSubmit }) => {
  const [title, setTitle] = useTitle()

  return (
    <form
      className="newDisplayTimerForm"
      onSubmit={e => handleSubmit(e, title)}>
      {/* <field
        required
        id='displayTimer-title'
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)} /> */}
      <br />
      <Button color="primary" type="submit">Submit</Button>
    </form>
  )
}

AddDisplayTimerForm.propTypes = {
  handleSubmit: PropTypes.func
}
