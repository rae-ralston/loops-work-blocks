import { NEW_SUB_TIMER } from '../constants'

export default function newSubTimer(displayTimerId, title, totalTime) {
  return {
    type: NEW_SUB_TIMER,
    displayTimerId,
    title,
    totalTime
  }
}
