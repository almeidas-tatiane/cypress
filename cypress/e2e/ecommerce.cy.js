/// <reference types='Cypress' />


describe('ecommerce', () => {
  context('Login', () => {
    it('Login com sucesso', () => {
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
      cy.get('#product-sort > .text-xl')
        .should('be.visible')
        .should('have.text', 'Products')
    })
  })


})