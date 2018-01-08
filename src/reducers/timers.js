import { DISPLAY_SINGLE_TIMER, SUBTRACT_ONE_SECOND } from '../constants'
import data from '../data/data'

export default function timers(state=data, action) {
  switch (action.type) {
    case DISPLAY_SINGLE_TIMER:
      return state.map(t => {
        t.isDisplayed = t.id === action.displayTimerId
        return t
      })

    case SUBTRACT_ONE_SECOND:
      return state.map(displayTimer => {
        if (displayTimer.id === action.displayTimerId) {
          displayTimer.subTimers.map(subTimer => {
            if (subTimer.id === action.subTimerId) {
              subTimer.countDown -= 1
            }
            return subTimer
          })
        }
        return displayTimer
      })

    default:
      return state
  }
}
