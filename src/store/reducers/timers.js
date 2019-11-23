import {
  DISPLAY_SINGLE_TIMER,
  ROTATE_SUB_TIMER,
  NEW_DISPLAY_TIMER,
  NEW_SUB_TIMER,
  INCREMENT_LOOPS_MADE,
  UPDATE_DISPLAY_TIMER_TITLE,
  MOVE_SUB_TIMER_ONE,
} from '../constants'
import { isTimerDisplayed, handleRotateSubTimer } from './helpers'

import data from '../../lib/data'
import { createDisplayTimer, createSubTimer } from '../../lib/helpers'
// import { moveSubTimerOne } from '../actions/moveSubTimer';

export default function timers(state=data, action) {
  switch (action.type) {
    case DISPLAY_SINGLE_TIMER:
      return state.map(displayTimer => ({
        ...displayTimer,
        isDisplayed: displayTimer.id === action.displayTimerId,
      }))

    case ROTATE_SUB_TIMER:
      return state.map(displayTimer => displayTimer.id === action.displayTimerId 
        ? handleRotateSubTimer(displayTimer, action) 
        : displayTimer
      )

    case NEW_DISPLAY_TIMER:
      let newSubTimer = createDisplayTimer(action.title)
      return isTimerDisplayed([...state, newSubTimer], newSubTimer.id)

    case NEW_SUB_TIMER:
      return state.map( displayTimer => {
        if (displayTimer.id === action.displayTimerId) {
          let index = displayTimer.subTimers.length + 1
          let isCurrent = displayTimer.subTimers.length === 0
          let newDisplayTimer = createSubTimer(action.totalTime, isCurrent, action.title, index)
          return {
            ...displayTimer,
            subTimers: [...displayTimer.subTimers, newDisplayTimer]
          }
        }
        return displayTimer
      })

    case INCREMENT_LOOPS_MADE:
      return state.map( displayTimer => displayTimer.id === action.displayTimerId 
        ? { ...displayTimer, loopsMade: displayTimer.loopsMade + 1 } 
        : displayTimer
      )

    case UPDATE_DISPLAY_TIMER_TITLE:
      return state.map( displayTimer => {
        return displayTimer.id === action.displayTimerId ? 
          { ...displayTimer, title: action.title } : displayTimer
      })

    case MOVE_SUB_TIMER_ONE: 
      return state.map( displayTimer => {
        return displayTimer.id === action.displayTimerId ? 
          moveSubTimerOne(displayTimer, action) : displayTimer
      })

    default:
      return state
  }
}

const moveSubTimerOne = (displayTimer, action) => {
  let tempSubTimers = displayTimer.subTimers

  console.log(tempSubTimers, action)
  // TODO write algo to rotate scoot timers up and down
  // TODO2 add looping to the timers, so the top goes to btm and the btm goes to top.
  displayTimer.subTimers = tempSubTimers
  return displayTimer
}
