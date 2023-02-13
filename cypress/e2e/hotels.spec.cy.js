describe("Cypress", () => {
  it("opens the app and click on a hotel", () => {
    cy.visit("http://localhost:3000");

    cy.get("a").first().click();
    cy.location("pathname").should("include", "hotel");

    cy.get("[data-cy=addReview]").click();
    cy.location("pathname").should("include", "new");
  });
});
