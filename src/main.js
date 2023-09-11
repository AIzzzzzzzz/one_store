import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
import App from './App.vue'
import router from './router'
//测试接口函数
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
    console.log(res);
})
const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

//定义全局指令

