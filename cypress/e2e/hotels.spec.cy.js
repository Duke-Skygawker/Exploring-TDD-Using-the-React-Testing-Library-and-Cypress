describe("Cypress", () => {
  it("opens the app and click on a hotel", () => {
    cy.visit("http://localhost:3000");

    cy.get("a").first().click();
    cy.location("pathname").should("include", "hotel");
  });

  it("navigates to the form to add a review", () => {
    cy.get("button").contains("+ Add Review").click();
    cy.location("pathname").should("include", "new");
  });
});
