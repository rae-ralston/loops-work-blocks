import {
  DISPLAY_SINGLE_TIMER,
  ROTATE_SUB_TIMER,
 } from '../constants'
import data from '../data/data'

export default function timers(state=data, action) {
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
      return state.map(displayTimer => {
        if (displayTimer.id === action.displayTimerId) {
          return reduceRotateSubTimer(displayTimer, action)
        }
        return displayTimer
      })

    default:
      return state
  }
}

function reduceRotateSubTimer(displayTimerArray, action) {
  let nextIndex

  displayTimerArray.subTimers = displayTimerArray.subTimers.map(subTimer => {
    console.log(subTimer.id === action.subTimerId)
    if (subTimer.id === action.subTimerId) {
      nextIndex = subTimer.index + 1
      return { ...subTimer, isCurrent: false }

    } else if (subTimer.index === nextIndex) {
      return { ...subTimer, isCurrent: true }

    } else {
      // console.log('00',subTimer)
      return subTimer
    }
    // if (i === array.length - 1) {
    //   const firstTimer = array[0]
    //   console.log(firstTimer)
    // }
  })
  // console.log('arrgh', whatever)
  return displayTimerArray
}
