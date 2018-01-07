import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './App'
import data from './data'

const DISPLAY_ALL_TIMERS = 'DISPLAY_ALL_TIMERS'

export function displayAllTimers() {
  return {
    type: DISPLAY_ALL_TIMERS
  }
}

function displayTimers(state=data, action) {
  switch (action.type) {
    case DISPLAY_ALL_TIMERS:
      console.log('in reducer': state)
      return state
    default:
      return state
  }
}

let store = createStore(displayTimers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker()
