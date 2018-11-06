import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from 'material-ui-icons/Menu'

import NavContainer from './NavContainer'

class NavDrawer extends Component {
  state = { open: false }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>
        <Menu onClick={ this.toggleDrawer } />
        <NavContainer
          isDrawerOpen={ this.state.open }
          toggleDrawer= { this.toggleDrawer }
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

export default NavDrawer
