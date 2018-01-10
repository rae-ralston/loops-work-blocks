import {
  DISPLAY_SINGLE_TIMER,
  ROTATE_SUB_TIMER,
 } from '../constants'
import data from '../data/data'

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
          // TODO: add direction
          return reduceRotateSubTimer(displayTimer, action)
        }
        return displayTimer
      })

    default:
      return state
  }
}

function reduceRotateSubTimer(displayTimerArray, action) {
  let nextIndex, temp, onLast = false

  displayTimerArray.subTimers = displayTimerArray.subTimers
    .map((subTimer, i, array) => {
      if (subTimer.id === action.subTimerId) {
        nextIndex = subTimer.index + 1
        return { ...subTimer, isCurrent: false }
      }

      if (subTimer.index === nextIndex) {
        return { ...subTimer, isCurrent: true }
      }

      console.log('are we on the last? ', array.length - 1 <= subTimer.index)
      if (array.length - 1 <= subTimer.index) {
        temp = { ...array[0], isCurrent: true }
        onLast = true
      }

      return subTimer
    })

  // take handle last to first turn over outside of loop
  console.log(onLast, 'nextIndex', nextIndex)
  if (onLast) {
    onLast = false
    displayTimerArray.subTimers[0] = temp
  } else {
    displayTimerArray.subTimers[0] = { ...displayTimerArray.subTimers[0], isCurrent: false }
  }
  // displayTimerArray.subTimers[0] = onLast ? temp :
  // if (displayTimerArray.subTimers[1].isCurrent) {
  //   displayTimerArray.subTimers[0]
  // }
  // console.log("===",displayTimerArray.subTimers)
  return displayTimerArray
}
