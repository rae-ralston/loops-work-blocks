import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './App'
import data from './data'

const DISPLAY_SINGLE_TIMER = 'DISPLAY_SINGLE_TIMER'
const SUBTRACT_ONE_SECOND = 'SUBTRACT_ONE_SECOND'

export function displaySingleTimer(displayTimerId) {
  return {
    type: DISPLAY_SINGLE_TIMER,
    displayTimerId
  }
}

export function subtractOneSecond(displayTimerId, subTimerId) {
  return {
    type: SUBTRACT_ONE_SECOND,
    displayTimerId,
    subTimerId,
  }
}

function timers(state=data, action) {
  switch (action.type) {
    case DISPLAY_SINGLE_TIMER:
      return state.map(t => {
        t.isDisplayed = t.id === action.displayTimerId
        return t
      })
    case SUBTRACT_ONE_SECOND:
      return state.map(displayTimer => {
        if (displayTimer.id === action.displayTimerId){
          displayTimer.subTimers.map(subTimer => {
            if (subTimer.id === action.subTimerId) {
              subTimer.countDown -= 1
            }
            return subTimer
          })
        }
        return displayTimer
      })
    default:
      return state
  }
}

let store = createStore(timers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker()
