import React, {Component} from 'react'
import Typography from 'material-ui/Typography'

import SubTimer from './SubTimer'

class CurrentTimer extends Component {
  render() {
    const { displayTimer, rotateSubTimer } = this.props
    const subTimers = displayTimer.subTimers.map(timer => (
      <SubTimer
        displayTimerId={ displayTimer.id }
        timer={ timer }
        key={ 'subTimer-' + timer.id }
        rotateSubTimer={ rotateSubTimer }
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
