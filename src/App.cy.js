import React from "react";
import App from "./App";

describe("should set default value of Timer to zero", () => {
  it("The default value of timer is zero", () => {
    cy.mount(<App />);
    cy.get("[data-cy=timer]").should("have.text", "Seconds: 0");
  });
});

describe("should set default value of renders to zero", () => {
  it("The default value of render is zero", () => {
    cy.mount(<App />);
    cy.get("[data-cy=render]").should("have.text", "Renders: 0");
  });
});

describe("should set focus on input box when focus button is clicked", () => {
  it("focusing to input on button click", () => {
    cy.mount(<App />);
    cy.get('[data-cy=focusButton]').click()
    cy.focused().should('have.attr', 'type', 'text')
  });
});

describe("should set color of input text to red when change color button is clicked", () => {
  it("changing color of input text on button click", () => {
    cy.mount(<App />);
    cy.get('[data-cy=colorButton]').click()
    cy.get('[data-cy=input]').should('have.attr', 'style', 'color: red;')
  });
});

