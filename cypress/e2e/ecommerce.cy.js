/// <reference types='Cypress' />


describe('ecommerce', () => {

  context('Login', () => {
    it('ValidLogin', () => {
      cy.ValidLogin()
    })

    it('InvalidLogin_CorrectUsername_InvalidPassword', () => {
      cy.visit('https://practice.qabrains.com/ecommerce')
      cy.get('#email')
        .type('test@qabrains.com')
      cy.get('#password')
        .type('123456')
      cy.contains('button', 'Login')
        .click()
      cy.contains('Password is incorrect')
        .should('be.visible')
      cy.contains('Username matched but password is incorrect.')
        .should('be.visible')
    })

    it('InvalidLogin_IncorrectUsername_ValidPassword', () => {
      cy.visit('https://practice.qabrains.com/ecommerce')
      cy.get('#email')
        .type('test123@qabrains.com')
      cy.get('#password')
        .type('Password123')
      cy.contains('button', 'Login')
        .click()
      cy.contains('Username is incorrect')
        .should('be.visible')
      cy.contains('Password matched but email is incorrect.')
        .should('be.visible')
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
    it('AddProductsToCart', () => {
      cy.AddProductsToCart()
    })


    it('RemoveProductFromCart', () => {
      cy.AddProductsToCart()
      cy.get('.bg-qa-clr')
        .should('be.visible')
        .click()
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Remove")').length > 0) {
          cy.contains('h3.font-bold', 'Sample Shoe Name')
            .should('be.visible')
            .parents('[class*="border"]')
            .within(() => {
              cy.contains('button', 'Remove')
                .click()
            })
          cy.contains('Are you absolutely sure?')
            .parents('[role="dialog"]')
            .within(() => {
              cy.contains('button', 'Remove')
                .click()
            })
          cy.contains('h3.font-bold', 'Sample Shoe Name')
            .should('not.exist')
        }
      })

    })

    it('UpdateProductFromCart', () => {
      cy.AddProductsToCart()
      cy.get('.bg-qa-clr')
        .should('be.visible')
        .click()
      cy.contains('h3.font-bold', 'Sample Shoe Name')
        .should('be.visible')
        .parents('[class*="border"]')
        .within(() => {
          cy.contains('button', '+')
            .click()
        })
      cy.contains('.border', '2')
        .should('be.visible')
    })


  })

  context('Checkout', () => {
    it('CheckoutOverview', () => {
      cy.CheckoutOverview()
    })

    it.only('CompleteCheckout', () => {
      cy.CheckoutOverview()
      cy.contains('.form-label', 'Email')
        .should('be.visible')
      cy.contains('.form-label', 'First Name')
        .should('be.visible')
      cy.get('input[placeholder="Ex. John"]')
        .click()
        .type('Tatiane')
      cy.contains('.form-label', 'Last Name')
        .should('be.visible')
      cy.get('input[placeholder="Ex. Doe"]')
        .click()
        .type('Almeida')
      cy.get('input[value="1207"]')
        .click()
        .clear()
        .type('1234')
      cy.contains('button', 'Continue')
        .should('be.visible')
        .click()
      cy.contains('.text-xl', 'Checkout: Overview')
        .should('be.visible')

      let totalGeral = 0

      cy.get('h3.font-bold').each(($el) => {

        cy.wrap($el)
          .parents('[class*="border"]')
          .first()
          .within(() => {

            cy.get('.text-lg').last().invoke('text').then((texto) => {

              const valor = Number(texto.replace(/[^\d.]/g, ''))
              totalGeral += valor

            })

          })

      }).then(() => {

        cy.contains('Item Total')
          .invoke('text')
          .then((texto) => {

            const totalTela = Number(texto.replace(/[^\d.]/g, ''))

            expect(totalTela).to.equal(totalGeral)

          })

      })

      cy.contains('button', 'Finish')
        .should('be.visible')
        .click()

      cy.contains('.text-lg', 'Thank you for your order!')
        .should('be.visible')

      cy.contains('.text-xl', 'Checkout: Complete!')
        .should('be.visible')

      cy.contains('button', 'Continue Shopping')
        .should('be.visible')
        .click()

      cy.contains('.text-xl', 'Products')
        .should('be.visible')

    }) // close it('CompleteCheckout')

  }) // close context Checkout

  context('Logout', () => {
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

}) // close describe ecommerce




