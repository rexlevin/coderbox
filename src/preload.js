const { contextBridge, ipcRenderer, Notification } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
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