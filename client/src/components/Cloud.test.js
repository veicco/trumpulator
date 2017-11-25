import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Cloud from './Cloud'

describe('Component::Cloud', () => {
	it('should render the element"', () => {
		const element = shallow(<Cloud/>)
		expect(element).to.be.ok
	})
});
