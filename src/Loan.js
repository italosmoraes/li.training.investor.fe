class Loan {
    
    //get json to mount Loan
    constructor(id){
        this.id = id;
    }

    title = "test";
    tranche =  "A";
    available = 100.00;
    annualised_return = "ret";
    term_remaining = "86400";
    ltv = 75;
    amount = 70000;

}

var Loan = {

    setId: function setId(ID){this.id = ID; },
    title: "test",
    tranche:  "A",
    available: 100.00,
    annualised_return: "ret",
    term_remaining: "86400",
    ltv = 75,
    amount = 70000

};