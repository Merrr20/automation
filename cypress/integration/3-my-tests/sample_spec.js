// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

//const { it } = require("mocha");

// https://on.cypress.io/writing-first-test
describe("Visit Shapermint", () => {
  it("Visits Shapermint", () => {
    cy.visit("https://shapermint.com");
  });
});
describe("Click On Shop Now", () => {
  it("click CTA", () => {
    cy.wait(5000);
    cy.contains("SHOP NOW").click();
  });
});
describe("Enter Product", () => {
  it("click on product", () => {
    cy.contains("Shaper Panty").click();
  });
});
describe("Add To Cart", () => {
    it ("click on add to cart", () => {
        cy.wait(5000)
        cy.contains("Add to cart").click();
    });
});
