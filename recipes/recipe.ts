import axios from "axios";

export type Recipe = {
    id?: number;
    name: string;
    ingredients: string;
    instructions: string;
    imagepath: string;
}

export const RECIPE_ENDPOINT = 'https://localhost:5001/api/recipes';

export const getRecipe = async(url: string) => {
    return axios.get<Recipe>(url).then(response => response.data);
}