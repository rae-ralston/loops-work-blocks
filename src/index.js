import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import timers from './reducers/timers'

import {
  DISPLAY_SINGLE_TIMER,
  ROTATE_SUB_TIMER,
 } from './constants'

export function rotateSubTimer(displayTimerId, subTimerId) {
  console.log('action creator: rotateSubTimer', displayTimerId, subTimerId)
  return {
    type: ROTATE_SUB_TIMER,
    displayTimerId,
    subTimerId,
  }
}

export function displaySingleTimer(displayTimerId) {
  console.log('action creator: displaySingleTimer')
  return {
    type: DISPLAY_SINGLE_TIMER,
    displayTimerId,
  }
}



let store = createStore(timers)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker()
