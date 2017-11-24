import {CALL_API} from 'redux-api-middleware'

// Initial state
const initialState = {
  isFetching: false,
  error: null,
  data: null
}

// Actions
export const REQUEST_PEOPLE = 'People/REQUEST_PEOPLE'
export const REQUEST_PEOPLE_SUCCESS = 'People/REQUEST_PEOPLE_SUCCESS'
export const REQUEST_PEOPLE_FAILURE = 'People/REQUEST_PEOPLE_FAILURE'

export const fetchPeople = () => {
  return {
    [CALL_API]: {
      endpoint: 'https://swapi.co/api/people/',
      method: 'get',
      types: [REQUEST_PEOPLE, REQUEST_PEOPLE_SUCCESS, REQUEST_PEOPLE_FAILURE]
    }
  }
}

// Reducer
export const PeopleStateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_PEOPLE:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case REQUEST_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload
      }
    case REQUEST_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
