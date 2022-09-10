const app = {
    data() {
        return {
            routes: [
                {
                    name: 'welcome',
                    path: './component/welcome.html',
                    state: 0
                },
                {
                    name: 'pwd',
                    path: './component/pwd.html',
                    state: 0
                },
                {
                    name: 'ascii',
                    path: './component/ascii.html',
                    state: 0
                }
            ],
            dataPwd: {
                genCount: 5
            }
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
        document.getElementById('content').innerHTML = '<object type="text/html" data="./component/welcome.html" width="100%" height="600px"></object>';
    },
    methods: {
        to(name) {
            let p = route(name, this.routes)
            if('' == p) return;
            document.getElementById('content').innerHTML = '<object type="text/html" data="' + p + '" width="100%" height="100%"></object>';
        }
    }
}
Vue.createApp(app).mount('#app');

function route(name, routes) {
    let p = '';
    for(let j of routes) {
        if(name == j['name']) {
            if(1 == j['state']) {
                break;
            }
            p = j['path'];
            j['state'] = 1;
        } else {
            j['state'] = 0;
        }
    }
    return p;
}