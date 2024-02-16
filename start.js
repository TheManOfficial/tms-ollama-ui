const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    autoHideMenuBar: true,
    frame: true,
    icon: path.join(__dirname, './icon256.png'),
  });

  win.maximize();

  win.loadFile('index.html');
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

