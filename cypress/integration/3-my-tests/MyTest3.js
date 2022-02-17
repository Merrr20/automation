/// <reference types="Cypress" />

describe('My Third Test Suite',function()
{
    it('My ThirdTest Case',function()
{

    cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
    cy.wait(2000)
    cy.get('.search-keyword').type('ca')

    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').each(($el, index, $list)  =>
{
    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
        cy.wrap($el).find('button').click()

    }
} )
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()

//cy.get(':nth-child(14)').click()
}
    )}
)

