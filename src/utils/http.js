import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
//axios
const router = useRouter()
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

//请求拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    //1.从pinia获取token数据
    const useStore = useUserStore()
    const token = useStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    //2.按照后端的要求拼接token数据
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const useStore = useUserStore()
    //统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    //401token失效处理
    //1.清除本地数据
    //2.挑战到登陆页
    if (e.response.status === 401) {
        useStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})

export default httpInstance