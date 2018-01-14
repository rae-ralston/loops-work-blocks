import React, { Component } from 'react'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import Collapse from 'material-ui/transitions/Collapse'
import AddDisplayTimerForm from './AddDisplayTimerForm'

import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'

export default class NavDrawer extends Component {
  state = {
    drawerOpen: true,
    addDisplayTimer: false,
    newTimerTitle: "",
  }

  timerList = (timers) => timers.map(timer => (
    <ListItem button
      key={ timer.id }
      onClick={ () => this.props.displayTimer(timer.id) }
    >
      <ListItemText primary={ timer.title } />
    </ListItem>
  ))

  toggleNewTimerModal = () => this.setState({ addDisplayTimer: !this.state.addDisplayTimer})
  toggleNavDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })

  handleSubmit = (event, title) => {
    event.preventDefault()
    this.props.newDisplayTimer(title)
    this.toggleNewTimerModal()
  }

  render() {
    const { drawerOpen } = this.state
    const {
      isDrawerOpen,
      timerList,
      toggleDrawer,
    } = this.props

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
          <ListItem button onClick={ this.toggleNavDrawer }>
            <ListItemText primary="Timers" />
            { drawerOpen ? <ExpandLess /> : <ExpandMore /> }
          </ListItem>
          <Collapse
            component="li"
            in={ drawerOpen }
            timeout="auto"
            unmountOnExit
          >
            <List disablePadding>
              {
                this.state.addDisplayTimer ?
                  <AddDisplayTimerForm handleSubmit={ this.handleSubmit } />:
                  <ListItem button onClick={ () => this.toggleNewTimerModal() }>
                    <ListItemText primary="new Timer" />
                  </ListItem>
              }
              { this.timerList(timerList) }
            </List>
          </Collapse>
        </List>
      </Drawer>
    )
  }
}
