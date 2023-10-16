import { defineStore } from "pinia"
import { ref } from "vue"

export const useCocktailsStore = defineStore('cocktails',() => {
  const cocktails = ref(new Map)

  const fetchCocktail = async (code: string) => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`)
    const data = await res.json()
    cocktails.value.set(code, data)
  }

  return {
    cocktails,
    fetchCocktail
  }
})