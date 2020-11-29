import { createStore, compose, applyMiddleware } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import timers from "./store/reducers/timers";

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  timers,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
