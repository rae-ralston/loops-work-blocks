import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import AddIcon from 'material-ui-icons/Add'
import EditIcon from 'material-ui-icons/Edit'

import AddTimer from '../add-timer/AddTimer'
import SubTimer from './sub-timer/SubTimer'

export default class CurrentTimer extends Component {
  state = {
    isTicking: false,
    addSubTimer: false,
    editingDisplayTitle: false,
    displayTitle: "",
  }

  componentDidMount() {
    this.setState({ displayTitle: this.props.displayTimer.title})
  }

  static getDerivedStateFromProps(newProps) {
    this.setState({ displayTitle: newProps.displayTimer.title})
  }

  toggleTicking = () => this.setState({ isTicking: !this.state.isTicking })

  toggleAddSubTimer = () => this.setState({ addSubTimer: !this.state.addSubTimer})

  toggleEditingDisplayTitle = () =>
    this.setState({ editingDisplayTitle: !this.state.editingDisplayTitle})

  handleChange = event => this.setState({ displayTitle: event.target.value })

  handleAddSubTimer = (title, totalTime) => {
    const { newSubTimer, displayTimer } = this.props
    newSubTimer(displayTimer.id, title, totalTime)
    this.toggleAddSubTimer()
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      const { updateDisplayTimerTitle, displayTimer} = this.props
      this.toggleEditingDisplayTitle()
      updateDisplayTimerTitle(displayTimer.id, this.state.displayTitle)
    }
  }

  checkIfLastSubTimer = timer => {
    const { displayTimer, incrementLoopsMade } = this.props
    if (displayTimer.subTimers.length === timer.index) {
      incrementLoopsMade(displayTimer.id)
    }
  }

  createSubTimers = displayTimer => {
    const { moveSubTimerOne, rotateSubTimer } = this.props
    return displayTimer.subTimers
      .map(timer => (
        <SubTimer
          displayTimerId={displayTimer.id}
          timer={timer}
          key={'st-' + displayTimer.id + timer.id}
          rotateSubTimer={rotateSubTimer}
          isTicking={this.state.isTicking}
          toggleTicking={this.toggleTicking}
          checkIfLastSubTimer={this.checkIfLastSubTimer}
          moveSubTimerOne={moveSubTimerOne}
        />
      )
    )
  }

  render() {
    const { displayTimer } = this.props
    const { toggleAddSubTimer, toggleEditingDisplayTitle } = this
    const { editingDisplayTitle, displayTitle } = this.state

    return (
      <div>
        <Typography type='display3' align='center' gutterBottom>
          {editingDisplayTitle ?
            <TextField
              required
              id='display-edit-title'
              value={displayTitle}
              onChange={e => this.handleChange(e)}
              onKeyPress={e => this.handleKeyPress(e)} /> :
            displayTitle
          }
          <EditIcon onClick={toggleEditingDisplayTitle} />
        </Typography>
        <Typography type='caption' align='center' gutterBottom>
          {`${displayTimer.loopsMade} loops made.`}
        </Typography>
        {this.createSubTimers(displayTimer)}
        {this.state.addSubTimer ?
          <AddTimer type="sub" handleAddSubTimer={ this.handleAddSubTimer } /> :
          <Button color="primary" aria-label="add" onClick={toggleAddSubTimer}>
            <AddIcon />
          </Button>
        }
      </div>
    )
  }
}

CurrentTimer.propTypes = {
  displayTimer: PropTypes.shape({
    id: PropTypes.number,
    isDisplayed: PropTypes.bool,
    loopsMade: PropTypes.number,
    subTimers: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
  }),
  incrementLoopsMade: PropTypes.func,
  newSubTimer: PropTypes.func,
  rotateSubTimer: PropTypes.func,
  updateisplayTimerTitle: PropTypes.func,
  moveSubTimerOne: PropTypes.func,
}
