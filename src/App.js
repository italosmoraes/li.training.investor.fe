import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoansView from './LoansView';

class App extends Component {

/**
 * 1 stringfy JSON
 * 2 mount <Loan>
 * 3 mount <LoanView> with several <Loan> items
 * 4 ...
 */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lendinvest</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        1) A sample JSON file (current-loans.json) is provided to use as a stub data.

1) Don’t worry about stubbing API response. Assume that this data is available within
the app’s source code (hard coded).

2) You should create a small single page HTML/JS application. It should have the following
functionality:
1) User is able to see all current loans (you can find the data in current-loans.json file)
2) The User is able to see the number representing the total amount of possible
investments.
3) After User clicks on a loan, the form should appear.
1) User can put numeric value (invested amount) in the input
2) User can click button labelled “Invest”
3) User can close popup
4) If User decides to invest:
1) the form should be closed
2) the available amount, for the loan User invested into, should decrease
3) the total available number should also adjust accordingly.
4) The loan on which User have invested should have some visual indication that
you have invested in it
        </p>

        <LoansView />

      </div>
    );
  }
}

export default App;
