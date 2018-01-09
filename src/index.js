import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
// import timers from './reducers/timers'

import {
  DISPLAY_SINGLE_TIMER,
  ROTATE_SUB_TIMER,
 } from './constants'
import data from './data/data'

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

export function timers(state=data, action) {
  console.log('IN REDUCER')

  switch (action.type) {

    case DISPLAY_SINGLE_TIMER:
      console.log('in reducer display single timer')
      return state.map(t => {
        t.isDisplayed = t.id === action.displayTimerId
        return t
      })

    case ROTATE_SUB_TIMER:
      console.log('in rotateSubTimer reducer')
      return state

    default:
      return state
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
