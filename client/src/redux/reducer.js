import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {HomeStateReducer} from '../modules/Home/HomeState'

const reducer = combineReducers({
  routing: routerReducer,
  home: HomeStateReducer
})

export default reducer
