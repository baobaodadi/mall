import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {routerMiddleware, connectRouter} from 'connected-react-router'
import rootReducer from '../reducers'
import App from './App.jsx'
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import '../style/common.css'
import '../style/index.less'

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const middleware = [thunk, sagaMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      ...middleware
    ),
  ),
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);


