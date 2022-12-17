// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

const getNewsletterUrlWithTrackingParameter = (elementSelector) => {
  cy.get(`[href*="${elementSelector}"]`).then((allUrlWithParameter) => {
    for (let url of allUrlWithParameter) {
      cy.get(url).should("exist");
      let hrefValue = url.href;
      const isTrackingParameter = hrefValue.includes(`${elementSelector}`);
      expect(isTrackingParameter).to.equal(true);
    }
  });
};
Cypress.Commands.add(
  "getNewsletterUrlWithTrackingParameter",
  getNewsletterUrlWithTrackingParameter
);
