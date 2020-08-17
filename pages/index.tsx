import Head from "next/head";
import Link from "next/link";
import Headerbar from "../components/Header/headerbar";
import IconButton, { LinkIconButton } from "../components/icon-button";
import Searchbar from "../components/searchbar";

import styled from "styled-components";
import { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import RecipeList from "../components/recipes/recipe-list";

const Title = styled.h1`
  font-size: inherit;
  font-weight: bold;
  text-align: center;
  font-family: "Pacifico", cursive;
  font-size: ${(props) => props.theme.fontsizes.titleM};
  margin: 0;
`;

const Home: FunctionComponent<IndexProps> = (props: IndexProps) => {
  const recipes = props.recipes.map(recipe => {
    return {id: recipe.id, name: recipe.name}
  })

  return (
    <>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
        {/* TODO: Font import */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Headerbar>
          <IconButton icon="menu" />
          <Title>Recipes</Title>
          <Link href="/new" passHref>
            <LinkIconButton icon="add" />
          </Link>
        </Headerbar>
        <Searchbar />
        <RecipeList recipes={recipes}/>
      </main>
    </>
  );
}
type Recipe = {
  id: number;
  name: string;
  ingredients: string;
  instructions: string;
}


type IndexProps = {
  recipes: Recipe[];
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  //TODO: Remove this hack
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  let recipes: Recipe[] = [];
  const result = await fetch('https://localhost:5001/api/recipes');
  const data = await result.json();
  data.forEach((item: Recipe) => {
    recipes.push({id: item.id, name: item.name, ingredients: item.ingredients, instructions: item.instructions})
  });
  return { props: {recipes} };
}

export default Home;