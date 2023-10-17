export type TstrIngredient = `strIngredient${number}`
export type TstrMeasure = `strMeasure${number}`

export interface IDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  [key: TstrIngredient]: string | null;
  [key: TstrMeasure]: string | null;
}

export enum ECocktailCode {
  margarita = 'margarita',
  mojito = 'mojito',
  a1 = 'a1',
  kir = 'kir'
}