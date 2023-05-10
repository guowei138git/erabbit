import axios from 'axios'

// 导出基准地址，原因：其他地方不是通过axios发请求的地方也会用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
// 创建axios实例
const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL,
  timeout: 5000
})