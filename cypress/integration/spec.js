'use strict'

const url = require('url')
const path = require('path')

// escape Cypress browserify bundler!
const trueProcess = global['process']
console.log('true process reference', trueProcess)
console.log('true process.cwd() "%s"', trueProcess.cwd())

// beforeEach(function openSeparateWindow () {
//   console.log('before each test')
//   console.log('directory', __dirname)
//   console.log('filename', __filename)

//   const indexFileUrl = url.format({
//     pathname: path.join(trueProcess.cwd(), 'index.html'),
//     protocol: 'file:',
//     slashes: true
//   })
//   console.log('index file url "%s"', indexFileUrl)

//   return new Promise(resolve => {
//     const replace = true
//     // let the test window open the electron main window
//     // ! replace / expose cy.visit to do "window.open"
//     const mw = (window.mw = open(
//       'http://localhost:4600',
//       // 'http://todomvc.com/',
//       'mainWindow',
//       replace
//     ))
//     // const mw = window.mw = open(indexFileUrl, 'mainWindow', replace)

//     // if the proxy injects "document.domain = localhost"
//     // then remote websites should work
//     // const mw = window.mw = open('http://todomvc.com/examples/vue/', 'mainwindow', replace)
//     // const mw = window.mw = open('https://example.cypress.io/', 'mainwindow', replace)

//     // TODO resolve when mw.document is valid
//     // for now simply wait
//     setTimeout(() => {
//       cy.state('document', mw.document)
//       cy.state('window', mw)
//       resolve()
//     }, 100)
//   })

//   // if main window has opened the test window
//   // if (typeof top !== 'undefined' && top.opener) {
//   //   cy.state('document', top.opener.document)
//   // }
// })

beforeEach(function justUsePlainVisitInIFrame () {
  cy.visit('http://localhost:4600')
})

it('works', () => {
  // cy.wrap('electron.js').should('equal', 'electron.js')
  cy.get('#node-version').should('have.text', '12.4.0')
  cy.contains('Static page')

  cy.window()
    .its('console')
    .then(console => cy.spy(console, 'log').as('console-log'))
  cy.get('button')
    .click()
    .click()

  cy.get('input')
    .type('Test typing')
    .should('have.value', 'Test typing')
})

// for TodoMVC
// it.skip('adds todos', () => {
//   cy.get('.new-todo').type('one{enter}two{enter}')
// })
