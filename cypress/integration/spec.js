it('clicks', () => {
  // window creation and url load
  cy.electronVisitUrl('./main_browser_window.js', 'http://localhost:4600')
  cy.get('button')
    .click()
    .click()
  cy.get('#clicked').should('have.text', '2')
})
