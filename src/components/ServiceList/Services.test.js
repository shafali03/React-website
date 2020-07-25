import React from 'react'
import { shallow } from 'enzyme'
import Services from '../HomePageSectionOne/HomePageSection.js'


describe('Service Container', () => {
  test('render without error', () => {
    const wrapper = shallow(<Services />)
    const service = wrapper.find("[data-test='component-search-box']")
    expect(service.length).toBe(1)
  })
})
