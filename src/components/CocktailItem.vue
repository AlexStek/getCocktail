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
  <div class="cocktaile-card">
    <div class="cocktaile-info">
      <h1 class="cocktaile-name">
        {{ cocktaile.strDrink }}
      </h1>
      <div class="marks">
        <span>🍹 {{ cocktaile.strCategory }}</span>
        <span>🥃 {{ cocktaile.strAlcoholic }}</span>
        <span>🥛 {{ cocktaile.strGlass }}</span>
      </div>
      <p class="instructions">
        Instruction: {{ cocktaile.strInstructions }}
      </p>
      <h2>List of ingredients</h2>
      <ul>
        <li
          v-for="([ingredient, measure], key) in ingredients" 
          :key="key"
          class="ingredient" 
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
      loading="lazy"
    >
  </div>
</template>

<style scoped lang="scss">
.cocktaile-card {
  display: flex;
  background-color: #fff;
  box-shadow: 7px 7px 8px 3px rgba(0, 0, 0, 0.5);
  margin: 2em;
  font-family: 'Raleway', sans-serif;
}
.cocktaile-name {
  font-size: 30px;
  margin-bottom: 1em;
}
.img {
  max-width: 400px;
  object-fit: cover;
}
.cocktaile-info {
  padding: 10px 20px;
  flex-grow: 1;
}

.marks {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.instructions {
  margin: 1em auto;
}
.ingredient {
  list-style-type: none;
}
</style>