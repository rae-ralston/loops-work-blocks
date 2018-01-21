import connect from 'react-redux'

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
