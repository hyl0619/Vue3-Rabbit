<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/index'
import { onMounted } from 'vue'
const CategoryStore = useCategoryStore()
onMounted(() => {
  CategoryStore.getCategory()
})
</script>
<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
  <LayoutFixed></LayoutFixed>
</template>
