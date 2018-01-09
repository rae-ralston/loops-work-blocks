import React, {Component} from 'react'
import {connect} from 'react-redux'
import Menu from 'material-ui-icons/Menu'

import NavDrawer from '../components/NavDrawer'
// import displaySingleTimer from '../actions/displaySingleTimer'
import {displaySingleTimer} from '../index'

class NavContainer extends Component {
  state = {
    open: false
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })
  displayTimer = (id) => this.props.displaySingleTimer(id)

  render() {
    console.log('))))', this.props)
    return (
      <div>
        <Menu onClick={ this.toggleDrawer } />
        <NavDrawer
          isDrawerOpen={ this.state.open }
          timerList={ this.props.timerList }
          displayTimer={ this.displayTimer }
          toggleDrawer={ this.toggleDrawer }
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { timerList: state }
}

export default connect(mapStateToProps, { displaySingleTimer })(NavContainer)
