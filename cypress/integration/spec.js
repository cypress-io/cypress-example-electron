it('works', () => {
  cy.wrap('electron.js').should('equal', 'electron.js')
})
