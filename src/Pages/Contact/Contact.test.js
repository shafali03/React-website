import React from 'react'
import { shallow } from 'enzyme'
import Contact from './Contact'


test('render contact page without error', () => {
  const wrapper = shallow(<Contact />)
  const contactPage = wrapper.find("[data-test='contact-page']")
  expect(contactPage.length).toBe(1)
})

test('render the title', () => {
  const wrapper = shallow(<Contact />)
  expect(wrapper.find('h1').text()).toContain("Contact")
})