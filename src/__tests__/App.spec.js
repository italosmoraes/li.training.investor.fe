import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import LoansView from '../LoansView';

describe('App', () => {
  it('renders LoansView', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(LoansView)).toBeTruthy();
  });
});
