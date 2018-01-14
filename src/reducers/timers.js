import {
  DISPLAY_SINGLE_TIMER,
  ROTATE_SUB_TIMER,
  NEW_DISPLAY_TIMER,
  NEW_SUB_TIMER
 } from '../constants'
import data from '../data/data'
import { createDisplayTimer, createSubTimer } from '../data/helpers'

export default function timers(state=data, action) {
  console.log('hit reducer', action)
  switch (action.type) {

    case DISPLAY_SINGLE_TIMER:
      return state.map(displayTimer => {
        return {
          ...displayTimer,
          isDisplayed: displayTimer.id === action.displayTimerId,
        }
      })

    case ROTATE_SUB_TIMER:
      return state.map(displayTimer => {
        if (displayTimer.id === action.displayTimerId) {
          return _reduceRotateSubTimer(displayTimer, action)
        }
        return displayTimer
      })

    case NEW_DISPLAY_TIMER:
      let newSubTimer = createDisplayTimer(action.title)
      return toggleDisplayTimerOn([...state, newSubTimer], newSubTimer.id)

    case NEW_SUB_TIMER:
      console.log('reducer: in new sub timer', action)
      return state.map( displayTimer => {
        if (displayTimer.id === action.displayTimerId) {
          let index = displayTimer.subTimers.length
          let newDisplayTimer = createSubTimer(action.totalTime, false, action.title, index)
          return {
            ...displayTimer,
            subTimers: [...displayTimer.subTimers, newDisplayTimer]
          }
        }
        return displayTimer
      })
      // return state

    default:
      return state
  }
}

function toggleDisplayTimerOn(state, id) {
  return state.map(displayTimer => {
    displayTimer.isDisplayed = displayTimer.id === id
    return displayTimer
  })
}

function _reduceRotateSubTimer(displayTimerArray, action) {
  let nextIndex, temp, atEnd = false
  let { direction } = action
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


function _turnOverPrevious(subTimers, index) {
  if (index <= 0) index = subTimers.length

  return subTimers.map(timer => {
    if (timer.index === index) return _updateIsCurrent(timer, true)
    return timer
  })
}

function _updateIsCurrent(timer, status) {
  return {...timer, isCurrent: status}
}
