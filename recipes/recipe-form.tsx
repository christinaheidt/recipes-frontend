import Headerbar from "../components/Header/headerbar";
import Link from "next/link";
import HeaderTitle from "../components/Header/header-title";
import IconButton, { LinkIconButton } from "../components/icon-button";
import FadeIn from "react-fade-in";
import TextField, { TextArea } from "../components/text-field/text-field";
import styled from "styled-components";
import { ImageContainer, ImageContainerImage } from "./recipe-image";
import Button from "../components/button";

const Container = styled.div`
  padding: ${props => props.theme.spacing.m}
`

const FlexImageContainer = styled(ImageContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

type RecipeFormProps = {
    id?: number;
    title: string;
    name: string;
    ingredients: string;
    instructions: string;
    disabled?: boolean;
    onNameChange: (value: string) => void;
    onIngredientsChange: (value: string) => void;
    onInstructionsChange: (value: string) => void;
    onSubmit: (value: any) => void;
};


const RecipeForm: React.FunctionComponent<RecipeFormProps> = (props) => {
    return (
        <form onSubmit={(e) => props.onSubmit(e)}>
            <Headerbar>
                <Link href={props.id ? '/recipes/[id]' : '/'} as={props.id ? `/recipes/${props.id}` : ''} passHref>
                    <LinkIconButton icon="clear" disabled={props.disabled} />
                </Link>
                <HeaderTitle title={props.title} />
                <IconButton icon="check" type="submit" disabled={props.disabled} />
            </Headerbar>
            <FlexImageContainer>
                <ImageContainerImage src="/recipe-placeholder.png" alt="Recipe Image" />
                <Button type="button">Add Image</Button>
            </FlexImageContainer>
            <Container>
                <FadeIn>
                    <TextField label="Name" value={props.name} onChange={(e) => props.onNameChange(e.target.value)} type="text" required disabled={props.disabled} />
                    <TextArea label="Ingredients" value={props.ingredients} onChange={(e) => props.onIngredientsChange(e.target.value)} rows={12} disabled={props.disabled} />
                    <TextArea label="Instructions" value={props.instructions} onChange={(e) => props.onInstructionsChange(e.target.value)} rows={12} disabled={props.disabled} />
                </FadeIn>
            </Container>
        </form>
    );
}

export default RecipeForm;