import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import Card from 'material-ui/Card'
import TextField from 'material-ui/TextField'

import { hrs, min, sec } from '../lib/helpers'
import { totalHMSToSec } from '../lib/timeHelpers'
import { TimePicker } from './TimePicker'

export default class AddSubTimerForm extends Component {
  state = {
    title: '',
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  handleChange = name => event => this.setState({ [name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    const { title, hours, minutes, seconds } = this.state
    const { handleAddSubTimer } = this.props
    const totalTime = totalHMSToSec(hours, minutes, seconds)

    handleAddSubTimer(title, totalTime)
  }

  render() {
    const { hours, minutes, seconds } = this.state

    return (
      <Card>
        <form
          className="addSubTimerForm"
          onSubmit={ event => this.handleSubmit(event) }
        >
          <TextField
            required
            id='subTimer-title'
            label='title'
            value={ this.state.title }
            onChange={ this.handleChange('title') }
          /><br/>
          <TimePicker
            type="hours"
            data={ hrs }
            current={ hours }
            handleChange={ this.handleChange }
          />
          <TimePicker
            type="minutes"
            data={ min }
            current={ minutes }
            handleChange={ this.handleChange }
          />
          <TimePicker
            type="seconds"
            data={ sec }
            current={ seconds }
            handleChange={ this.handleChange }
          />
          <br/>
          <Button raised color="primary" type="submit">Submit</Button>
        </form>
      </Card>
    )
  }
}

AddSubTimerForm.propTypes = {
  handleAddSubTimer: PropTypes.func,
}
