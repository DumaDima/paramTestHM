///<reference types="cypress"/>

const paramTest = ({firstName, expectedResult, email, expectedResult1}) =>
  function() {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    cy.get('nb-card:nth-of-type(2) > nb-card-header').click();
    cy.get('.expand-state.ng-tns-c141-9 rect').click();
    cy.get('.menu-title.ng-tns-c141-11').click();
    cy.get('form > input:nth-of-type(1)').type(`${firstName}`)
    cy.get('form > input:nth-of-type(1)').should("contain.value", `${expectedResult}`)
    cy.get('form > input:nth-of-type(2)').type(`${email}`)
    cy.get('form > input:nth-of-type(2)').should("contain.value", `${expectedResult1}`)

}

it(`search data`, paramTest({firstName: 'Dima', expectedResult: 'Dima', email: 'Dumadima24@gmail.com', expectedResult1: 'Dumadima24@gmail.com'}))
