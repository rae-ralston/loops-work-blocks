import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Menu from 'material-ui-icons/Menu'

import NavDrawer from '../components/NavDrawer'
import displaySingleTimer from '../actions/displaySingleTimer'
import newDisplayTimer from '../actions/newDisplayTimer'

class NavContainer extends Component {
  state = {
    open: false
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  displayTimer = (id) => this.props.displaySingleTimer(id)

  newDisplayTimer = (title) => this.props.newDisplayTimer(title)

  render() {
    const { timerList, newDisplayTimer } = this.props
    console.log("!!", this.props)
    return (
      <div>
        <Menu onClick={ this.toggleDrawer } />
        <NavDrawer
          isDrawerOpen={ this.state.open }
          timerList={ timerList }
          displayTimer={ this.displayTimer }
          toggleDrawer={ this.toggleDrawer }
          newDisplayTimer={ newDisplayTimer }
        />
      </div>
    )
  }
}

NavContainer.propTypes = {
  timerList: PropTypes.arrayOf(PropTypes.object),
  displaySingleTimer: PropTypes.func,
  newDisplayTimer: PropTypes.func,
}
export default NavContainer

// const mapStateToProps = state => {
//   console.log('nav container: ', state)
//   return ({ timerList: state })
// }
//
// export default connect(mapStateToProps, {
//   displaySingleTimer,
//   newDisplayTimer,
// })(NavContainer)
