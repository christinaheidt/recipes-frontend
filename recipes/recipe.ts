import axios from "axios";

export type Recipe = {
    id?: number;
    name: string;
    ingredients: string;
    instructions: string;
}

export const RECIPE_ENDPOINT = 'https://localhost:5001/api/recipes';

export const getRecipe = async(url: string) => {
    return axios.get<Recipe>(url).then(response => response.data);
}

export const createRecipe = async(recipe: Recipe) => {
    const response = await axios.post<Recipe>(RECIPE_ENDPOINT, recipe);
    return response.data;
}