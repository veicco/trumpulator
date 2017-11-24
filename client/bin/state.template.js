// Initial state
const initialState = {
}

// Actions
export const ACTION_NAME = 'COMPONENT_NAME/ACTION_NAME'

// Action creators
export const action_name = () => {
  return {
    type: ACTION_NAME
  }
}

// Reducer
export const COMPONENT_NAMEStateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_NAME:
      return {
        ...state
      }
    default:
      return state
  }
}
