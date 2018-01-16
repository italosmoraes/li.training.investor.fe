import React, { Component } from 'react';
import LoanDetailsBox from './LoanDetailsBox';
import InvestView from './InvestView';
// import styles from './invest.css';


class LoanCard extends Component {

    constructor(props){
        super(props);
        // this.fakeData = '{"loans": [{"id": "1","title": "Voluptate et sed tempora qui quisquam.","tranche": "A","available": "11959","annualised_return": "8.60","term_remaining": "864000","ltv": "48.80","amount": "85,754"}]}';
        // this.json = JSON.parse(this.fakeData);
        this.state = {showInvestModal: false};
        
        this.showInvestView = this.showInvestModal.bind(this);
        // this.InvestView = <InvestView id={this.json.loans[0].id} title={this.json.loans[0].title} available={this.json.loans[0].available} term={this.json.loans[0].term_remaining} showInvestView={this.showInvestView} handleInvestAction={this.handleInvestAction} />;
        
        this.InvestView = <InvestView id={this.props.loan.id} title={this.props.loan.title} available={this.props.loan.available} term={this.props.loan.term_remaining} showInvestView={this.showInvestView} handleInvestAction={this.handleInvestAction} />;
        
        this.handleInvestAction = this.handleInvestAction.bind(this);

        this.availableInitial = this.props.loan.available;

    }

    componentDidMount(){

    }

    updateLoan(){
        console.log('updating loan' + this.props.loan.id);   
    }

    showInvestModal(){
        this.setState({showInvestModal: !this.state.showInvestModal});
    }

    handleInvestAction(loanId, investmentAmount){
        console.log('invest '+ investmentAmount +' in loan ' + loanId);
        //convert amount avaible into currency value - no need until it is actuall time to render() - to be handled by parent component
        
        //find the loan in the fake dataset - or not, since this is talking direct to the child Invest Modal
        this.updateLoan();
        //update amount available in the loansList "local storage representation" - to be done by parent

        //show 'user is invested' visual aid - this should hold the state, but the parent component should propagate this downwards - telling what this component will show

    }
    
    render(){
        return(
            <div class="loan-card">
                <div class="loan-title"> title: {this.props.loan.id} </div>
                <div class="loan-details"> details: </div>

                <p>{this.props.loan.title} </p>
                <p>Tranche: {this.props.loan.tranche} </p>
                
                <p>Term Remaining: {this.props.loan.term_remaining} </p>
                <p>LTV: {this.props.loan.ltv} </p>
                <p>Total Loan Amount: {this.props.loan.amount} </p>
                <p>R.A. {this.props.loan.annualised_return} </p>
                <p>Amount Available: {this.props.loan.available} </p>

                <div class="is-invested-text">//show if user is invested</div>
                <div class="btn-invest"><button onClick={() => this.showInvestModal()}> Invest </button> </div>

                
                
                {this.state.showInvestModal && this.InvestView}

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