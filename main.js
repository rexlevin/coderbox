const { app, BrowserWindow, Menu, Tray, ipcMain, dialog } = require('electron')
const path = require('path')
const package = require('./package.json')

// 清除启动时electron的安全告警：Electron Security Warning (Insecure Content-Security-Policy)
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
        width: 1000,
        height: 700,
        minWidth: 1000,
        minHeight: 700,
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
    label: 'About',
    type: 'normal',
    click: function() {
        dialog.showMessageBox({
            type: 'info',
            title: '关于',
            message: package.name + ':' + package.version + '\n' + package.description + '\nnode:' + process.versions['node'] + '\nchrome:' + process.versions['chrome'] + '\nelectron:' + process.versions['electron']
        });
    }
}, {
    label: 'Project Repository',
    type: 'normal',
    click: function() {
        let exec = require('child_process').exec
            , locale = app.getLocale()
            , url = ''
        // 使用ip的话要么自己维护一个ip库放在外部（太大，没必要放项目里），要么使用第三方，都需要进行网络交互
        // 所以这里使用一个最粗略的方式“语言环境”来判断是否是中国大陆
        if(locale.indexOf('zh-CN') == -1) {
            url = 'https://github.com/rexlevin/coderbox'
        } else {
            url = 'https://gitee.com/rexlevin/coderbox'
        }
        exec('open ' + url)
    }
}, {
    label: 'Quit',
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