<script setup lang="ts">
import NavList from '@/components/NavList.vue'
</script>

<template>
  <div class="layout">
    <NavList />
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  height: 100%;
  flex-direction: column;
  
  @media screen and (min-width: 768px) {
    padding: 1rem 0;
    flex-direction: row;
  }
}
</style>
