<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import CocktailItem from '@/components/CocktailItem.vue'
import { useCocktailsStore } from '@/stores/cocktails'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { ECocktailCode } from '@/types'

const store = useCocktailsStore()
const { cocktails } = storeToRefs(store)
const route = useRoute()
const error = ref(false)

const code = computed(() => route.params?.code as ECocktailCode)

watchEffect(() => {
  if (code.value in ECocktailCode) {
    error.value = false
    store.fetchCocktail(code.value as ECocktailCode)
  } else {
    error.value = true
  }
})

const drinks = computed(() => {
  return cocktails.value.get(code.value) || []
})
</script>

<template>
  <section class="content">
    <h1 v-if="error">
      {{ code }} is wrong name.<br>
      Please, select cocktail from the menu!
    </h1>
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
  overflow: auto;
  gap: 20px;
}
</style>