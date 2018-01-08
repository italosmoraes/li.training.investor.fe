import React, {Component} from 'react';
import LoanCard from './LoanCard';
import InvestView from './InvestView';
import Loan from './Loan.js';



class LoansView extends Component {

    constructor(props){
        super(props);
        this.loan = new Loan("id", "title", "tranche", "amount", "rate", "term_remain", "ltv", "available");
    }

    render(){
        return(
            <div class="loans-view">
                <h2 id="loan-view-title"> Current Loans </h2>

                Loading fake test data...
                {this.loan.showDetails()}

                Inside the LoansView...
                
                <LoanCard />

                show test InvestView:

                <InvestView />
            </div>
        )
    }

}

export default LoansView;