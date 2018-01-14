import { DISPLAY_SINGLE_TIMER } from '../constants'

export default function displaySingleTimer(displayTimerId) {
  return {
    type: DISPLAY_SINGLE_TIMER,
    displayTimerId,
  }
}
