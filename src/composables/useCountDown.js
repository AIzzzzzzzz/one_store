import { computed, onUnmounted, ref } from "vue"
import dayjs from 'dayjs'
//封装倒计时逻辑函数
export const useCountDown = () => {
    //1.响应式数据
    const time = ref(0)
    //格式或时间为多少分多少秒
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    let timer = null
    //2.开启倒计时函数
    const start = (currentTime) => {
        //开始倒计时逻辑
        //思路每隔一秒执行减一
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000);
    }
    //组件销毁时清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start,
    }
}