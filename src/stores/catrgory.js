import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';
export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([])

    //获取导航数据方法
    const getCategory = async () => {
        const res = await getCategoryAPI()

        categoryList.value = res.result

    }
    return {
        categoryList,
        getCategory
    }
})
