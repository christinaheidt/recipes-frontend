import axios from "axios";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import { RECIPE_ENDPOINT, Recipe, getRecipe } from "../../../recipes/recipe";
import React, { useState } from "react";
import RecipeForm from "../../../recipes/recipe-form";
import Head from "next/head";

const updateRecipe = async (recipe: Recipe) => {
    const response = await axios.put<Recipe>(`${RECIPE_ENDPOINT}/${recipe.id}`, recipe);
    return response.data;
}

const EditRecipe: React.FunctionComponent = () => {
    const router = useRouter();
    const { data } = useSWR<Recipe>(router.query.id ? `${RECIPE_ENDPOINT}/${router.query.id}` : null, getRecipe, { refreshInterval: 0 });

    const mutateName = (newName: string) => {
        mutate(`${RECIPE_ENDPOINT}/${router.query.id}`, { ...data, name: newName }, false);
    }
    const mutateIngredients = (newIngredients: string) => {
        mutate(`${RECIPE_ENDPOINT}/${router.query.id}`, { ...data, ingredients: newIngredients }, false);
    }
    const mutateInstructions = (newInstructions: string) => {
        mutate(`${RECIPE_ENDPOINT}/${router.query.id}`, { ...data, instruction: newInstructions }, false);
    }

    const [isSubmitted, onSubmittedChanged] = useState(false);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (!data) {
            return;
        }
        onSubmittedChanged(true);
        await updateRecipe(data);
        mutate('/api/user', { data })
        router.push(`/recipes/${data?.id}`);
    }

    return (<>
        <Head>
            <title>{data ? data.name : 'Edit Recipe'}</title>
        </Head>
        <main>
            {data ? <RecipeForm title={data.name ? data.name : 'Edit Recipe'} id={data.id} name={data.name} onNameChange={mutateName}
                ingredients={data.ingredients} onIngredientsChange={mutateIngredients}
                instructions={data.instructions} onInstructionsChange={mutateInstructions}
                onSubmit={onSubmit}
                disabled={isSubmitted}
            ></RecipeForm> : <></>}
        </main>
    </>)
}

export default EditRecipe;