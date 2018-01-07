import { SUBTRACT_ONE_SECOND } from '../constants'

export default function subtractOneSecond(displayTimerId, subTimerId) {
  return {
    type: SUBTRACT_ONE_SECOND,
    displayTimerId,
    subTimerId,
  }
}
