/// <reference types="cypress" />

describe("Projects flow", () => {  

  it("creates a new project", () => {

    cy.visit("http://localhost:5173");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Team Task Hub");
    });

    cy.contains("Add project").click();

    cy.contains("Team Task Hub")
      .should("exist");

  });

});