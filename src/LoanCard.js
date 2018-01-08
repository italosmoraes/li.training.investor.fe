import React, { Component } from 'react';
import LoanDetailsBox from './LoanDetailsBox';
import InvestView from './InvestView';
// import styles from './invest.css';


function getJsonData(callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'src/current-loans.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        console.log(xobj.responseText);
        callback(xobj.responseText);
      }
    };
    xobj.send(null); 
}

class LoanCard extends Component {

    constructor(props){
        super(props);
        this.fakeData = '{"loans": [{"id": "1","title": "Voluptate et sed tempora qui quisquam.","tranche": "A","available": "11959","annualised_return": "8.60","term_remaining": "864000","ltv": "48.80","amount": "85,754"}]}';
        this.json = JSON.parse(this.fakeData);
        this.state = {showInvestModal: false};
        this.showInvestView = this.showInvestModal.bind(this);
        this.InvestView = <InvestView id={this.json.loans[0].id} title={this.json.loans[0].title} available={this.json.loans[0].available} term={this.json.loans[0].term_remaining} showInvestView={this.showInvestView} handleInvestAction={this.handleInvestAction} />;
        this.handleInvestAction = this.handleInvestAction.bind(this);
    }

    componentDidMount(){
    }

    showInvestModal(){
        this.setState({showInvestModal: !this.state.showInvestModal});
    }

    handleInvestAction(loanId, investmentAmount){
        console.log('invest '+investmentAmount+' in loan ' + loanId);
        //find the loan in the fake dataset
        //update amount available
        //show 'user is invested' visual aid

    }
    
    render(){
        return(
            <div class="loan-card">
                <div class="loan-title"> title </div>
                <div class="loan-details"> details... {this.json.loans[0].title} <LoanDetailsBox data={this.json} /> </div>
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