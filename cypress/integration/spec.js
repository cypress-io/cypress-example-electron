const url = require('url')
const path = require('path')

// escape Cypress browserify bundler!
const trueProcess = global['process']
console.log('true process reference', trueProcess)
console.log('true process.cwd() "%s"', trueProcess.cwd())

beforeEach(() => {
  console.log('before each test')
  console.log('directory', __dirname)
  console.log('filename', __filename)

  const indexFileUrl = url.format({
    pathname: path.join(trueProcess.cwd(), 'index.html'),
    protocol: 'file:',
    slashes: true
  })
  console.log('index file url "%s"', indexFileUrl)

  return new Promise((resolve) => {
    const replace = true
    // let the test window open the electron main window
    const mw = open('http://localhost:4600', 'mainWindow')
    // const mw = window.mw = open(indexFileUrl, 'mainWindow', replace)

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
  cy.get('#node-version').should('have.text', '12.4.0')
  cy.contains('Static page')
  cy.get('button').click().click()

  cy.get('input').type('Test typing').should('have.value', 'Test typing')
})

// for TodoMVC
it.skip('adds todos', () => {
  cy.get('.new-todo').type('one{enter}two{enter}')
})
