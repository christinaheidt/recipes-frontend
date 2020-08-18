import axios from "axios";

export type Recipe = {
    id?: number;
    name: string;
    ingredients: string;
    instructions: string;
}

const ENDPOINT = 'https://localhost:5001/api/recipes';

export const getRecipes = async () => {
    //TODO: Remove this
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
    const response = await axios.get<Recipe[]>(ENDPOINT);
    return response.data;
}

export const getRecipe = async(id: string) => {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
    const response = await axios.get<Recipe>(`${ENDPOINT}/${id}`);
    return response.data;
}

export const createRecipe = async(recipe: Recipe) => {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
    const response = await axios.post<Recipe>(ENDPOINT, recipe);
    return response.data;
}