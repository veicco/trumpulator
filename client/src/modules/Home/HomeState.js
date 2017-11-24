import {CALL_API} from 'redux-api-middleware'

// Initial state
const initialState = {
  isFetching: false,
  error: null,
  data: null
}

// Actions
export const REQUEST_HEADLINE = 'People/REQUEST_HEADLINE'
export const REQUEST_HEADLINE_SUCCESS = 'People/REQUEST_HEADLINE_SUCCESS'
export const REQUEST_HEADLINE_FAILURE = 'People/REQUEST_HEADLINE_FAILURE'

export const fetchHeadline = () => {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:9000/api-request/',
      method: 'post',
      body: {text: "tony hammainen o pro"},
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
        error: null
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