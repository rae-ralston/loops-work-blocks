import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Collapse from 'material-ui/transitions/Collapse'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemText } from 'material-ui/List'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

import AddDisplayTimerForm from './AddDisplayTimerForm'

export default class Nav extends Component {
  state = {
    isTimerDropDownOpen: true,
    addDisplayTimer: false,
    newTimerTitle: "",
  }

  timerList = (timers) => timers.map(timer => (
    <ListItem button
      key={ timer.id }
      onClick={ () => this.props.displaySingleTimer(timer.id) }
    >
      <ListItemText primary={ timer.title } />
    </ListItem>
  ))

  toggleNewTimerModal = () =>
    this.setState({ addDisplayTimer: !this.state.addDisplayTimer})

  toggleTimerDropDown = () =>
    this.setState({ isTimerDropDownOpen: !this.state.isTimerDropDownOpen })

  handleSubmit = (event, title) => {
    const { newDisplayTimer, toggleDrawer } = this.props
    event.preventDefault()
    newDisplayTimer(title)
    toggleDrawer()
    this.toggleNewTimerModal()
  }

  render() {
    const { isTimerDropDownOpen } = this.state
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
          <ListItem button onClick={ this.toggleTimerDropDown }>
            <ListItemText primary="Timers" />
            { isTimerDropDownOpen ? <ExpandLess /> : <ExpandMore /> }
          </ListItem>
          <Collapse
            component="li"
            in={ isTimerDropDownOpen }
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

Nav.propTypes = {
  displaySingleTimer: PropTypes.func,
  isDrawerOpen: PropTypes.bool,
  newDisplayTimer: PropTypes.func,
  timerList: PropTypes.array,
  toggleDrawer: PropTypes.func,
}

Nav.defaultProps = {
  isTimerDropDownOpen: true,
  addDisplayTimer: false,
  newTimerTitle: "",
}
