// // import loans from './current-loans.json';
// /**
//  * Holds the arrays containing all loaded Loans
//  */

// const Loan = (id) => {
//   this.id = id;
//   this.title;
//   this.tranche;
//   this.totalLoanAmount;
//   this.annualised_return;
//   this.term_remaining;
//   this.ltv;
//   this.available;
// }

// function createLoan(id){
//     return new Loan(id);
// }

// function createLoan(id, title, tranche, amount, rate, term_remain, ltv, available){
//     return new Loan(id, title, tranche, amount, rate, term_remain, ltv, available);
// }

// /**
//  * create a new loan for each item in the json Loans array
//  */
// function loadLoans(){
//     var debug = {hello: "world"};
//     var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
//     console.log(blob);
//     var reader = new FileReader();
//     reader.readAsText(blob);
//     return reader.result;
// }

// /**
//  * Loads the Json file and converts to objects
//  * Then returns array of objects (or a map?)
//  */
// function loadStubData(callback){

//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'src/current-loans.json', true);
// Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//       if (xobj.readyState === 4 && xobj.status === "200") {
//         // Required use of an anonymous callback as .open will
// NOT return a value but simply returns undefined in asynchronous mode
//         console.log(xobj.responseText);
//         callback(xobj.responseText);
//       }
//     };
//     xobj.send(null);

// }

// module.exports = loadLoans;
