import React from 'react'
import { shallow } from 'enzyme'
import HomePageSection from './HomePageSection'

test('should render the title', () => {
  const wrapper = shallow(<HomePageSection />)
  expect(wrapper.find('h2').text()).toContain('What We Do')
})


