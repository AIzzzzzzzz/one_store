//承装分类数据的代码
import { ref, onMounted } from "vue"
import { useRoute } from 'vue-router';
import { getCategoryAPI } from '@/apis/category';
export function useCategory() {
    const categoryData = ref({})
    const router = useRoute()
    const getCategory = async () => {
        const res = await getCategoryAPI(router.params.id)
        categoryData.value = res.result
    }

    onMounted(() => {
        getCategory()
    })
    return {
        categoryData
    }
}