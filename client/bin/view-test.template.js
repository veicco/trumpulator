import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import COMPONENT_NAMEView from './COMPONENT_NAMEView'

describe('View::COMPONENT_NAME', () => {
	it('should render the element"', () => {
		const element = shallow(<COMPONENT_NAMEView/>)
		expect(element).to.be.ok
	})
});
