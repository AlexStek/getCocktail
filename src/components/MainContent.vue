<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktails'
import { storeToRefs } from 'pinia'

const store = useCocktailsStore()
store.fetchCocktail('margarita')
const { cocktails } = storeToRefs(store)
</script>

<template>
  <section class="content">
    <div class="cocktaile-info">
      <h1>The cocktaile title</h1>
      <p>Any description</p>
      <p>{{ cocktails }}</p>
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