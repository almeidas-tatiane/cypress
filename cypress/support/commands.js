// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('ValidLogin', () => {
  cy.visit('https://practice.qabrains.com/ecommerce')
  cy.contains('.text-xl', 'Login')
  cy.get('#email')
    .type('test@qabrains.com')
  cy.get('#password')
    .type('Password123')
  cy.get('button[type=submit]')
    .click()
  cy.get('.user-name')
    .should('be.visible')
    .should('have.text', 'test@qabrains.com')
})

Cypress.Commands.add('ValidateProductsPage', () => {
  cy.get('#product-sort > .text-xl')
    .should('be.visible')
    .should('have.text', 'Products')
})

