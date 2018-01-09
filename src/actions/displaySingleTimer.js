import { DISPLAY_SINGLE_TIMER } from '../constants'

export default function displaySingleTimer(displayTimerId) {
  console.log('action creator: displaySingleTimer')
  return {
    type: DISPLAY_SINGLE_TIMER,
    displayTimerId,
  }
}
