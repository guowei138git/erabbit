import axios from 'axios'
import store from '@/store'

// 导出基准地址，原因：其他地方不是通过axios发请求的地方也会用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
// 创建axios实例
const instance = axios.create({
    // axios 的一些配置，baseURL  timeout
    baseURL,
    timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
    // 拦截业务逻辑 - 进行请求配置的修改
    // 如果本地有 token 则在头部携带
    // 1.获取用户信息对象 - profiel
    const { profile } = store.state.user
    // 2.判断是否有token
    if (profile.token) {
        // 3.设置token
        config.headers.Authorization = `Bearer ${profile.token}`
    }
    // 返回 - config
    return config
}, err => {
    return Promise.reject(err)
})

// 导出一个函数 - 请求工具函数
export default (url, method, submitData) => {
    // 负责发请求：请求地址，请求方式，提交的数据
    return instance({
        url,
        method,
        // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
        // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
        // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
        // method参数：get,Get,GET  转换成小写再来判断
        // 在对象，['params']:submitData ===== params:submitData 这样理解
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}