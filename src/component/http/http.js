
/*
 * params: [{state: 0/1, key: '', value: '', description: ''}]
 */
const app = {
    data() {
        return {
            chooseMethod: 'get',
            httpMethods: [
                {name: 'get', title: 'GET'}, {name: 'post', title: 'POST'},
                {name: 'put', title: 'PUT'}, {name: 'delete', title: 'DELETE'}
            ],
            params: [{key: 'x', value: 'lizl6', state: 1, description: '提交名称'}]
        }
    },
    created() {},
    mounted() {},
    methods: {}
}
Vue.createApp(app).mount('#app');