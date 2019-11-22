import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Collapse from 'material-ui/transitions/Collapse'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemText } from 'material-ui/List'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import AddTimer from '../add-timer/AddTimer'

export const Nav = ({ 
  displaySingleTimer,
  isDrawerOpen, 
  newDisplayTimer,
  timerList, 
  toggleDrawer,
}) => {
  const [isTimerDropDownOpen, setIsTimerDropDownOpen] = useState(true)
  const [addDisplayTimer, setAddDisplayTimer] = useState(false)

  const createTimerList = timers => timers.map(timer => (
    <ListItem button
      key={timer.id}
      onClick={() => displaySingleTimer(timer.id)}>
      <ListItemText primary={timer.title} />
    </ListItem>
  ))

  const toggleNewTimerModal = () => setAddDisplayTimer(!addDisplayTimer)

  const toggleTimerDropDown = () => setIsTimerDropDownOpen(!isTimerDropDownOpen)

  const handleSubmit = (e, title) => {
    e.preventDefault()
    newDisplayTimer(title)
    toggleDrawer()
    toggleNewTimerModal()
  }

  return (
    <Drawer
      type='persistent'
      anchor='left'
      open={isDrawerOpen}>
      <div>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List>
        <ListItem button onClick={toggleTimerDropDown}>
          <ListItemText primary="Timers" />
          {isTimerDropDownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          component="li"
          in={isTimerDropDownOpen}
          timeout="auto"
          unmountOnExit>
          <List disablePadding>
            {
              addDisplayTimer ?
                <AddTimer type="display" handleSubmit={handleSubmit} />:
                <ListItem button onClick={toggleNewTimerModal}>
                  <ListItemText primary="new Timer" />
                </ListItem>
            }
            {createTimerList(timerList)}
          </List>
        </Collapse>
      </List>
    </Drawer>
  )
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
}
