import React, {Component} from 'react';
import LoanCard from './LoanCard';
import InvestView from './InvestView';
import loansList from './LoansList';

class LoansView extends Component {

    constructor(props){
        super(props);
        this.state = {loans: this.transformInputData(loansList.loans)};
    }

    transformInputData = (loans) => {
        return loans.map( (loan) => Object.assign({}, loan, {
            available: +(loan.available.replace(',', '')),
            expiration_date: new Date((new Date()).getTime() + loan.term_remaining * 1000)
        }) )
    }

    updateAvailableAmount = (loanId, investment) => {
        let loans = this.state.loans;
        let newLoans = loans.reduce((acc,loan) => {
            if(loan.id === loanId){
                let newLoan = Object.assign({}, loan, {
                    available: loan.available - investment
                });
                return [...acc, newLoan]
            }
            return [...acc, loan];
        }, [])
        this.setState({loans: newLoans});
    }

    

    render(){
        let loans = this.state.loans.map(loan => 
            <LoanCard 
                key={loan.id} 
                loan={loan} 
                updateAvailableAmount={this.updateAvailableAmount}
            /> 
        );
        return(
            <div class="loans-view">
                <h2 id="loan-view-title"> Current Loans </h2>
                {loans}
            </div>
        )
    }

}

export default LoansView;