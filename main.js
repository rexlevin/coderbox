const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron')
const path = require('path')
const package = require('./package.json')

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win;

app.whenReady().then(() => {
    createTray();
    createWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});

const createWindow = () => {
    Menu.setApplicationMenu(null);
    win = new BrowserWindow({
        width: 1300,
        height: 800,
        minWidth: 1200,
        minHeight: 800,
        icon: path.join(__dirname, './src/logo.png'),
        webPreferences: {
            preload: path.join(__dirname, './src/preload.js'),
            spellcheck: false
        },
        useContentSize: true
    });
    win.loadFile('./src/index.html');
}

const createTray = () => {
    tray = new Tray(path.join(__dirname, './src/logo.png'));
    const menu = Menu.buildFromTemplate(trayMenuTemplate);
    tray.setContextMenu(menu);
}

const trayMenuTemplate = [{
    label: 'about',
    type: 'normal',
    click: function() {
        alert('encoder');
    }
}, {
    label: 'quit',
    type: 'normal',
    click: function() {
        app.quit();
    }
}]

ipcMain.on('devTools', () => {
    if(win.webContents.isDevToolsOpened()) win.webContents.closeDevTools();
    else win.webContents.openDevTools();
});
ipcMain.on('reload', () => {
    win.reload();
    // win.webContents.reload();
});
ipcMain.on('exit', () => {
    app.quit();
});
ipcMain.on('title', (e, arg) => {
    e.reply('title-reply', package['description'] + ' -v' + package.version);
});