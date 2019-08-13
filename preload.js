console.log('in %s', __filename)
const path = require('path')
const fs = require('fs')

// Cypress test window will be loading from 'localhost'
document.domain = 'localhost'

const arg = require('arg')
const args = arg(
  {
    '--cypress-runner-url': String
  },
  { permissive: true }
) // allow unknown options
console.log('args are %o', args)
// console.log('process argv', process.argv)

if (args['--cypress-runner-url']) {
  console.log('opening test window', args['--cypress-runner-url'])

  const filename = path.join(__dirname, '555spec.html')
  // const fileSource = fs.readFileSync(filename, 'utf8')
  let testWindow = window.open(args['--cypress-runner-url'], 'testWindow')
  // let testWindow = window.open('', 'testWindow')
  // let testWindow = window.open(filename, 'testWindow')
  // let testWindow = window.open('http://localhost:4600/', 'testWindow')
  console.log('testWindow is', testWindow)

  // testWindow.document.write(fileSource)

  window.testWindow = testWindow
}
