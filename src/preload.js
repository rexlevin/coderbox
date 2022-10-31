const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
        openWindow: (window, title, path) => {
            ipcRenderer.send(window, title, path)
        },
        devTools: () => {ipcRenderer.send('devTools');},
        reload: () => {ipcRenderer.send('reload');},
        notification: (option) => {
            new window.Notification(option.title, option);
        },
        getTitle: (val, cb) => {
            ipcRenderer.send('title', val);
            ipcRenderer.on('title-reply', (e, r) => {
                cb(r);
            });
        },
        exit: () => {ipcRenderer.send('exit');}
    }
);