import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

test('should render the footer', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper.find('p').text()).toContain('Created by Shafique Mohammed')
})