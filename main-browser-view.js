// main-browser-view.js
// $ npx electron ./main-browser-view.js
const { app, BrowserView, BrowserWindow, remote } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      remote: true
    }
  })
  win.on('closed', () => {
    win = null
  })
  win.loadFile('main-browser-view.html')

  let view = new BrowserView()
  win.setBrowserView(view)
  view.setBounds({ x: 0, y: 50, width: 800, height: 50 })
  view.webContents.loadURL('https://electronjs.org')
}

app.on('ready', createWindow)
