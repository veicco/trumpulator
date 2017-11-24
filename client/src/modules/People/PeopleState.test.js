import { expect } from 'chai'
import {
  PeopleStateReducer,
  REQUEST_PEOPLE,
  REQUEST_PEOPLE_SUCCESS,
  REQUEST_PEOPLE_FAILURE
} from './PeopleState'

describe('Reducer::People', () => {
  describe(REQUEST_PEOPLE, () => {
    const initialState = {
      isFetching: false,
      error: null,
      data: null
    }
    const action = {
      type: REQUEST_PEOPLE
    }
    const nextState = PeopleStateReducer(initialState, action)
    it('should set isFetching to true', () => {
      expect(nextState).to.have.deep.property('isFetching', true)
    })
  })

  describe(REQUEST_PEOPLE_SUCCESS, () => {
    const initialState = {
      isFetching: true,
      error: null,
      data: null
    }
    const action = {
      type: REQUEST_PEOPLE_SUCCESS,
      payload: [1,2,3]
    }
    const nextState = PeopleStateReducer(initialState, action)
    it('should set isFetching to false', () => {
      expect(nextState).to.have.deep.property('isFetching', false)
    })
    it('should set data equal to payload', () => {
      expect(nextState).to.have.deep.property('data', [1,2,3])
    })
  })

  describe(REQUEST_PEOPLE_FAILURE, () => {
    const initialState = {
      isFetching: true,
      error: null,
      data: null
    }
    const action = {
      type: REQUEST_PEOPLE_FAILURE,
      payload: 'Not found'
    }
    const nextState = PeopleStateReducer(initialState, action)
    it('should set isFetching to false', () => {
      expect(nextState).to.have.deep.property('isFetching', false)
    })
    it('should set error equal to payload', () => {
      expect(nextState).to.have.deep.property('error', 'Not found')
    })
  })

})
