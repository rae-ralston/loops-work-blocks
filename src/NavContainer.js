import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavDrawer from './NavDrawer'
import Menu from 'material-ui-icons/Menu'

class NavContainer extends Component {
  state = {
    open: true
  }

  toggleDrawer = () => {
    this.setState({open: !this.state.open})
  }
  
  render() {
    return (
      <div>
        <Menu onClick={this.toggleDrawer} />
        <NavDrawer
          isDrawerOpen={this.state.open}
          timerList={this.props.timerList}
          toggleDrawer={this.toggleDrawer}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timerList: state
  }
}

export default connect(mapStateToProps, null)(NavContainer)
