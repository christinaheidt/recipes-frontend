import Headerbar from "../components/Header/headerbar";
import Link from "next/link";
import HeaderTitle from "../components/Header/header-title";
import IconButton, { LinkIconButton } from "../components/icon-button";
import FadeIn from "react-fade-in";
import TextField, { TextArea } from "../components/text-field/text-field";
import styled from "styled-components";
import ImageUploader from "./image-uploader";

const Container = styled.div`
  padding: ${props => props.theme.spacing.m};
`;
type RecipeFormProps = {
    id?: number;
    title: string;
    name: string;
    ingredients: string;
    instructions: string;
    imagepath: string;
    disabled: boolean;
    onNameChange: (value: string) => void;
    onIngredientsChange: (value: string) => void;
    onInstructionsChange: (value: string) => void;
    onSubmit: (value: any) => void;
    onImagepathChanged: (value: string) => void;
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
            <FadeIn>
                <ImageUploader imagepath={props.imagepath} onImageUploaded={props.onImagepathChanged}/>
                <Container>
                    <TextField label="Name" value={props.name} onChange={(e) => props.onNameChange(e.target.value)} type="text" required disabled={props.disabled} />
                    <TextArea label="Ingredients" value={props.ingredients} onChange={(e) => props.onIngredientsChange(e.target.value)} rows={12} disabled={props.disabled} />
                    <TextArea label="Instructions" value={props.instructions} onChange={(e) => props.onInstructionsChange(e.target.value)} rows={12} disabled={props.disabled} />
                </Container>
            </FadeIn>
        </form>
    );
}

export default RecipeForm;