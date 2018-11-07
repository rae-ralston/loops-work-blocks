import { MOVE_SUB_TIMER_ONE } from '../constants'

export function moveSubTimerOne(payload) {
  const { id, index, direction } = payload

  return {
    type: MOVE_SUB_TIMER_ONE,
    direction,
    id,
    index,
  }
}

// TODO move subtimer arbritrary positions