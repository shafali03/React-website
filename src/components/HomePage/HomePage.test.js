import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './HomePage'

test('render the title', () => {
  const wrapper = shallow(<HomePage />)
  expect(wrapper.find('h1').text()).toContain('Barber')
})

test('render the title', () => {
  const wrapper = shallow(<HomePage />)
  expect(wrapper.find('h2').text()).toContain('Shop')
})

