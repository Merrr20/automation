/// <reference types="Cypress" />

describe('My Eith Test Suite',function()
{
    it('My EithTest Case',function(){
    
    
    cy.visit(Cypress.env('url')+"/AutomationPractice/")
    cy.get('#opentab').then(function(el)
    {
        const url=el.prop('href')
        cy.log(url)
        cy.visit(url)
    })

    }
    )
}
)
