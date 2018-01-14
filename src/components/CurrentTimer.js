import React, {Component} from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

import SubTimer from './SubTimer'
import AddSubTimerForm from './AddSubTimerForm'


class CurrentTimer extends Component {
  state = {
    isTicking: false,
    addSubTimer: false,
  }

  toggleTicking = () => this.setState({ isTicking: !this.state.isTicking })
  toggleAddSubTimer = () => this.setState({ addSubTimer: !this.state.addSubTimer})

  render() {
    const { displayTimer, rotateSubTimer, newSubTimer } = this.props
    const subTimers = displayTimer.subTimers.map(timer => (
      <SubTimer
        displayTimerId={ displayTimer.id }
        timer={ timer }
        key={ 'st-' + displayTimer.id + timer.id }
        rotateSubTimer={ rotateSubTimer }
        isTicking={ this.state.isTicking }
        toggleTicking={ this.toggleTicking }
      />
    ))
    console.log(this.props)
    return (
      <div>
        <Typography type='display3' align='center' gutterBottom>
          { displayTimer.title }
        </Typography>
        { subTimers }
        {
          this.state.addSubTimer ?
            <AddSubTimerForm newSubTimer={ newSubTimer } displayTimerId={displayTimer.id} /> :
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

export default CurrentTimer
