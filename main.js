const { app, BrowserWindow, Menu, Tray, ipcMain, dialog } = require('electron')
const Store = require('electron-store');
const path = require('path')
const package = require('./package.json')

// 清除启动时electron的安全告警：Electron Security Warning (Insecure Content-Security-Policy)
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

// 禁用当前应用程序的硬件加速
app.disableHardwareAcceleration();

let win;
const store = new Store();

app.whenReady().then(() => {
    createTray();
    createWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});

const createWindow = () => {
    Menu.setApplicationMenu(null);

    // 启动恢复主窗口位置和大小
    let isMax = store.get('isMax') ? true : false
        , position = store.get('mainPosition')
        , config = {};
    if(!isMax && !('' == position || undefined == position)) {
        config.width = position.width;
        config.height = position.height;
        config.x = position.x;
        config.y = position.y;
    } else if(!isMax && ('' == position || undefined == position)) {
        config.width = 900;
        config.height = 700;
    }
    config.minWidth = 900;
    config.minHeight = 700;
    config.icon = path.join(__dirname, './src/logo.png');
    config.webPreferences = {
        preload: path.join(__dirname, './src/preload.js'),
        spellcheck: false
    }
    config.useContentSize = true;

    win = new BrowserWindow(config);
    if(isMax) win.maximize();
    win.loadFile('./src/index.html');

    // 打开开发者窗口
    // win.webContents.openDevTools();
    
    // 启动恢复主窗口位置和大小
    // let position = store.get('mainPosition')
    // if(!('' == position || undefined == position)) {
    //     win.setContentBounds(position)
    // }

    // 关闭主窗口事件，记录窗口大小和位置
    win.on('close', (e) => {
        console.info('close main window, we need record postion of mainWindow and it\'s size');
        store.set('isMax', win.isMaximized())
        store.set('mainPosition', win.getContentBounds())
    });
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
    e.reply('title-reply', package.name + ' - ' + package['description'] + ' - v' + package.version);
});

let winHttp;
ipcMain.on('windowHttp', (e, title, filePath) => {
    if(null != winHttp && undefined != winHttp) {
        winHttp.show();
        return;
    }
    winHttp = new BrowserWindow({
        width: 1100,
        height: 800,
        minWidth: 1100,
        minHeight: 800,
        frame: true,
        title: title,
        // parent: win
        parent: null,
        webPreferences: {
            preload: path.join(__dirname, './src/preload.js'),
            spellcheck: false
        }
    });
    winHttp.loadFile(path.join(__dirname, './src', filePath));
    // winHttp.webContents.openDevTools();
    winHttp.on('closed',()=>{winHttp = null})
});