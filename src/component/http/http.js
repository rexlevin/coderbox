/*
 * headers: [{state: 0/1, key: '', value: '', description: ''}]
 * params: [{state: 0/1, key: '', value: '', description: ''}]
 */
const app = {
    data() {
        return {
            chooseMethod: {name: 'get', title: 'GET'},
            httpMethods: [
                {name: 'get', title: 'GET'}, {name: 'post', title: 'POST'},
                {name: 'put', title: 'PUT'}, {name: 'delete', title: 'DELETE'}
            ],
            myUrl: '',
            headers: [{id: '1a2e3c5c-b439-47d4-9d55-6762291059d7', key: 'Content-Type', value: 'application/json;charset=UTF-8', state: 1, description: ''}],
            params: [{id: '63b56576-f4e5-4739-b7b7-6800ca914a95', key: 'x', value: 'lizl6', state: 1, description: '提交名称'}],
            myBody: '',
            myResponse: {title: 'Response'}
        }
    },
    created() {},
    mounted() {
        // console.info(this.headers.length)
        // if(0 === this.headers.length) {
        //     let sid = guid()
        //     this.headers.push({id: sid, key: '', value: '', state: 0, description: ''});
        // }
    },
    methods: {
        myChoose(name) {
            for(let item of this.httpMethods) {
                if(name == item.name) {
                    this.chooseMethod = item
                    break
                }
            }
        },
        addItem(type) {
            let objArr = ('header' == type) ? this.headers : this.params
                , f = false
                , sid = guid();
            for(let item of objArr) {
                if(undefined == item.key || null == item.key || '' == item.key) {
                    return;
                }
            }
            for(let item of objArr) {
                if(undefined == item.key || null == item.key || '' == item.key) {
                    return;
                }
            }
            objArr.push({id: sid, key: '', value: '', state: 0, description: ''});
            this.$nextTick(() => {
                this.$refs[`key-${sid}`][0].focus();
                this.$refs[`key-${sid}`][0].addEventListener('input', (e) => {
                    if(e.target.value === '') {
                        for(let item of objArr) {
                            if(item.id === sid) {
                                item.state = 0
                            }
                        }
                    } else {
                        for(let item of objArr) {
                            if(item.id === sid) {
                                item.state = 1
                            }
                        }
                    }
                });
            });
        },
        deleteItem(type, id) {
            let objArr = ('header' == type) ? this.headers : this.params
            // console.info('objArr==%s\ntype==%s\nid==%s', JSON.stringify(objArr), type, id)
            for(let i = 0; i < objArr.length; i++) {
                if(id == objArr[i].id) {
                    objArr.splice(i, 1)
                }
            }
            if(objArr.length === 0) {
                let sid = guid();
                objArr.push({id: sid, key: '', value: '', state: 0, description: ''});
                this.$nextTick(() => {
                    this.$refs[`key-${sid}`][0].focus();
                    this.$refs[`key-${sid}`][0].addEventListener('input', (e) => {
                        if(e.target.value === '') {
                            for(let item of objArr) {
                                if(item.id === sid) {
                                    item.state = 0
                                }
                            }
                        } else {
                            for(let item of objArr) {
                                if(item.id === sid) {
                                    item.state = 1
                                }
                            }
                        }
                    });
                })
            }
        },
        sendRequest() {
            let myMethod = this.chooseMethod.name
                , myHeaders = {}
                , myParams = {};
            for(let header of this.headers) {
                if(header.state === 1) {
                    myHeaders[header.key] = header.value
                }
            }
            console.info('myHeaders===%s', JSON.stringify(myHeaders))
            for(let param of this.params) {
                if(param.state === 1) {
                    myParams[param.key] = param.value
                }
            }
            console.info('myParam====%s', JSON.stringify(myParams))
            axios({
                method: myMethod,
                url: this.myUrl,
                headers: myHeaders,
                params: myParams,
                data: this.myBody
            }).then((response) => {
                // console.info(response)
                this.myResponse.title = 'Status: ' + response.status + ' ' + response.statusText
                this.myResponse.content = response.data
            }).catch((error) => {
                // console.info(error)
                this.myResponse.title = 'Status: ' + error.response.status + ' ' + error.response.statusText
                this.myResponse.content = error.response.data
            });
        }
    }
}
Vue.createApp(app).mount('#app');

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}