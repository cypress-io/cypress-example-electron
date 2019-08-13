beforeEach(() => {
  console.log('before each test')
  if (typeof top !== 'undefined' && top.opener) {
    cy.state('document', top.opener.document)

  }
})
it('works', () => {
  // equivalent of "cy.visit"

  // cy.wrap('electron.js').should('equal', 'electron.js')
  // cy.get('#node-version').should('equal', '12.4.0')
  cy.contains('Static page')
  cy.get('button').click().click()

  cy.get('input').type('Test typing').should('have.value', 'Test typing')
})
