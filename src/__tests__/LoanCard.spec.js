import React from 'react';
import LoanCard from '../LoanCard';
import InvestView from '../InvestView';
import { shallow, mount } from 'enzyme';

describe('LoanCard', () => {
  let wrapper;
  let instance;
  const constantDate = new Date('2017-06-13T04:41:20');
  const constantTimestampt = constantDate.getTime();

  /* eslint no-global-assign:off */
  Date = class extends Date {
    getTime() {
      return constantTimestampt;
    }
  };


  const loan = {
    id: '1',
    title: 'Voluptate et sed tempora qui quisquam.',
    tranche: 'A',
    available: 11959,
    annualised_return: '8.60',
    expiration_date: new Date('2017-06-13T04:42:20'),
    ltv: '48.80',
    amount: '85,754',
  };

  beforeEach(() => {
    wrapper = shallow(<LoanCard loan={loan}/>)
    instance = wrapper.instance();
  });

  describe('showInvestModal', () => {
    it('showInvestModal state is true', () => {
      wrapper.setState({ showInvestModal: false });
      wrapper.find('button[id="toggle-invest"]').simulate('click');
      expect(wrapper.state().showInvestModal).toBe(true);
    });
  });

  describe('toggleInvestModal', () => {
    it('InvestView modal is rendered', () => {
      const investView = mount(<InvestView
        id={loan.id}
        title={loan.title}
        available={loan.available}
        expiration_date={loan.expiration_date}
        toggleInvestModal={wrapper.toggleInvestModal}
        handleInvestAction={wrapper.handleInvestAction}
      />);
      wrapper.find('button[id="toggle-invest"]').simulate('click');
      expect(investView.render()).toBeTruthy();
    });
  });

  describe('LoanCard', () => {
    it('Loan Card is rendered', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
