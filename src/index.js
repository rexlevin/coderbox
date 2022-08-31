const app = {
    data() {},
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
        // document.title = window.api.getDescription() + ' - v' + window.api.getVersion('jsonbox');
        window.api.getTitle('title', (v) => {
            document.title = v;
        });
    }
}
Vue.createApp(app).mount('#app');