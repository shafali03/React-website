
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('First React component test', () => {

  it('render without crashing', () => {
    shallow(<App />)
  })
})
