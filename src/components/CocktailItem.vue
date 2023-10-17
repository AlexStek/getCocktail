<script setup lang="ts">
import { computed } from 'vue'
import { IDrink, TstrIngredient, TstrMeasure } from '@/types'

const props = defineProps<{
  cocktaile: IDrink
}>()

const ingredients = computed(() => {
  const result = []
  let index = 1
  const _cocktaile = props.cocktaile
  let keyIngridient = `strIngredient${index}` as TstrIngredient
  let keyMeasure = `strMeasure${index}` as TstrMeasure
  while (keyIngridient in _cocktaile && _cocktaile[keyIngridient]) {
    result.push([
      props.cocktaile[keyIngridient], 
      props.cocktaile[keyMeasure]
    ])
    index++
    keyIngridient = `strIngredient${index}`
    keyMeasure = `strMeasure${index}`
  }
  return result
})
</script>

<template>
  <div class="cocktaile">
    <div class="cocktaile-info">
      <h1>{{ cocktaile.strDrink }}</h1>
      <p>Instruction: {{ cocktaile.strInstructions }}</p>
      <h2>List of ingredients</h2>
      <ul>
        <li 
          v-for="([ingredient, measure], key) in ingredients" 
          :key="key"
        >
          <span>{{ measure }}</span>
          <span>{{ ingredient }}</span>
        </li>
      </ul>
    </div>
    <img 
      class="img"
      :src="cocktaile.strDrinkThumb" 
      alt="cocktaile image" 
    >
  </div>
</template>

<style scoped lang="scss">
.cocktaile {
  display: flex;
}
.img {
  max-width: 400px;
}
.cocktaile-info {
  padding: 10px 20px;
  flex-grow: 1;
}
</style>