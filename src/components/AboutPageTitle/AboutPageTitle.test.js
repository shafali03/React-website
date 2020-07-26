import React from 'react'
import { shallow } from 'enzyme'
import AboutPageTitle from './AboutPageTitle'

test('render the title', () => {
  const wrapper = shallow(<AboutPageTitle />)
  expect(wrapper.find('h2').text()).toContain('About Us')
})