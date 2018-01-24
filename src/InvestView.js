import React, {Component} from 'react';
import formatCurrency from './utils/formatCurrency';
import formatDate from './utils/formatDate';

class InvestView extends Component {

    constructor(props){
        super(props);
        this.state = {amountValue: this.props.available};
    }

    /**
     * validate if the value is < amount available
     * then returns the Amount and the Loan ID to the parent component, for further handling of invest actions
     */
    validate = () => {
        let amountValue = +this.state.amountValue;
        if(isNaN(amountValue)){return 'amount must be a number';}

        if(!(amountValue < this.props.available && amountValue > 0)){
            return 'invest amount is invalid';
        }
    }

    handleChange = (evt) => {
        this.setState({amountValue: evt.target.value});
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        if(!this.validate()){
            this.props.handleInvestAction(this.props.id, +this.state.amountValue);
        }
    }

    render(){
        let validationError = this.validate();
        return(
            <div class="invest-view-background">
            <div class="invest-view">
                <div class="invest-view-header">
                <h3>Invest in loan</h3>
                <p> Loan Title: {this.props.title} </p>
                </div>
                <div class="invest-view-details">
                <ul>
                    <li>Amount Available: {formatCurrency(this.props.available)}</li>
                    <li>Loan ends in: {formatDate(this.props.expiration_date)}</li>
                </ul>
                </div>
                <div class="invest-amount-box">
                    <div> Investment amount (£) </div>
                    <form onSubmit={this.onSubmit}>
                        <div>
                        <input 
                            id="invest-amount-input" 
                            type="number" name="amount" 
                            value={this.state.amountValue} 
                            onChange={this.handleChange}
                        /> 
                        <span>
                            <button id="invest-btn"> Invest </button> 
                        </span>
                        <div>
                            <button id="invest-btn" onClick={this.props.toggleInvestModal}> Cancel </button> 
                        </div>
                        </div>
                    </form>
                    
                    
                </div>
            </div>
            </div>
        )
    }

}

export default InvestView;