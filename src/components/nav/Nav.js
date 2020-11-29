import React, { useState } from 'react'
import PropTypes from 'prop-types'
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

  // const createTimerList = timers => timers.map(timer => (
  //   <ListItem button
  //     key={timer.id}
  //     onClick={() => displaySingleTimer(timer.id)}>
  //     <ListItemText primary={timer.title} />
  //   </ListItem>
  // ))

  const toggleNewTimerModal = () => setAddDisplayTimer(!addDisplayTimer)

  const toggleTimerDropDown = () => setIsTimerDropDownOpen(!isTimerDropDownOpen)

  const handleSubmit = (e, title) => {
    e.preventDefault()
    newDisplayTimer(title)
    toggleDrawer()
    toggleNewTimerModal()
  }

  return (<div> nav here </div>
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
