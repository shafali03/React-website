import React from 'react'
import { shallow } from 'enzyme'
import About from './About'


test('render about page without error', () => {
  const wrapper = shallow(<About />)
  const aboutPage = wrapper.find("[data-test='about-page']")
  expect(aboutPage.length).toBe(1)
})

test('render the title', () => {
  const wrapper = shallow(<About />)
  expect(wrapper.find('h1').text()).toContain("About")
})