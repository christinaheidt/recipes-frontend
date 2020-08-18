import Headerbar from "../components/Header/headerbar";
import Link from "next/link";
import HeaderTitle from "../components/Header/header-title";
import IconButton, { LinkIconButton } from "../components/icon-button";
import FadeIn from "react-fade-in";
import TextField, { TextArea } from "../components/text-field/text-field";
import styled from "styled-components";

const Container = styled.div`
  padding: ${props => props.theme.spacing.m}
`

type RecipeFormProps = {
    title: string;
    name: string;
    ingredients: string;
    instructions: string;
    onNameChange: (value: string) => void;
    onIngredientsChange: (value: string) => void;
    onInstructionsChange:  (value: string) => void;
    onSubmit: (value: any) => void;
};

const RecipeForm: React.FunctionComponent<RecipeFormProps> = (props) => {
    return (
        <form onSubmit={(e) => props.onSubmit(e)}>
            <Headerbar>
                <Link href="/" passHref>
                    <LinkIconButton icon="clear" />
                </Link>
                <HeaderTitle title={props.title} />
                <IconButton icon="check" type="submit" />
            </Headerbar>
            <Container>
                <FadeIn>
                    <TextField label="Name" value={props.name} onChange={(e) => props.onNameChange(e.target.value)} type="text" required />
                    <TextArea label="Ingredients" value={props.ingredients} onChange={(e) => props.onIngredientsChange(e.target.value)} rows={12} />
                    <TextArea label="Instructions" value={props.instructions} onChange={(e) => props.onInstructionsChange(e.target.value)} rows={12} />
                </FadeIn>
            </Container>
        </form>
    );
}

export default RecipeForm;