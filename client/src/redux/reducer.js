import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {PeopleStateReducer} from '../modules/People/PeopleState'
import {PlanetsStateReducer} from '../modules/Planets/PlanetsState'

const reducer = combineReducers({
  routing: routerReducer,
  people: PeopleStateReducer,
  planets: PlanetsStateReducer
})

export default reducer
