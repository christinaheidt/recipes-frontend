import Head from "next/head";
import Link from "next/link";
import Headerbar from "../components/Header/headerbar";
import IconButton, { LinkIconButton } from "../components/icon-button";
import Searchbar from "../components/searchbar";

import styled from "styled-components";
import { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import RecipeList from "../recipes/recipe-list";
import { Recipe, getRecipes } from "../recipes/recipe";
import React from "react";

const Title = styled.h1`
  font-size: inherit;
  font-weight: bold;
  text-align: center;
  font-family: "Pacifico", cursive;
  font-size: ${(props) => props.theme.fontsizes.titleM};
  margin: 0;
`;

type IndexProps = {
  recipes: Recipe[];
}

const Home: FunctionComponent<IndexProps> = (props) => {
  const [filter, onFilterChange] = React.useState("");
  return (
    <>
      <Head>
        <title>Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Headerbar>
          <IconButton icon="menu" />
          <Title>Recipes</Title>
          <Link href="/new" passHref>
            <LinkIconButton icon="add" />
          </Link>
        </Headerbar>
        <Searchbar filter={filter} onFilterChange={onFilterChange}/>
        <RecipeList recipes={props.recipes.filter(recipe => recipe.name.toUpperCase().indexOf(filter.toUpperCase().trimStart().trimEnd()) >= 0)}/>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  var recipes = await getRecipes();
  return { props: {recipes} };
}

export default Home;