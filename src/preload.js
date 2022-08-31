const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
        devTools: () => {ipcRenderer.send('devTools');},
        reload: () => {ipcRenderer.send('reload');},
        getTitle: (val, cb) => {
            ipcRenderer.send('title', val);
            ipcRenderer.on('title-reply', (e, r) => {
                cb(r);
            });
        },
        exit: () => {ipcRenderer.send('exit');}
    }
);