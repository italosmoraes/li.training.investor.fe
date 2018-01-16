import React, {Component} from 'react';
import LoanCard from './LoanCard';
import InvestView from './InvestView';
// import loadLoans from './DataStub';
import loansList from './LoansList';

class LoansView extends Component {

    constructor(props){
        super(props);
        this.loans = loansList.loans;
    }

    

    render(){

        let loans = this.loans.map(loan => 
            <LoanCard key={loan.id} loan={loan}/> 
        );
        return(
            <div class="loans-view">
                <h2 id="loan-view-title"> Current Loans </h2>

                {loans}

                show test InvestView:

                <InvestView />
            </div>
        )
    }

}

export default LoansView;