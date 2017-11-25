import {CALL_API} from 'redux-api-middleware'

// Initial state
const initialState = {
  isFetching: false,
  error: null,
  data: {}
}

// Actions
export const REQUEST_HEADLINE = 'People/REQUEST_HEADLINE'
export const REQUEST_HEADLINE_SUCCESS = 'People/REQUEST_HEADLINE_SUCCESS'
export const REQUEST_HEADLINE_FAILURE = 'People/REQUEST_HEADLINE_FAILURE'

export const fetchHeadline = (text) => {
  return {
    [CALL_API]: {
      endpoint: process.env.NODE_ENV === 'production' ? 'http://junction.veikko.it/headline/' : 'http://localhost:9000/headline/',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({text: text}),
      types: [REQUEST_HEADLINE, REQUEST_HEADLINE_SUCCESS, REQUEST_HEADLINE_FAILURE]
    }
  }
}

// Reducer
export const HomeStateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_HEADLINE:
      return {
        ...state,
        isFetching: true,
        error: null,
        data: {}
      }
    case REQUEST_HEADLINE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload
      }
    case REQUEST_HEADLINE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}