import connect from 'react-redux'
import NavContainer from './NavContainer'
import displaySingleTimer from '../actions/displaySingleTimer'
import newDisplayTimer from '../actions/newDisplayTimer'

const mapStateToProps = (state) => {
  let newState = state.map(displayTimer => {
    delete displayTimer.loopsMade
    delete displayTimer.subTimers
    return displayTimer
  })
  return {
    timerList: newState,
  }
}

export default connect(mapStateToProps, {
  displaySingleTimer,
  newDisplayTimer,
})(NavContainer)
