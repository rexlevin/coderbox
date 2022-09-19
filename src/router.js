const routes = [
    { type: 'node', name: 'welcome', title: '首页', path: './component/welcome.html', state: 0 },
    { type: 'node', name: 'pwd', title: '随机数/密码生成', path: './component/pwd.html', state: 0 },
    { type: 'group', name: '', title: '编码/加密', group: [
        { type: 'node', name: 'ascii', title: '中文/ASCii互转', path: './component/ascii.html', state: 0 },
        { type: 'node', name: 'utf8', title: '中文/UTF-8编码互转', path: './component/utf8.html', state: 0 },
        { type: 'node', name: 'base64', title: 'Base64编码/解码', path: './component/base64.html', state: 0 }
    ]},
    { type: 'group', name: '', title: '图形码', group: [
        { type: 'node', name: 'barcode', title: '条形码', path: './component/barcode.html', state: 0 },
        { type: 'node', name: 'qrcode', title: '二维码', path: './component/qrcode.html', state: 0 }
    ]}
]