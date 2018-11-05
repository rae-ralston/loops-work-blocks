import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import AddIcon from 'material-ui-icons/Add'
import EditIcon from 'material-ui-icons/Edit'

import AddSubTimerForm from './AddSubTimerForm'
import SubTimer from './SubTimer'

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

  handleChange = (event) => this.setState({ displayTitle: event.target.value })

  handleAddSubTimer = (title, totalTime) => {
    const { newSubTimer, displayTimer } = this.props
    newSubTimer(displayTimer.id, title, totalTime)
    this.toggleAddSubTimer()
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const { updateDisplayTimerTitle, displayTimer} = this.props
      this.toggleEditingDisplayTitle()
      updateDisplayTimerTitle(displayTimer.id, this.state.displayTitle)
    }
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
          {
            this.state.editingDisplayTitle ?
            <TextField
              required
              id='display-edit-title'
              value={ this.state.displayTitle }
              onChange={ (e) => this.handleChange(e) }
              onKeyPress={ (e) => this.handleKeyPress(e) }
            /> :
            this.state.displayTitle
          }
          <EditIcon onClick={ () => this.toggleEditingDisplayTitle() } />
        </Typography>
        <Typography type='caption' align='center' gutterBottom>
          { displayTimer.loopsMade + " loops made." }
        </Typography>
        { this.createSubTimers(displayTimer) }
        {
          this.state.addSubTimer ?
            <AddSubTimerForm handleAddSubTimer={ this.handleAddSubTimer } /> :
            <Button
              mini
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
}
