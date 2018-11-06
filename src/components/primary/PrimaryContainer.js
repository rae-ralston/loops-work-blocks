import { connect } from 'react-redux'

import rotateSubTimer from '../../store/actions/rotateSubTimer'
import newSubTimer from '../../store/actions/newSubTimer'
import incrementLoopsMade from '../../store/actions/incrementLoopsMade'
import updateDisplayTimerTitle from '../../store/actions/updateDisplayTimerTitle'

import Primary from './Primary'

const mapStateToProps = state => ({ timerList: state })

export default connect(mapStateToProps, {
  rotateSubTimer,
  newSubTimer,
  incrementLoopsMade,
  updateDisplayTimerTitle,
})(Primary)
