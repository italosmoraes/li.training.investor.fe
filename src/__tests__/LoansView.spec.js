import React from 'react';
import LoansView from '../LoansView';
import { shallow } from 'enzyme';

describe('LoansView', () => {
    let wrapper;
    let instance;

    beforeEach(() => {
        wrapper = shallow(<LoansView/>)
        instance = wrapper.instance();
    });

    describe('updateAvailableAmount', () => {
        it('update states with new Amount for given loan', () => {
            instance.state = {
                loans: [{id: 5003, available: 300}, {id: 10, available: 500}]
            }
            instance.setState = jest.fn();
            instance.updateAvailableAmount(0,10);
            expect(instance.setState).toHaveBeenCalledWith({
                loans: [{id: 5003, available: 300}, {id: 10, available: 500}]
            });
            instance.setState = jest.fn();
            instance.updateAvailableAmount(5003,200);
            expect(instance.setState).toHaveBeenCalledWith({
                loans: [{id: 5003, available: 100}, {id: 10, available: 500}]
            })
            instance.setState = jest.fn();
            instance.updateAvailableAmount(10,500);
            expect(instance.setState).toHaveBeenCalledWith({
                loans: [{id: 5003, available: 300}, {id: 10, available: 0}]
            })
            
        })
    })
    describe('transformInputData', () => {
        it('transform available amount from text to number', () => {
            expect(instance.transformInputData([{
                available: '19,888.43', 
                term_remaining: 0}])
            ).toEqual([{
                available: 19888.43,
                expiration_date: expect.any(Date),
                term_remaining: 0
            }])
        })
    })
    describe('transformInputData', () => {
        it('transform text into Date', () => {
            const constantDate = new Date('2017-06-13T04:41:20')
            const constantTimestampt = constantDate.getTime();

            /*eslint no-global-assign:off*/
            Date = class extends Date {
                getTime() {
                    return constantTimestampt;
                }
            }
            expect(instance.transformInputData([{
                available: '0', 
                term_remaining: '60'}])
            ).toEqual([{
                available: 0,
                expiration_date: new Date('2017-06-13T04:42:20'),
                term_remaining: '60'
            }])
        })
    })
})