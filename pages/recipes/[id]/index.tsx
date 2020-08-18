import Head from "next/head";
import Headerbar from "../../../components/Header/headerbar";
import { LinkIconButton } from "../../../components/icon-button";
import HeaderTitle from "../../../components/Header/header-title";
import Link from "next/link";
import { Recipe, getRecipe, RECIPE_ENDPOINT } from "../../../recipes/recipe";
import { useRouter } from 'next/router'
import styled from "styled-components";
import useSWR from "swr";
import FadeIn from "react-fade-in";
import RecipeImage from "../../../recipes/recipe-image";

const Container = styled.div`
    padding: ${props => props.theme.spacing.m};
`;

const Section = styled.div`
white-space: pre-line;
`;

const Heading = styled.h2`
    font-size: ${props => props.theme.fontsizes.l};
    font-weight: bold;
    margin-top: 0;
    ${Section} + & {
    margin-top: ${props => props.theme.spacing.xl};
    }
`;

const RecipeDetail: React.FunctionComponent = () => {
    const router = useRouter();
    const { data } = useSWR<Recipe>(router.query.id ? `${RECIPE_ENDPOINT}/${router.query.id}` : null, getRecipe)
    return (
        <>
            <Head>
                <title>{data ? data.name : 'Recipe'}</title>
            </Head>
            <main>
                <Headerbar>
                    <Link href="/" passHref>
                        <LinkIconButton icon="arrow_back" />
                    </Link>
                    {data ? <HeaderTitle title={data.name} /> : <></>}
                    {data ? <Link href="/recipes/[id]/edit" as={`/recipes/${data.id}/edit`} passHref>
                        <LinkIconButton icon="create" />
                    </Link> : <LinkIconButton icon="create" disabled />}
                </Headerbar>
                {data ? <FadeIn>
                    <RecipeImage src="/recipe.png" alt="Recipe Image" />
                    <Container>
                        <Heading>Ingredients</Heading>
                        <Section>{data.ingredients}</Section>
                        <Heading>Instruction</Heading>
                        <Section>{data.instructions}</Section>
                    </Container></FadeIn> : <></>}
            </main>
        </>
    );
}



export default RecipeDetail;
