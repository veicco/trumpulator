import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Tag from './Tag'

describe('Component::Tag', () => {
	it('should render the element"', () => {
		const element = shallow(<Tag/>)
		expect(element).to.be.ok
	})
});
