import { defineStore } from "pinia"
import { ref, Ref } from "vue"
import { IDrink, ECocktailCode } from '@/types'

export const useCocktailsStore = defineStore('cocktails',() => {
  const cocktails: Ref<Map<ECocktailCode, IDrink[]>> = ref(new Map<ECocktailCode, IDrink[]>())

  const fetchCocktail = async (code: ECocktailCode) => {
    if (cocktails.value.has(code)) return

    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`)
      const data = await res.json()
      cocktails.value.set(code, data?.drinks || [])
    } catch (error) {
      // 
    }
  }

  return {
    cocktails,
    fetchCocktail
  }
})