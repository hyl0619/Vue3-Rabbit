import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores'
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 50000
})
instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()

    if (userStore.userInfo.token) {
      config.headers.Authorization = `Bearer ${userStore.userInfo.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    console.log(err.response.data.message)
    ElMessage({ type: 'error', message: err.response.data.message })
    return Promise.reject(err)
  }
)
export default instance
