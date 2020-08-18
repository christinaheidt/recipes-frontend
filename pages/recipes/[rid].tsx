import Head from "next/head";
import Headerbar from "../../components/Header/headerbar";
import { LinkIconButton } from "../../components/icon-button";
import HeaderTitle from "../../components/Header/header-title";
import Link from "next/link";
import { Recipe, getRecipe } from "../../recipes/recipe";
import { GetServerSideProps } from "next";
import styled from "styled-components";

type RecipeDetailProps = {
    recipe: Recipe;
}

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 75%;
`

const Container = styled.div`
    padding: ${props => props.theme.spacing.m};
`;

const Section = styled.div`
white-space: pre-line;
`

const Heading = styled.h2`
    font-size: ${props => props.theme.fontsizes.l};
    font-weight: bold;
    margin-top: 0;
    ${Section} + & {
    margin-top: ${props => props.theme.spacing.xl};
    }
`;

const RecipeDetail: React.FunctionComponent<RecipeDetailProps> = (props) => {
    return (
        <>
            <Head>
                <title>{props.recipe.name}</title>
            </Head>
            <main>
                <Headerbar>
                    <Link href="/" passHref>
                        <LinkIconButton icon="arrow_back" />
                    </Link>
                    <HeaderTitle title={props.recipe.name} />
                    <Link href="/new" passHref>
                        <LinkIconButton icon="create" />
                    </Link>
                </Headerbar>
                <Image  src="/recipe.png" alt="Recipe Image"></Image>
                <Container>
                    <Heading>Ingredients</Heading>
                    <Section>{props.recipe.ingredients}</Section>
                    <Heading>Instruction</Heading>
                    <Section>{props.recipe.ingredients}</Section>
                </Container>
            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<RecipeDetailProps> = async (context) => {
    const { rid } = context.query;
    const recipeId = rid as string;
    var recipe = await getRecipe(recipeId);
    return { props: { recipe: recipe } };
}



export default RecipeDetail;
