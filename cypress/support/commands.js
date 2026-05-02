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


Cypress.Commands.add('login', () => {
  cy.session('login session started', () => {
    cy.visit('/');


    cy.env(['username', 'password']).then(({ username, password }) => {


      cy.get('input#email').type(username);
      cy.get('input#password').type(password, { log: false }); // hides password in logs
      cy.get('button[type="submit"]').click();

      // Assert successful login
      cy.url().should('include', '/overview');
      cy.wait(2000); // Wait for login to complete
    });
  });
});
