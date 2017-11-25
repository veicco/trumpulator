import {CALL_API} from 'redux-api-middleware'

// Initial state
const initialState = {
  isFetching: false,
  error: null,
  data: []
}

// Actions
export const REQUEST_IMAGE = 'People/REQUEST_IMAGE'
export const REQUEST_IMAGE_SUCCESS = 'People/REQUEST_IMAGE_SUCCESS'
export const REQUEST_IMAGE_FAILURE = 'People/REQUEST_IMAGE_FAILURE'

export const fetchImage = (query) => {
  return {
    [CALL_API]: {
      endpoint: process.env.NODE_ENV === 'production' ? 'http://junction.veikko.it/image/' : 'http://localhost:9000/image/',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({query: query}),
      types: [REQUEST_IMAGE, REQUEST_IMAGE_SUCCESS, REQUEST_IMAGE_FAILURE]
    }
  }
}

// Reducer
export const ImageStateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_IMAGE:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case REQUEST_IMAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: [
          ...state.data,
          action.payload
        ]
      }
    case REQUEST_IMAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}