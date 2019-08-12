it('works', () => {
  // cy.wrap('electron.js').should('equal', 'electron.js')
  cy.get('#node-version').should('equal', '12.4.0')
})
