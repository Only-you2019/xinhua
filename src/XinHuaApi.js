import axios from 'axios/index'
import qs from 'qs'


axios.defaults.timeout = 5000;                        //响应时长
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
// axios.defaults.baseURL = 'http://api.hll666.xyz';   //配置接口地址
axios.defaults.baseURL = 'http://39.107.253.13:7777';   //配置接口地址
// 允许携带cookie
axios.defaults.withCredentials=true


//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    //对响应数据做些事
    if(!res.data.success){
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    console.log('网络异常')
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function post(url, params,headers) {
    return new Promise((resolve, reject) => {
        axios({
            method:'post',
            url:url,
            headers: {
                userToken:global.token,
                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            },
            params:params
        }).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        })
            .catch((error) => {
                reject(error)
            })
    })
}
//返回一个Promise(发送get请求)
export function get(url, params,headers) {
    return new Promise((resolve, reject) => {
        axios({
            method:'get',
            url:url,
            headers: {
                userToken:global.token
            },
            params:params
        }).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        })
            .catch((error) => {
                reject(error)
            })
    })
}
//发送delete请求(删除)
export function del(url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method:'delete',
            url:url,
            headers: {
                userToken:global.token,
                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            },
            params:params
        }).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        })
            .catch((error) => {
                reject(error)
            })
    })
}

//发送put请求(修改)
export function put(url, params,headers) {
    return new Promise((resolve, reject) => {
        axios({
            method:'put',
            url:url,
            headers: {
                'userToken':global.token,
                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            },
            params:params
        }).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        })
            .catch((error) => {
                reject(error)
            })
    })
}
export default {
    post,
    get,
    del,
    put
}
