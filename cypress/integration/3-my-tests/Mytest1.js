/// <reference types="Cypress" />

describe('My first test suite', function()
{

it('my firstTest case',function() {

cy.visit("https://shapermint.com");
cy.wait(6000)
//cy.get('#nav__search').trigger('mouseover')
cy.get('#nav__search').realHover();
  cy.get('.basel-search-inner > #searchform > div > #q').type("panty", { force: true })
  cy.wait(7000)
  cy.get('.autocomplete-suggestions > .autocomplete-suggestion a').first().click({ force: true })
  cy.wait(7000)
  cy.get('#shopify_add_to_cart').click()
  cy.wait(8000)
  cy.get('.cart-line__quantity-field > .plus-button' ).click
 




}      )





}       )
