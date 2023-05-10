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