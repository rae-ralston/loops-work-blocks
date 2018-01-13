import React, { Component } from 'react'
import { connect } from 'react-redux'
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
  // newDisplayTimer = (title) => this.props.newDisplayTimer(title)
  // TODO Debug display new timer. This isn't hitting the reducer. There's something
  // I don't understand here bc this is a mistake i've made a couple of times
  // Timer for some more research!

  render() {
    console.log("nav container: ", this.props)

    return (
      <div>
        <Menu onClick={ this.toggleDrawer } />
        <NavDrawer
          isDrawerOpen={ this.state.open }
          timerList={ this.props.timerList }
          displayTimer={ this.displayTimer }
          toggleDrawer={ this.toggleDrawer }
          newDisplayTimer={ this.props.newDisplayTimer }
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ timerList: state })

export default connect(mapStateToProps, {
  displaySingleTimer,
  newDisplayTimer,
})(NavContainer)
