import React, {Component} from 'react';

class InvestView extends Component {

    constructor(props){
        super(props);
        this.title = props.title;
        this.available = Number(props.available);
        this.term = new Date(Number(props.term));
        this.validateAndInvest = this.validateAndInvest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {amountValue: '0.00'};
    }

    validateAndInvest(){
        console.log('validate and invest');
        if(this.state.amountValue < this.available){
            console.log('good');
        }else{
            console.log('bad');
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
                    <li> Loan ends in: {this.term.getUTCDate.toString()} </li>
                </ul>
                </div>
                <div class="invest-amount-box">
                    <div> Investment amount (£) </div>
                    <div ><input id="invest-amount-input" type="number" name="amount" value={this.state.amountValue} onChange={this.handleChange}/> 
                    <span><button id="invest-btn" onClick={this.validateAndInvest}> Invest </button> </span>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default InvestView;