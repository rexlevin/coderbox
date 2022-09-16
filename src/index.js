const routes = [
    {
        name: 'welcome', title: '首页', path: './component/welcome.html', state: 0
    }, {
        name: 'pwd', title: '随机数/密码生成', path: './component/pwd.html', state: 0
    }, {
        name: 'ascii', title: '中文/ASCii互转', path: './component/ascii.html', state: 0
    }, {
        name: 'utf8', title: '中文/UTF-8编码互转', path: './component/utf8.html', state: 0
    }, {
        name: 'base64', title: 'Base64编码/解码', path: './component/base64.html', state: 0
    }, {
        name: 'barcode', title: '条形码', path: './component/barcode.html', state: 0
    }, {
        name: 'qrcode', title: '二维码', path: './component/qrcode.html', state: 0
    }
]

const app = {
    data() {
        return {
            routes: routes,
            dataPwd: {
                genCount: 5
            },
            title: '',
            see: false
        }
    },
    created() {
        document.addEventListener('keyup', (e) => {
            if (e.ctrlKey && e.shiftKey && (e.key == 'I' || e.key ==  'i')) {
                window.api.devTools();
            }
            if (e.ctrlKey && (e.key == 'r' || e.key == 'R')) {
                window.api.reload();
            }
        });
    },
    mounted() {
        // 设置title
        window.api.getTitle('title', (v) => {
            document.title = v;
        });
        this.title = '首页', this.see = true;
        document.getElementById('content').innerHTML = '<object type="text/html" data="./component/welcome.html" width="100%" height="600px"></object>';
    },
    methods: {
        refresh() {
            window.api.reload();
        },
        to(name) {
            let route = getRoute(name, this.routes)
            if(undefined == route || '' == route) return;
            this.title = route.title;
            this.see = (undefined != route.title && '' != route.title)
            setRouteState(route, this.routes)
            document.getElementById('content').innerHTML = '<object type="text/html" data="' + route.path + '" width="100%" height="100%"></object>';
        }
    }
}
Vue.createApp(app).mount('#app');

function refresh() {
    window.api.reload();
}
function devTools() {
    window.api.devTools();
}

function setRouteState(route, routes) {
    for(let j of routes) {
        if(route.name == j.name) {
            j.state = 1;
        } else {
            j.state = 0;
        }
    }
}

function getRoute(name, routes) {
    let r = '';
    for(let j of routes) {
        if(name == j['name']) {
            if(1 == j['state']) {
                break;
            }
            r = j;
        }
    }
    return r
}
