/// <reference types='Cypress' />


describe('ecommerce', () => {
  context('Login', () => {
    it('LoginValido', () => {
        cy.LoginValido()
    })

    it('Logout', () => {
      cy.LoginValido()
      cy.get('.user-name')
        .should('be.visible')
        .should('have.text', 'test@qabrains.com')
      cy.get('span.caret')
        .click()
      cy.get('.text-red-500')
        .click()
      cy.contains('button', 'Logout')
        .click()
      cy.contains('button', 'Login')
        .should('be.visible')
        .should('have.text', 'Login')
    })
  })
})

