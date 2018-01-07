import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './App'
import data from './data'

const DISPLAY_SINGLE_TIMER = 'DISPLAY_SINGLE_TIMER'

export function displaySingleTimer(id) {
  return {
    type: DISPLAY_SINGLE_TIMER,
    id
  }
}

function displayTimers(state=data, action) {
  switch (action.type) {
    case DISPLAY_SINGLE_TIMER:
      return state.map(t => {
        t.isDisplayed = t.id === action.id
        return t
      })
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
