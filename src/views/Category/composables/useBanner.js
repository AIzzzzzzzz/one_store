import { ref, onMounted } from "vue";
import { getbannerAPI } from '@/apis/home';
export function useBanner() {
    //获取banner
    const homeList = ref([])
    const bannerapi = async () => {
        const res = await getbannerAPI({
            distributionSite: '2'
        })

        homeList.value = res.result
    }
    onMounted(() => {
        bannerapi()
    })
    return {
        homeList
    }
}

