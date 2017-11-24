import { expect } from 'chai'
import {COMPONENT_NAMEStateReducer} from './COMPONENT_NAMEState'

describe('Reducer::COMPONENT_NAME', () => {
  describe('ACTION_NAME', () => {
    const initialState = {}
    const action = {}
    const nextState = COMPONENT_NAMEStateReducer(initialState, action)
    it('test case', () => {
      expect(nextState)
    })
  })
})
