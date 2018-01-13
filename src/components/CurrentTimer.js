import React, {Component} from 'react'
import Typography from 'material-ui/Typography'

import SubTimer from './SubTimer'

class CurrentTimer extends Component {
  state = {
    isTicking: false
  }

  toggleTicking = () => this.setState({ isTicking: !this.state.isTicking })

  render() {
    const { displayTimer, rotateSubTimer } = this.props
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
    return (
      <div>
        <Typography type='display3' align='center' gutterBottom>
          { displayTimer.title }
        </Typography>
        { subTimers }
      </div>
    )
  }
}

export default CurrentTimer
