import React, {Component} from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

import SubTimer from './SubTimer'
import AddSubTimerForm from './AddSubTimerForm'


export default class CurrentTimer extends Component {
  state = {
    isTicking: false,
    addSubTimer: false,
  }

  toggleTicking = () => this.setState({ isTicking: !this.state.isTicking })
  toggleAddSubTimer = () => this.setState({ addSubTimer: !this.state.addSubTimer})
  handleAddSubTimer = (title, totalTime) => {
    const { newSubTimer, displayTimer } = this.props
    newSubTimer(displayTimer.id, title, totalTime)
    this.toggleAddSubTimer()
  }

  checkIfLastSubTimer = (timer) => {
    const { displayTimer, incrementLoopsMade } = this.props
    if (displayTimer.subTimers.length === timer.index) {
      incrementLoopsMade(displayTimer.id)
    }
  }

  createSubTimers = (displayTimer) => displayTimer.subTimers
    .map(timer => (
      <SubTimer
        displayTimerId={ displayTimer.id }
        timer={ timer }
        key={ 'st-' + displayTimer.id + timer.id }
        rotateSubTimer={ this.props.rotateSubTimer }
        isTicking={ this.state.isTicking }
        toggleTicking={ this.toggleTicking }
        checkIfLastSubTimer={ this.checkIfLastSubTimer }
      />
    )
  )


  render() {
    const { displayTimer } = this.props
    return (
      <div>
        <Typography type='display3' align='center' gutterBottom>
          { displayTimer.title }
        </Typography>
        <Typography type='caption' align='center' gutterBottom>
          { displayTimer.loopsMade + " loops made." }
        </Typography>
        { this.createSubTimers(displayTimer) }
        {
          this.state.addSubTimer ?
            <AddSubTimerForm handleAddSubTimer={ this.handleAddSubTimer } /> :
            <Button
              fab dense mini
              color="primary"
              aria-label="add"
              onClick={ () => this.toggleAddSubTimer() }
            >
              <AddIcon />
            </Button>
        }
      </div>
    )
  }
}
