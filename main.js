const { app } = require('electron')
const MainBrowserWindow = require('./main_browser_window')

let win

function createWindow () {
  // Create the browser window.
  win = MainBrowserWindow()

  // and load whatever file you want
  // win.loadFile('aut.html')
  win.loadURL('http://localhost:4600')
}

app.on('ready', createWindow)
