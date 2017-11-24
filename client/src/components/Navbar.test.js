import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navbar from './Navbar'

describe('Component::Navbar', () => {
	it('should render the element"', () => {
		const element = shallow(<Navbar/>)
		expect(element).to.be.ok
	})
});
