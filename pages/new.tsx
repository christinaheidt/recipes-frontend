import Head from "next/head";
import Link from "next/link";
import Headerbar from "../components/Header/headerbar";
import HeaderTitle from "../components/Header/header-title";
import IconButton, { LinkIconButton } from "../components/icon-button";
import TextField, { TextArea } from "../components/text-field/text-field";
import styled from "styled-components";
import { FunctionComponent } from "react";
import React from "react";
import { createRecipe } from "../recipes/recipe";
import { useRouter } from "next/dist/client/router";
import FadeIn from "react-fade-in";


const Container = styled.div`
  padding: ${props => props.theme.spacing.m}
`

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
        <form onSubmit={(e) => onSubmit(e)}>
          <Headerbar>
            <Link href="/" passHref>
              <LinkIconButton icon="clear" />
            </Link>
            <HeaderTitle title="New Recipe" />
            <IconButton icon="check" type="submit" />
          </Headerbar>
          <Container>
            <FadeIn>
              <TextField label="Name" value={name} onChange={(e) => onNameChange(e.target.value)} type="text" required />
              <TextArea label="Ingredients" value={ingredients} onChange={(e) => onIngredientsChange(e.target.value)} rows={12} />
              <TextArea label="Instructions" value={instructions} onChange={(e) => onInstructionsChange(e.target.value)} rows={12} />
            </FadeIn>
          </Container>
        </form>
      </main>
    </>
  );
}

export default New;