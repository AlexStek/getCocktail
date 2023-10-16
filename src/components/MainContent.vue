<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useCocktailsStore } from '@/stores/cocktails'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const store = useCocktailsStore()
const { cocktails } = storeToRefs(store)
const route = useRoute()

const code = computed(() => route.params?.code as string)

watchEffect(() => {
  if (code.value) {
    store.fetchCocktail(code.value)
  }
})
</script>

<template>
  <section class="content">
    <div class="cocktaile-info">
      <h1>The cocktaile title</h1>
      <p>Any description</p>
      <p>{{ code ? cocktails.get(code) : 'no data' }}</p>
    </div>
    <img 
      class="img"
      src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg" 
      alt="cocktaile image" 
    >
  </section>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  text-align: left;
}
.img {
  max-width: 400px;
}
.cocktaile-info {
  padding: 10px 20px;
}
</style>