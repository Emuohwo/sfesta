describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('logs in using custom command', () => {
    cy.login();
  })
})