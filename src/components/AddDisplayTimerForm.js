import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

export default class AddDisplayTimerForm extends Component{
  state = {
    title: ""
  }

  handleChange = (event) => this.setState({ title: event.target.value })

  render() {
    const { handleSubmit } = this.props
    const { title } = this.state
    return (
      <form
      className="newDisplayTimerForm"
      onSubmit={ (e) => handleSubmit(e, title) }
      >
        <TextField
        required
        id='displayTimer-title'
        placeholder="title"
        value={ title }
        onChange={ (e) => this.handleChange(e) }
        />
        <br />
        <Button raised color="primary" type="submit">
          Submit
        </Button>
      </form>
    )
  }
}
