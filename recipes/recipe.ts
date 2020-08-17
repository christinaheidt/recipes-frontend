import axios from "axios";

export type Recipe = {
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
}

export const getRecipes = async () => {
    //TODO: Remove this
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
    const response = await axios.get<Recipe[]>('https://localhost:5001/api/recipes');
    return response.data;
}