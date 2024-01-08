const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    autoHideMenuBar: true,
    icon: path.join(__dirname, './icon256.png'),
  });

  win.maximize();

  win.loadFile('index.html');

  win.webContents.once('dom-ready', () => {
    win.webContents.executeJavaScript(`
      function updateTitleAndHeader() {
        const urlParams = new URLSearchParams(window.location.search);
        const modelName = urlParams.get('model');

        if (modelName) {
          const namePart = modelName.split(':')[0];
          const decodedName = decodeURIComponent(namePart);

          function formatModelName(name) {
            return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
          }

          document.title = 'Chat with ' + formatModelName(decodedName);

          const h1Element = document.querySelector('h1');
          h1Element.textContent = 'Chat with ' + formatModelName(decodedName);
        }
      }

      setInterval(updateTitleAndHeader, 10);

      updateTitleAndHeader();
    `);
  });
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

