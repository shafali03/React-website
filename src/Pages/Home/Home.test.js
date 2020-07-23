import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './Home'


test('render home page without error', () => {
  const wrapper = shallow(<HomePage />)
  const homePage = wrapper.find("[data-test='home-page']")
  expect(homePage.length).toBe(1)
})
