/// <reference types='Cypress' />


describe('ecommerce', () => {
  context('Login', () => {
    it('ValidLogin', () => {
      cy.ValidLogin()
    })

    it('Logout', () => {
      cy.ValidLogin()
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

  context('Products', () => {
    it('ValidateProductsPage', () => {
      cy.ValidLogin()
      cy.ValidateProductsPage()

    })


    it('OrderByProducts', () => {
      cy.ValidLogin()
      cy.ValidateProductsPage()
      cy.contains('p', 'Order by')
        .should('be.visible')
        .should('have.text', 'Order by')
      cy.contains('button', 'Select...')
        .should('be.visible')
        .should('have.text', 'Select...')
        .click()


      cy.contains('div', 'A to Z (Ascending)')
        .should('be.visible')
        .should('have.text', 'A to Z (Ascending)')
        .click()
      cy.contains('a.text-lg', 'Sample Shirt Name')
        .should('be.visible')
        .should('have.text', 'Sample Shirt Name')


      cy.contains('div', 'A to Z (Ascending)')
        .click()
      cy.contains('div', 'Z to A (Descending)')
        .should('be.visible')
        .should('have.text', 'Z to A (Descending)')
        .click()
      cy.contains('a.text-lg', 'Sample T-Shirt Name')
        .should('be.visible')
        .should('have.text', 'Sample T-Shirt Name')


      cy.contains('div', 'Z to A (Descending)')
        .click()
      cy.contains('div', 'Low to High (Price)')
        .should('be.visible')
        .should('have.text', 'Low to High (Price)')
        .click()
      cy.contains('a.text-lg', 'Sample T-Shirt Name')
        .should('be.visible')
        .should('have.text', 'Sample T-Shirt Name')
      cy.get('.products > :nth-child(1) > .flex > .text-lg')
        .should('have.text', '$45.00')


      cy.contains('div', 'Low to High (Price)')
        .click()
      cy.contains('div', 'High to Low (Price)')
        .should('be.visible')
        .should('have.text', 'High to Low (Price)')
        .click()
      cy.contains('a.text-lg', 'Sample Sunglass Name')
        .should('be.visible')
        .should('have.text', 'Sample Sunglass Name')
      cy.get('.products > :nth-child(1) > .flex > .text-lg')
        .should('have.text', '$256.45')


      cy.contains('div', 'High to Low (Price)')
        .click()
      cy.contains('div', 'A to Z (Ascending)')
        .should('be.visible')
        .should('have.text', 'A to Z (Ascending)')
        .click()
    })
    })

    context('Cart', () => {
      it.only('AddProductToCart', () => {
        cy.ValidLogin()
        cy.contains('a.text-lg', 'Sample Shirt Name')
        cy.get('.products > :nth-child(1) > .flex > .border')
          .should('be.visible')
          .should('have.text', 'Add to cart')
          .click()
        cy.contains('.bg-qa-clr', 1)
          .should('be.visible')
          .should('have.text', 1)
          .click()
        cy.contains('h3','Your Cart')
          .should('be.visible')
          .should('have.text','Your Cart')
        cy.contains('.border', 1)
          .should('be.visible')
          .should('have.text',1)
        cy.get('.mt-3 > .font-bold')
          .should('be.visible')
          .should('have.text','Sample Shirt Name')
        


      })
    })



})