/// <reference types="Cypress" />

describe('My Seventh Test Suite',function()
{
    it('My SeventhTest Case',function()

  {  cy.visit(Cypress.env('url')+'/AutomationPractice/')
     //cy.get('.mouse-hover-content').invoke('show')
     cy.contains('Top').click({ force : true})
     cy.url().should('include', 'top')
}
    )
}
)
