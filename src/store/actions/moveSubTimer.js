import { MOVE_SUB_TIMER_ONE } from '../constants'

export function moveSubTimerOne(payload) {
  const { id, index, direction, displayTimerId } = payload

  return {
    type: MOVE_SUB_TIMER_ONE,
    direction,
    displayTimerId,
    id,
    index,
  }
}

// TODO move subtimer arbritrary positions