import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from 'material-ui-icons/Menu'

import NavDrawer from '../components/NavDrawer'
// import { connect } from 'react-redux'
// import displaySingleTimer from '../actions/displaySingleTimer'
// import newDisplayTimer from '../actions/newDisplayTimer'

class NavContainer extends Component {
  state = {
    open: false
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>
        <Menu onClick={ this.toggleDrawer } />
        <NavDrawer
          isDrawerOpen={ this.state.open }
        />
      </div>
    )
  }
}

NavContainer.propTypes = {
  isDrawerOpen: PropTypes.bool,
}

NavContainer.defaultProps = {
  isDrawerOpen: false,
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
