import React from 'react';
import InvestView from '../InvestView';
import { shallow } from 'enzyme';

describe('InvestView', () => {
  let wrapper;
  let instance;
  let handleInvestAction;

  beforeEach(() => {
    handleInvestAction = jest.fn();
    wrapper = shallow(<InvestView
      available={40}
      handleInvestAction={handleInvestAction}
      expiration_date={new Date()}/>
    );
    instance = wrapper.instance();
  });

  describe('onSubmit', () => {
    it('prevents default', () => {
      let event = {
        preventDefault: jest.fn(),
      };
      instance.onSubmit(event);
      expect(event.preventDefault).toHaveBeenCalled();
    });
    it('handles Invest Action', () => {
      const event = {
        preventDefault: jest.fn(),
      };
      instance.validate = jest.fn().mockImplementation(() => 'abc');
      instance.onSubmit(event);
      expect(handleInvestAction).not.toHaveBeenCalled();

      instance.validate = jest.fn().mockImplementation(() => false);
      instance.onSubmit(event);
      expect(handleInvestAction).toHaveBeenCalled();
    });
  });
});
