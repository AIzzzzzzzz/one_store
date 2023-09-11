import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI, findNewCartListAPI } from "@/apis/cart";
import { delCartAPI } from "@/apis/cart";
export const useCartStore = defineStore('cart', () => {
    const userStort = useUserStore()
    const isLogin = computed(() => userStort.userInfo.token)
    //定义state - cartList
    const cartList = ref([])
    //获取最新购物车的action
    const updataNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }





    //定义action-addCart
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            //登陆之后的逻辑
            await insertCartAPI({ skuId, count })
            const res = await findNewCartListAPI()
            cartList.value = res.result
        } else {
            //添加购物车逻辑
            //已添加过-count +1
            //没有添加过 -直接push
            //思路通过匹配传递过来的商品对象中的skuid能不能在cartlist中找打，找到了就是添加过
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                //找到了
                item.count++
            } else {
                cartList.value.push(goods)
            }
        }
    }

    //删除购物车
    const delCart = async (skuId) => {
        if (isLogin.value) {
            //调用接口实现接口购物城中的删除功能
            await delCartAPI([skuId])
            const res = await findNewCartListAPI()
            cartList.value = res.result

        } else {
            //思路：找到要删除的下标值 - splice
            //2.使用数组的过滤方法 - fillter
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }







    }
    //清除购物车
    const clearCart = () => {
        cartList.value = []
    }
    //单选功能
    const singleCheck = (skuId, selected) => {
        //通过skuId找到要修改的那一项 然后把他的selected修改为传过来的
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    //计算属性
    //1.总的数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    //2.总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    //3.已选择的数量
    const selsectCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    //4.选择数量总价
    const selsectPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))


    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    //全选功能
    const allCheck = (selected) => {
        //吧cartLise中的每一项都设置成selected
        cartList.value.forEach(item => item.selected = selected)
    }
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selsectCount,
        selsectPrice,
        clearCart,
        updataNewList
    }
}, {
    persist: true,
})