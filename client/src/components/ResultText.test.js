import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ResultText from './ResultText'

describe('Component::ResultText', () => {
	it('should render the element"', () => {
		const element = shallow(<ResultText/>)
		expect(element).to.be.ok
	})
});
