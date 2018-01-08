import React, {Component} from 'react';

class LoanDetailsBox extends Component {

    constructor(props){
        super(props);
        this.json = props.data;
    }

    // "id": "1",
    // "title": "Voluptate et sed tempora qui quisquam.",
    // "tranche": "A",
    // "available": "11,959",
    // "annualised_return": "8.60",
    // "term_remaining": "864000",
    // "ltv": "48.80",
    // "amount": "85,754"

    render(){
        return (
            <div class="loan-details-box">inside the details box: 
                <p>{this.json.loans[0].title} </p>
                <p>Tranche: {this.json.loans[0].tranche} </p>
                
                <p>Term Remaining: {this.json.loans[0].term_remaining} </p>
                <p>LTV: {this.json.loans[0].ltv} </p>
                <p>Total Loan Amount: {this.json.loans[0].amount} </p>
                <p>R.A. {this.json.loans[0].annualised_return} </p>
                <p>Amount Available: {this.json.loans[0].available} </p>
                
            </div>
        )
    }
}

export default LoanDetailsBox;