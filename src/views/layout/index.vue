 
 
<script setup>
import layoutfixed from './components/layoutfixed.vue';
import LayoutNav from '@/views/layout/components/layoutNav.vue'
import LayoutHeader from '@/views/layout/components/layoutHeader.vue'
import LayoutFooter from '@/views/layout/components/layoutFooter.vue'
import { useCategoryStore } from '@/stores/catrgory'
import { onMounted } from 'vue';

const categoryStore = useCategoryStore()
onMounted(() => {
    categoryStore.getCategory()
})
</script>

<template>
    <layoutfixed></layoutfixed>
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加key 破坏复用机制 -->
    <RouterView :key="$route.fullPath" />
    <LayoutFooter />
</template>