import { connect } from 'react-redux'

import incrementLoopsMade from '../../store/actions/incrementLoopsMade'
import newSubTimer from '../../store/actions/newSubTimer'
import rotateSubTimer from '../../store/actions/rotateSubTimer'
import updateDisplayTimerTitle from '../../store/actions/updateDisplayTimerTitle'
import { moveSubTimerOne } from '../../store/actions/moveSubTimer'

import Primary from './Primary'

const mapStateToProps = state => ({ timerList: state })

export default connect(mapStateToProps, {
  incrementLoopsMade,
  newSubTimer,
  rotateSubTimer,
  updateDisplayTimerTitle,
  moveSubTimerOne,
})(Primary)
