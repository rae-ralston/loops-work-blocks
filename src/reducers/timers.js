import {
  DISPLAY_SINGLE_TIMER,
  ROTATE_SUB_TIMER,
 } from '../constants'
import data from '../data/data'

export function timers(state=data, action) {
  console.log('IN REDUCER')

  switch (action.type) {

    case DISPLAY_SINGLE_TIMER:
      console.log('in reducer display single timer')
      return state.map(displayTimer => {
        return {
          ...displayTimer,
          isDisplayed: displayTimer.id === action.displayTimerId
        }
      })

    case ROTATE_SUB_TIMER:
      console.log('in rotateSubTimer reducer')
      return state.map(displayTimer => {
        if (displayTimer.id === action.displayTimerId) {
          let nextIndex
          displayTimer.subTimers.map((subTimer, i, collection) => {
            if (subTimer.id === action.subTimerId) {
              nextIndex = subTimer.index + 1
              if(nextIndex > collection.length) {
                nextIndex = 0
              }
              return {
                ...subTimer,
                isCurrent: false,
              }
            }
            if (subTimer.index === nextIndex) {
              return {
                ...subTimer,
                isCurrent: true,10
              }
            }
            if (i === collection.length - 1) {
              return {
                subTimer,
                isCurrent: true,
              }
            }
            // displayTimer.subTimers[i + 1].isCurrent = true
            return subTimer
          })
        }
        return displayTimer
      })
      return state

    default:
      return state
  }
}
