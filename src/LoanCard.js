import React, { Component } from 'react';
import LoanDetailsBox from './LoanDetailsBox';
import InvestView from './InvestView';
import formatCurrency from './utils/formatCurrency';
import formatDate from './utils/formatDate';

class LoanCard extends Component {

    constructor(props){
        super(props);
        this.state = {showInvestModal: false};
    }

    toggleInvestModal = () => {
        this.setState({showInvestModal: !this.state.showInvestModal});
    }

    handleInvestAction = (...args) => {
        this.toggleInvestModal();
        this.props.updateAvailableAmount(...args);
    }
    
    render(){
        return(
            <div class="loan-card">
                <h2 class="loan-title">Title: {this.props.loan.title}</h2>
                <p>Tranche: {this.props.loan.tranche} </p>
                <p>Term Remaining: {formatDate(this.props.loan.expiration_date)} </p>
                <p>LTV: {this.props.loan.ltv} </p>
                <p>Total Loan Amount: {this.props.loan.amount} </p>
                <p>R.A. {this.props.loan.annualised_return} </p>
                <p>Amount Available: {formatCurrency(this.props.loan.available)} </p>

                <div class="is-invested-text">//show if user is invested</div>
                <div class="btn-invest"><button onClick={this.toggleInvestModal}> Invest </button> </div>

                {this.state.showInvestModal && (
                    <InvestView 
                        id={this.props.loan.id} 
                        title={this.props.loan.title} 
                        available={this.props.loan.available} 
                        expiration_date={this.props.loan.expiration_date} 
                        toggleInvestModal={this.toggleInvestModal}
                        handleInvestAction={this.handleInvestAction}/>
                )}
            </div>

            
        )
    }
}

export default LoanCard;

/**
//load loans
//mount Loan card - maybe I dont need the Loan class, since I can simply load the data from wherever and create the visual representation
what does this mean for how I handle Loan changes in regards to investment in the front end?
since I will change Loan properties 
and will change View details in regards to Loan
I need a Loan obj representation
// show loan details
// show if user is invested in this loan
*/