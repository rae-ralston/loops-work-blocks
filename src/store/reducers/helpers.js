export function _toggleDisplayTimerOn(state, id) {
  return state.map(displayTimer => {
    displayTimer.isDisplayed = displayTimer.id === id
    return displayTimer
  })
}

export function _reduceRotateSubTimer(displayTimerArray, action) {
  let { direction } = action
  let nextIndex
    , temp
    , atEnd = false

  displayTimerArray.subTimers = displayTimerArray.subTimers
    .map((subTimer, i, array) => {
      let { index, id } = subTimer
      if (id === action.subTimerId) {
        nextIndex = direction === 'prev' ? index - 1 : index + 1
        return _updateIsCurrent(subTimer, false)
      }

      if (index === nextIndex && direction === 'next') {
        return _updateIsCurrent(subTimer, true)
      }

      return subTimer
    })
  let { subTimers } = displayTimerArray
  if (direction === 'next') {
    if (nextIndex > subTimers.length) {
      temp = _updateIsCurrent(subTimers[0], true)
      atEnd = true
    }

    displayTimerArray.subTimers[0] = atEnd ? temp : { ...subTimers[0], isCurrent: false }
  }
  if (direction === 'prev') {
    displayTimerArray.subTimers = _turnOverPrevious(subTimers, nextIndex, direction)
  }
  atEnd = false
  return displayTimerArray
}

export function _turnOverPrevious(subTimers, index) {
  if (index <= 0) index = subTimers.length

  return subTimers.map(timer => {
    if (timer.index === index) return _updateIsCurrent(timer, true)
    return timer
  })
}

export function _updateIsCurrent(timer, status) {
  return {...timer, isCurrent: status}
}
