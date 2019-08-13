beforeEach(() => {
  console.log('before each test')

  return new Promise((resolve) => {
    // let the test window open the electron main window
    const mw = open('http://localhost:4600', 'mainWindow')
    // const mw = open('index.html', 'mainWindow')

    // if the proxy injects "document.domain = localhost"
    // then remote websites should work
    // const mw = window.mw = open('http://todomvc.com/examples/vue/', 'mainwindow')

    // TODO resolve when mw.document is valid
    // for now simply wait
    setTimeout(() => {
      cy.state('document', mw.document)
      resolve()
    }, 100)
  })

  // if main window has opened the test window
  // if (typeof top !== 'undefined' && top.opener) {
  //   cy.state('document', top.opener.document)
  // }
})
it('works', () => {
  // cy.wrap('electron.js').should('equal', 'electron.js')
  // cy.get('#node-version').should('equal', '12.4.0')
  cy.contains('Static page')
  cy.get('button').click().click()

  cy.get('input').type('Test typing').should('have.value', 'Test typing')
})

// for TodoMVC
it.skip('adds todos', () => {
  cy.get('.new-todo').type('one{enter}two{enter}')
})
