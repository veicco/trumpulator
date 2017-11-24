import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TextForm from './TextForm'

describe('Component::TextForm', () => {
	it('should render the element"', () => {
		const element = shallow(<TextForm/>)
		expect(element).to.be.ok
	})
});
