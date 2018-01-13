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
    drawerOpen: true,
    modalOpen: false,
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

  toggleNewTimerModal = () => this.setState({ modalOpen: !this.state.modalOpen})
  toggleNavDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })
  handleChange = (e) => this.setState({ newTimerTitle: e.target.value })
  // handleBlur = (e) => this.toggleNewTimerModal()

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newDisplayTimer(this.state.newTimerTitle)
    this.toggleNewTimerModal()
  }

  render() {
    const { drawerOpen } = this.state
    const {
      isDrawerOpen,
      timerList,
      toggleDrawer,
    } = this.props
    // console.log('^^^', this.props)
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
                this.state.modalOpen ?
                  <form className="commentForm" onSubmit={ (e) => this.handleSubmit(e) }>
                    <input
                      type="text"
                      placeholder="Title"
                      value={ this.state.newTimerTitle }
                      onChange={ (e) => this.handleChange(e) }
                    />
                    <input type="submit" value="Post" />
                  </form> :
                  <ListItem button onClick={ () => this.toggleNewTimerModal() }>
                    <ListItemText primary="new Timer" />
                  </ListItem>
              }
              {
                this.timerList(timerList)
              }
            </List>
          </Collapse>
        </List>
      </Drawer>
    )
  }
}

export default NavDrawer
