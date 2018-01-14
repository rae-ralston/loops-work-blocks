import React, { Component } from 'react'
// import { FormControl } from 'material-ui/Form'
import Button from 'material-ui/Button'
import Card from 'material-ui/Card'
import TextField from 'material-ui/TextField'

import { hrs, min, sec } from '../data/helpers'
import { totalHMSToSec } from '../helpers'
import TimePicker from './TimePicker'

class AddSubTimerForm extends Component {
  state = {
    title: '',
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  handleChange = name => event => this.setState({ [name]: event.target.value })
  handleSubmit = event => {
    const { title, hours, minutes, seconds } = this.state
    const { handleAddSubTimer } = this.props
    event.preventDefault()
    let totalTime = totalHMSToSec(hours, minutes, seconds)
    handleAddSubTimer(title, totalTime)
  }

  render() {
    return (
      <Card>
        <form className="addSubTimerForm" onSubmit={ event => this.handleSubmit(event) }>
          <TextField
            required
            align='center'
            id='title'
            label='title'
            value={ this.state.title }
            onChange={ this.handleChange('title')}
          /><br/>
          <TimePicker type="hours" data={hrs} state={this.state.hours} handleChange={ this.handleChange } />
          <TimePicker type="minutes" data={min} state={this.state.minutes} handleChange={ this.handleChange } />
          <TimePicker type="seconds" data={sec} state={this.state.seconds} handleChange={ this.handleChange } /><br/>
          <Button raised color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    )
  }
}

export default AddSubTimerForm
