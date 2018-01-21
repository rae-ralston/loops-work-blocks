import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Nav from '../components/Nav'
import displaySingleTimer from '../actions/displaySingleTimer'
import newDisplayTimer from '../actions/newDisplayTimer'

const mapStateToProps = (state) => ({ timerList: state })

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    displaySingleTimer,
    newDisplayTimer
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
