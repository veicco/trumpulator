import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import {apiMiddleware} from 'redux-api-middleware'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from './reducer'

const loggerMiddleware = createLogger()
export const history = createHistory()


let middlewares = [
  routerMiddleware(history),
  apiMiddleware
]

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, loggerMiddleware]
}

let store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

export default store
