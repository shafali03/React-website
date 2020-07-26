import React from 'react'
import { shallow } from 'enzyme'
import AboutPageTitle from '../AboutPageTitle/AboutPageTitle'

test('render the information', () => {
  const wrapper = shallow(<AboutPageTitle />)
  expect(wrapper.find('h3').text()).toContain('We are family run barbers cutting hair over 30 years')
})