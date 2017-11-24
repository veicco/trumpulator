import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Loader from './Loader'

describe('Component::Loader', () => {
	it('should render the element"', () => {
		const element = shallow(<Loader/>)
		expect(element).to.be.ok
	})
});
