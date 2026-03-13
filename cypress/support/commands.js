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

Cypress.Commands.add('AddProductToCart', () => {
  cy.contains('a.text-lg', product.name)
  cy.get('.products > :nth-child(1) > .flex > .border')
    .should('be.visible')
    .should('have.text', 'Add to cart')
    .click()
  cy.contains('.bg-qa-clr', 1)
    .should('be.visible')
    .should('have.text', 1)
    .click()
  cy.contains('h3', 'Your Cart')
    .should('be.visible')
    .should('have.text', 'Your Cart')
  cy.contains('.border', 1)
    .should('be.visible')
    .should('have.text', 1)
  cy.get('.mt-3 > .font-bold')
    .should('be.visible')
    .should('have.text', product.name)
})

Cypress.Commands.add('AddProductToCart', () => {
  cy.fixture('products').then((data) => {
    const product = data.products[0]

    cy.ValidLogin()
    cy.contains('a.text-lg', product.name)
    cy.get('.products > :nth-child(1) > .flex > .border')
      .should('be.visible')
      .should('have.text', 'Add to cart')
      .click()
    cy.contains('.bg-qa-clr', 1)
      .should('be.visible')
      .should('have.text', 1)
      .click()
    cy.contains('h3', 'Your Cart')
      .should('be.visible')
      .should('have.text', 'Your Cart')
    cy.contains('.border', 1)
      .should('be.visible')
      .should('have.text', 1)
    cy.get('.mt-3 > .font-bold')
      .should('be.visible')
      .should('have.text', product.name)
  })
})