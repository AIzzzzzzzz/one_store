import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import Home from '@/views/Home/index.vue'
import category from '@/views/Category/index.vue'
import SubCategory from '@/views/sunCatagory/index.vue'
import Detail from '@/views/Detall/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBackVue from '@/views/Pay/PayBack.vue'
import Momber from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login', component: login
    },
    {
      path: '/', component: layout, children: [
        { path: '', component: Home },
        { path: '/category/:id', component: category },
        { path: '/category/sub/:id', component: SubCategory },
        { path: '/detail/:id', component: Detail },
        { path: 'cartlist', component: CartList },
        { path: 'checkout', component: Checkout },
        { path: 'pay', component: Pay },
        { path: 'paycallback', component: PayBackVue },
        {
          path: 'member', component: Momber, children: [
            { path: '', component: UserInfo },
            { path: 'order', component: UserOrder }
          ]
        },
      ]
    }
  ],
  //路由行为的配置项
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
