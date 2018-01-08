import React, {Component} from 'react';
import LoanCard from './LoanCard';
import InvestView from './InvestView';

class LoansView extends Component {

    render(){
        return(
            <div class="loans-view">
                <h2 id="loan-view-title"> Current Loans </h2>
                Inside the LoansView...
            <LoanCard />

            show test InvestView:

            <InvestView />
            </div>
        )
    }

}

export default LoansView;