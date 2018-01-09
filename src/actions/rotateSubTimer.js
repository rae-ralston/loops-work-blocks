import { ROTATE_SUB_TIMER } from '../constants'

export default function rotateSubTimer(displayTimerId, subTimerId) {
  console.log('action creator: rotateSubTimer', displayTimerId, subTimerId)
  return {
    type: ROTATE_SUB_TIMER,
    displayTimerId,
    subTimerId,
  }
}
