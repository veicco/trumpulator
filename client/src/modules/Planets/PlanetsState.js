import {CALL_API} from 'redux-api-middleware'

// Initial state
const initialState = {
  isFetching: false,
  error: null,
  data: null
}

// Actions
export const REQUEST_PLANETS = 'People/REQUEST_PLANETS'
export const REQUEST_PLANETS_SUCCESS = 'People/REQUEST_PLANETS_SUCCESS'
export const REQUEST_PLANETS_FAILURE = 'People/REQUEST_PLANETS_FAILURE'

export const fetchPlanets = () => {
  return {
    [CALL_API]: {
      endpoint: 'https://swapi.co/api/planets/',
      method: 'get',
      types: [REQUEST_PLANETS, REQUEST_PLANETS_SUCCESS, REQUEST_PLANETS_FAILURE]
    }
  }
}

// Reducer
export const PlanetsStateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload
      }
    case REQUEST_PLANETS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
