export interface Recipe {
  uuid: string;
  name: string;
  ingredients: Ingredient[];
}

interface Ingredient {
  name: string;
  quantity: number;
  measurement: string;
}
