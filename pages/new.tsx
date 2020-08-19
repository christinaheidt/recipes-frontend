import axios from "axios";
import Head from "next/head";
import { FunctionComponent } from "react";
import React from "react";
import { useRouter } from "next/dist/client/router";
import RecipeForm from "../recipes/recipe-form";
import { Recipe, RECIPE_ENDPOINT } from "../recipes/recipe";

const createRecipe = async (recipe: Recipe) => {
  const response = await axios.post<Recipe>(RECIPE_ENDPOINT, recipe);
  return response.data;
}

const uploadImage = async (formData: FormData) => {
  return await axios.post<{ dbPath: string }>('https://localhost:5001/api/images', formData).then(response => `https://localhost:5001/${response.data.dbPath}`);
}

const New: FunctionComponent = () => {
  const [name, onNameChange] = React.useState("");
  const [ingredients, onIngredientsChange] = React.useState("");
  const [instructions, onInstructionsChange] = React.useState("");
  const [imagepath, onImagePathChange] = React.useState("");
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const createdRecipe = await createRecipe({ name: name, ingredients: ingredients, instructions: instructions, imagepath: imagepath });
    if (createdRecipe.id) {
      router.push(`/recipes/${createdRecipe.id.toString()}`);
    }
  }

  const onFileChange = async (file: any) => {
    const formData = new FormData();
    formData.append('image', file);
    const createdImagePath = await uploadImage(formData);
    onImagePathChange(createdImagePath)
  }
  return (
    <>
      <Head>
        <title>New Recipe</title>
      </Head>
      <main>
        <RecipeForm title="New Recipe"
          name={name} onNameChange={onNameChange}
          imagepath={imagepath}
          ingredients={ingredients} onIngredientsChange={onIngredientsChange}
          instructions={instructions} onInstructionsChange={onInstructionsChange}
          onSubmit={onSubmit}
          onFileChange={onFileChange}
        ></RecipeForm>
      </main>
    </>
  );
}

export default New;