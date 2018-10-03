import { createStore, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import createSageMiddleware from 'redux-saga'
import sagas from 'sagas'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'

const sagaMiddleware = createSageMiddleware()
const middleware = [routerMiddleware, sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const history = createBrowserHistory()
export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(...middleware))
)

sagaMiddleware.run(sagas)
