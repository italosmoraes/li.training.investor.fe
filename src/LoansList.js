// this represents only the initial loading from the DB
// I need to find a way to similate a local DB
// which will hold the values, and be updated on the Invest() action
// -> convert this json array into a JS Object will can be accessed constantly
// -> or not! try and just update this loansList back with the new "available" value

const loansList = {
    "loans": [
      {
        "id": "1",
        "title": "Voluptate et sed tempora qui quisquam.",
        "tranche": "A",
        "available": "11,959",
        "annualised_return": "8.60",
        "term_remaining": "864000",
        "ltv": "48.80",
        "amount": "85,754"
      },
      {
        "id": "5",
        "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
        "tranche": "B",
        "available": "31,405",
        "annualised_return": "7.10",
        "term_remaining": "1620000",
        "ltv": "48.80",
        "amount": "85,754"
      },
      {
        "id": "12",
        "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
        "tranche": "C",
        "available": "12,359",
        "annualised_return": "4.80",
        "term_remaining": "879000",
        "ltv": "48.80",
        "amount": "85,754"
      }
    ]
  }

module.exports = loansList;