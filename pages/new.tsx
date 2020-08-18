import axios from "axios";
import Head from "next/head";
import { FunctionComponent } from "react";
import React from "react";
import { useRouter } from "next/dist/client/router";
import RecipeForm from "../recipes/recipe-form";
import { Recipe, RECIPE_ENDPOINT } from "../recipes/recipe";

const createRecipe = async(recipe: Recipe) => {
  const response = await axios.post<Recipe>(RECIPE_ENDPOINT, recipe);
  return response.data;
}

const New: FunctionComponent = () => {
  const [name, onNameChange] = React.useState("");
  const [ingredients, onIngredientsChange] = React.useState("");
  const [instructions, onInstructionsChange] = React.useState("");
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const createdRecipe = await createRecipe({ name: name, ingredients: ingredients, instructions: instructions });
    router.push(`/recipes/${createdRecipe.id?.toString()}`);
  }
  return (
    <>
      <Head>
        <title>New Recipe</title>
      </Head>
      <main>
        <RecipeForm title="New Recipe" name={name} onNameChange={onNameChange}
          ingredients={ingredients} onIngredientsChange={onIngredientsChange}
          instructions={instructions} onInstructionsChange={onInstructionsChange}
          onSubmit={onSubmit}
        ></RecipeForm>
      </main>
    </>
  );
}

export default New;