import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import COMPONENT_NAME from './COMPONENT_NAME'

describe('Component::COMPONENT_NAME', () => {
	it('should render the element"', () => {
		const element = shallow(<COMPONENT_NAME/>)
		expect(element).to.be.ok
	})
});
