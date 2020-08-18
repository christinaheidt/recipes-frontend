import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import { RECIPE_ENDPOINT, Recipe, getRecipe } from "../../../recipes/recipe";
import React from "react";
import RecipeForm from "../../../recipes/recipe-form";
import Head from "next/head";

const updateRecipe = async(recipe: Recipe) => {
    const response = await axios.put<Recipe>(`${RECIPE_ENDPOINT}/${recipe.id}`, recipe);
    return response.data;
  }

const EditRecipe: React.FunctionComponent = () => {
    const router = useRouter();
    const { data } = useSWR<Recipe>(router.query.id ? `${RECIPE_ENDPOINT}/${router.query.id}` : null, getRecipe, { refreshInterval: 0 });
    const [name, onNameChange] = React.useState(data ? data.name : "");
    const [ingredients, onIngredientsChange] = React.useState(data ? data.ingredients : "");
    const [instructions, onInstructionsChange] = React.useState(data ? data.instructions : "");

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const upDatedRecipe = await updateRecipe({id: data?.id, name: name, ingredients: ingredients, instructions: instructions });
        router.push(`/recipes/${data?.id}`);
    }
    return (<>
        <Head>
            <title>{name ?  name : 'Edit Recipe'}</title>
        </Head>
        <main>
            {data ? <RecipeForm title={name ?  name : 'Edit Recipe'} name={name} onNameChange={onNameChange}
                ingredients={ingredients} onIngredientsChange={onIngredientsChange}
                instructions={instructions} onInstructionsChange={onInstructionsChange}
                onSubmit={onSubmit}
            ></RecipeForm> : <></>}
        </main>
    </>)
}

export default EditRecipe;