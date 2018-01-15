import { UPDATE_DISPLAY_TIMER_TITLE } from '../constants'

export default function updateDisplayTimerTitle(displayTimerId, title) {
  return {
    type: UPDATE_DISPLAY_TIMER_TITLE,
    displayTimerId,
    title,
  }
}
