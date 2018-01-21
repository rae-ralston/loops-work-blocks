import { connect } from 'react-redux'
import NavDrawer from '../components/NavDrawer'
import displaySingleTimer from '../actions/displaySingleTimer'
import newDisplayTimer from '../actions/newDisplayTimer'

const mapStateToProps = (state) => {
  console.log('in nav mapStateToProps')
  // let newState = state.map(displayTimer => {
  //   delete displayTimer.loopsMade
  //   delete displayTimer.subTimers
  //   return displayTimer
  // })
  return { timerList: state }
}

export default connect(mapStateToProps, {
  displaySingleTimer,
  newDisplayTimer,
})(NavDrawer)
