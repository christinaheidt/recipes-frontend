import Head from "next/head";
import Link from "next/link";
import Headerbar from "../components/Header/headerbar";
import IconButton, { LinkIconButton } from "../components/icon-button";
import Searchbar from "../components/searchbar";

import styled from "styled-components";
import { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import RecipeList from "../recipes/recipe-list";
import { Recipe, RECIPE_ENDPOINT } from "../recipes/recipe";
import React from "react";
import useSWR from "swr";
import axios from "axios";

const Title = styled.h1`
  font-size: inherit;
  font-weight: bold;
  text-align: center;
  font-family: "Pacifico", cursive;
  font-size: ${(props) => props.theme.fontsizes.titleM};
  margin: 0;
`;

const getRecipes = (url: string) => {
  return axios.get<Recipe[]>(url).then(response => response.data);
}

const fetcher = (url: any) => fetch(url).then(r => r.json());

const Home: FunctionComponent = () => {
  const [filter, onFilterChange] = React.useState("");
  const { data, error } = useSWR<Recipe[]>(RECIPE_ENDPOINT, getRecipes)
  if (error) return <div>Uh-oh!</div>;
  if (!data) return <div>Loading...</div>;
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
        <Searchbar filter={filter} onFilterChange={onFilterChange} />
        <RecipeList recipes={data.filter(recipe => recipe.name.toUpperCase().indexOf(filter.toUpperCase().trimStart().trimEnd()) >= 0)} />
      </main>
    </>
  );
}

export default Home;