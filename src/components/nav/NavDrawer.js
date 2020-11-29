import React, { useState } from 'react'
import NavContainer from './NavContainer'

export const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen(!isOpen)

  return (
    <div>
      {/* <Menu onClick={toggleDrawer} /> */}
      <NavContainer
        isDrawerOpen={isOpen}
        toggleDrawer= {toggleDrawer}
      />
    </div>
  )
}
