class ProductPage
{
    checkoutButton()
{
return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

    secondCheckoutButton()
        {
            return cy.get(':nth-child(6) > :nth-child(5) > .btn')
        }
        deliveryLocation()
        {
            return cy.get('#country')
        }
    
}


export default ProductPage