import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'


test('render home page without error', () => {
  const wrapper = shallow(<Home />)
  const homePage = wrapper.find("[data-test='home-page']")
  expect(homePage.length).toBe(1)
})

test('render the title', () => {
  const wrapper = shallow(<Home />)
  expect(wrapper.find('h1').text()).toContain("Home")
})