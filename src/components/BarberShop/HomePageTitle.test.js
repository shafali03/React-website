import React from 'react'
import { shallow } from 'enzyme'
import HomePageTitle from './HomePageTitle'

test('render the title', () => {
  const wrapper = shallow(<HomePageTitle />)
  expect(wrapper.find('h1').text()).toContain("Barber Shop")
})