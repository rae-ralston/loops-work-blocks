import {
  DISPLAY_SINGLE_TIMER,
  ROTATE_SUB_TIMER,
  NEW_DISPLAY_TIMER,
  NEW_SUB_TIMER,
  INCREMENT_LOOPS_MADE,
  UPDATE_DISPLAY_TIMER_TITLE,
  MOVE_SUB_TIMER_ONE,
} from '../constants'
import { _toggleDisplayTimerOn, _reduceRotateSubTimer } from './helpers'

import data from '../../lib/data'
import { createDisplayTimer, createSubTimer } from '../../lib/helpers'

export default function timers(state=data, action) {
  switch (action.type) {
    case DISPLAY_SINGLE_TIMER:
      return state.map(displayTimer => {
        return {
          ...displayTimer,
          isDisplayed: displayTimer.id === action.displayTimerId,
        }
      })

    case ROTATE_SUB_TIMER:
      return state.map(displayTimer => {
        if (displayTimer.id === action.displayTimerId) {
          return _reduceRotateSubTimer(displayTimer, action)
        }
        return displayTimer
      })

    case NEW_DISPLAY_TIMER:
      let newSubTimer = createDisplayTimer(action.title)
      return _toggleDisplayTimerOn([...state, newSubTimer], newSubTimer.id)

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
      return state.map( displayTimer => {
        if (displayTimer.id === action.displayTimerId) {
          return {
            ...displayTimer,
            loopsMade: displayTimer.loopsMade + 1
          }
        }
        return displayTimer
      })

    case UPDATE_DISPLAY_TIMER_TITLE:
      return state.map( displayTimer => {
        if (displayTimer.id === action.displayTimerId) {
          return {
            ...displayTimer,
            title: action.title
          }
        }
        return displayTimer
      })

    case MOVE_SUB_TIMER_ONE: 
      console.log('moving a timer', action.direction) 
      console.log(state)
      return state

    default:
      return state
  }
}
