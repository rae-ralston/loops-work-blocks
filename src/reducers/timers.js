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
      return state.map(t => {
        t.isDisplayed = t.id === action.displayTimerId
        return t
      })

    case ROTATE_SUB_TIMER:
      console.log('in rotateSubTimer reducer')
      return state

    default:
      return state
  }
}

// return state.map(displayTimer => {
//   if (displayTimer.id === action.displayTimerId) {
//     displayTimer.subTimers.map((subTimer, i) => {
//       if (subTimer.id === action.subTimerId) {
//         subTimer.isCurrent = false
//         displayTimer.subTimers[i + 1].isCurrent = true
//       }
//       return subTimer
//     })
//   }
//   return displayTimer
// })
