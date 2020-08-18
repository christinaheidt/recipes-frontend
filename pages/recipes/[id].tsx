import Head from "next/head";
import Headerbar from "../../components/Header/headerbar";
import { LinkIconButton } from "../../components/icon-button";
import HeaderTitle from "../../components/Header/header-title";
import Link from "next/link";
import { Recipe, getRecipe, RECIPE_ENDPOINT } from "../../recipes/recipe";
import { useRouter } from 'next/router'
import styled from "styled-components";
import useSWR from "swr";

type RecipeDetailProps = {
    recipeId: string;
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

const RecipeDetail: React.FunctionComponent = () => {
    const router = useRouter();
    const { data, error } = useSWR<Recipe>(`${RECIPE_ENDPOINT}/${router.query.id}`, getRecipe)
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
                    <Link href="/new" passHref>
                        <LinkIconButton icon="create" />
                    </Link>
                </Headerbar>
                <Image src="/recipe.png" alt="Recipe Image"></Image>
                <Container>
                    <Heading>Ingredients</Heading>
                    {data ? <Section>{data.ingredients}</Section> : <></>}
                    <Heading>Instruction</Heading>
                    {data ? <Section>{data.instructions}</Section> : <></>}
                </Container>
            </main>
        </>
    );
}


export default RecipeDetail;
