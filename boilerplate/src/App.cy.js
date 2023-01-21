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
