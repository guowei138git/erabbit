import axios from 'axios'
import store from '@/store'
import router from '@/router'

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

// 响应拦截器
instance.interceptors.response.use((res) => {
    // 1.剥离无效数据 - 取出data数据
    res.data
}, err =>{
    // 401 状态码 -> 进入该函数 - 处理token失效
    if (err.response && err.response.status === 401) {
        // 2.清空无效用户信息
        store.commit('user/setUser', {})
        // 3.跳转之前需要 - 传参(当前路由地址) 给登录页面
        // 在组件里： `/user?a=10` 获取：$route.path = /user 和 $route.fullPath = /user?a=10
        // 在js模块中： router.currentRoute.value.fullPath -> 就是当前路由地址
        // 备注：router.currentRoute 是ref响应式数据
        const fullPath = router.currentRoute.value.fullPath
        // 转换uri编码 - 防止解析地址出问题
        const url = encodeURIComponent(fullPath)
        // 4.跳转到登录页面
        router.push('/login?redirectUrl=' + url)
    }
    return Promise.reject(err)
})

// 导出一个函数 - 请求工具函数
export default (url, method, submitData) => {
    // 负责发请求：请求地址，请求方式，提交的数据
    return instance({
        url, // 请求地址
        method, // 请求方式
        // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
        // 2. 如果不get请求  需要使用data来传递submitData   请求体传参
        // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
        // []: submitData  // 提交的数据 
        // method参数：get,Get,GET  转换成小写再来判断 - toLowerCase()
        // 在对象，['params']:submitData ===== params:submitData 这样理解
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}