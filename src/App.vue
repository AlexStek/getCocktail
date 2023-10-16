<script setup lang="ts">
import NavList from '@/components/NavList.vue'
import MainContent from '@/components/MainContent.vue'
</script>

<template>
  <div class="layout">
    <NavList />
    <MainContent />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
}
</style>
