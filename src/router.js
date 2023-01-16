const routes = [
    { type: 'node', name: 'welcome', title: '首页', path: './component/welcome.html', state: 0 },
    { type: 'node', name: 'pwd', title: '随机数/密码生成器', path: './component/pwd.html', state: 0 },
    { type: 'group', name: '', title: '编码/加密', group: [
        { type: 'node', name: 'encode', title: 'ASCii/UTF-8/Base64/Hex 编码转换', path: './component/encode.html', state: 0 },
        { type: 'node', name: 'aes', title: 'AES/DES/3DES', path: './component/aes.html', state: 0},
        { type: 'node', name: 'rsa', title: 'RSA非对称加解密/签名/验签', path: './component/rsa.html', state: 0}
    ]},
    { type: 'group', name: '', title: '哈希/散列', group: [
        { type: 'node', name: 'hash', title: 'Hash计算', path: './component/hash.html', state: 0},
        { type: 'node', name: 'filehash', title: '文件Hash计算', path: './component/filehash.html', state: 0}
    ]},
    { type: 'group', name: '', title: '图形码', group: [
        { type: 'node', name: 'barcode', title: '条形码', path: './component/barcode.html', state: 0 },
        { type: 'node', name: 'qrcode', title: '二维码', path: './component/qrcode.html', state: 0 }
    ]},
    { type: 'group', name: '', title: 'Url', group: [
        { type: 'node', name: 'urlparam', title: 'Url参数解析', path: './component/urlparams.html', state: 0 },
        { type: 'node', name: 'urlencode', title: 'Url编码', path: './component/urlencode.html', state: 0 }
    ] },
    {type: 'node', name: 'jsonTools', title: 'JSON工具', path: './component/jsonTools.html', state: 0},
    { type: 'group', name: '', title: '身份证', group: [
        {type: 'node', name: 'idGenerator', title: '身份证生成器', path: './component/idGenerator.html', state: 0},
        { type: 'node', name: 'idVerify', title: '身份证校验', path: './component/idVerify.html', state: 0}
    ]},
    {type: 'win', name: 'http', title: 'HTTP请求工具', window: 'windowHttp', path: './component/http/http.html', state: 0}
]