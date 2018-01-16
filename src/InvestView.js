import React, {Component} from 'react';
import getFloat from './CurrencyHandler';

const InvestError = (
    <div class="invest-error"> Amount has to be greater than 0.00  </div>
);
    
class InvestView extends Component {

    constructor(props){
        super(props);
        this.loanId = props.id;
        this.title = props.title;
        this.available = props.available; // when should I transform the text to currency to make the calculations?
        this.term = (new Date(2018,12,1)).toString();
        this.validateAndInvest = this.validateAndInvest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {amountValue: '0.00'};

        this.showInvestView = this.showInvestView.bind(this);
        
    }

    showInvestView(){
        this.props.showInvestView();
    }

    /**
     * validate if the value is < amount available
     * then returns the Amount and the Loan ID to the parent component, for further handling of invest actions
     */
    validateAndInvest(){
        console.log('validate and invest');
        if(this.state.amountValue < this.available & this.state.amountValue > 0){
            console.log('good');
            this.props.handleInvestAction( this.loanId, this.state.amountValue);
            this.showInvestView();
        }else{
            console.log('bad');
            {InvestError}
        }
    }

    

    handleChange(evt){
        this.setState({amountValue: evt.target.value});
    }

    render(){
        return(
            <div class="invest-view">
                <div class="invest-view-header">
                <h3> Invest in loan</h3>
                <p> Loan Title: {this.title} </p>
                </div>
                <div class="invest-view-details">
                <ul>
                    <li> Amount Available: {this.available} </li>
                    <li> Loan ends in: {this.term} </li>
                </ul>
                </div>
                <div class="invest-amount-box">
                    <div> Investment amount (£) </div>
                    <div ><input id="invest-amount-input" type="number" name="amount" value={this.state.amountValue} onChange={this.handleChange}/> 
                    <span><button id="invest-btn" onClick={this.validateAndInvest}> Invest </button> </span>
                    <div><button id="invest-btn" onClick={this.showInvestView}> Cancel </button> </div>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default InvestView;