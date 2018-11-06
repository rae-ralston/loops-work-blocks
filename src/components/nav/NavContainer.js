import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Nav from './Nav'
import displaySingleTimer from '../../store/actions/displaySingleTimer'
import newDisplayTimer from '../../store/actions/newDisplayTimer'

const mapStateToProps = (state) => ({ timerList: state })

const mapDispatchToProps = (dispatch) => bindActionCreators({
  displaySingleTimer,
  newDisplayTimer,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Nav)
