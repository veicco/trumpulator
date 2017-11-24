import { expect } from 'chai'
import {
  PlanetsStateReducer,
  REQUEST_PLANETS,
  REQUEST_PLANETS_SUCCESS,
  REQUEST_PLANETS_FAILURE
} from './PlanetsState'

describe('Reducer::Planets', () => {
  describe(REQUEST_PLANETS, () => {
    const initialState = {
      isFetching: false,
      error: null,
      data: null
    }
    const action = {
      type: REQUEST_PLANETS
    }
    const nextState = PlanetsStateReducer(initialState, action)
    it('should set isFetching to true', () => {
      expect(nextState).to.have.deep.property('isFetching', true)
    })
  })

  describe(REQUEST_PLANETS_SUCCESS, () => {
    const initialState = {
      isFetching: true,
      error: null,
      data: null
    }
    const action = {
      type: REQUEST_PLANETS_SUCCESS,
      payload: [1,2,3]
    }
    const nextState = PlanetsStateReducer(initialState, action)
    it('should set isFetching to false', () => {
      expect(nextState).to.have.deep.property('isFetching', false)
    })
    it('should set data equal to payload', () => {
      expect(nextState).to.have.deep.property('data', [1,2,3])
    })
  })

  describe(REQUEST_PLANETS_FAILURE, () => {
    const initialState = {
      isFetching: true,
      error: null,
      data: null
    }
    const action = {
      type: REQUEST_PLANETS_FAILURE,
      payload: 'Not found'
    }
    const nextState = PlanetsStateReducer(initialState, action)
    it('should set isFetching to false', () => {
      expect(nextState).to.have.deep.property('isFetching', false)
    })
    it('should set error equal to payload', () => {
      expect(nextState).to.have.deep.property('error', 'Not found')
    })
  })

})
