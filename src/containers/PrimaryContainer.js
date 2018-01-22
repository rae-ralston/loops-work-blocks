import { connect } from 'react-redux'

import rotateSubTimer from '../actions/rotateSubTimer'
import newSubTimer from '../actions/newSubTimer'
import incrementLoopsMade from '../actions/incrementLoopsMade'
import updateDisplayTimerTitle from '../actions/updateDisplayTimerTitle'

import Primary from '../components/Primary'

const mapStateToProps = state => ({ timerList: state })

export default connect(mapStateToProps, {
  rotateSubTimer,
  newSubTimer,
  incrementLoopsMade,
  updateDisplayTimerTitle,
})(Primary)
