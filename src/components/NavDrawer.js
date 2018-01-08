import React, { Component } from 'react'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import Collapse from 'material-ui/transitions/Collapse'

import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'

class NavDrawer extends Component {
  state = {
    areTimersOpen: false
  }

  timerList = (timers) => timers.map(timer => (
    <ListItem button
      key={ timer.id }
      onClick={ () => this.props.displayTimer(timer.id) }
    >
      <ListItemText primary={ timer.title } />
    </ListItem>
  ))

  toggleTimerList = () => {
    this.setState({ areTimersOpen: !this.state.areTimersOpen })
  }

  render() {
    const { isDrawerOpen, timerList, toggleDrawer } = this.props
    return (
      <Drawer
        type='persistent'
        anchor='left'
        open={ isDrawerOpen }
      >
        <div>
          <IconButton onClick={ toggleDrawer }>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          <ListItem button onClick={ this.toggleTimerList }>
            <ListItemText primary="Timers" />
            { this.state.areTimersOpen ? <ExpandLess /> : <ExpandMore /> }
          </ListItem>
          <Collapse
            component="li"
            in={ this.state.areTimersOpen }
            timeout="auto"
            unmountOnExit
          >
            <List disablePadding>
              { this.timerList(timerList) }
            </List>
          </Collapse>
        </List>
      </Drawer>
    )
  }
}

export default NavDrawer
