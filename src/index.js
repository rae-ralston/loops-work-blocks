import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './App'
import timers from './reducers/timers'

let store = createStore(timers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)

registerServiceWorker()
