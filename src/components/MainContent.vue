<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import CocktailItem from '@/components/CocktailItem.vue'
import { useCocktailsStore } from '@/stores/cocktails'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { ECocktailCode } from '@/types'

const store = useCocktailsStore()
const { cocktails } = storeToRefs(store)
const route = useRoute()

const code = computed(() => route.params?.code as ECocktailCode)

watchEffect(() => {
  if (code.value in ECocktailCode) {
    store.fetchCocktail(code.value as ECocktailCode)
  }
})

const drinks = computed(() => {
  return cocktails.value.get(code.value) || []
})
</script>

<template>
  <section class="content">
    <CocktailItem 
      v-for="cocktaile in drinks"
      :key="cocktaile.idDrink"
      :cocktaile="cocktaile" 
    />
  </section>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>