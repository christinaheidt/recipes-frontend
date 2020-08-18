import Link from "next/link";
import { RecipeListItemProps } from "./recipe-list-props";
import styled from "styled-components";
import RecipeImage from "./recipe-image";

const ImageContainer = styled.a`
  display: block;
  position: relative;
  &:after {
  content: "";
  display: block;
  }
`;

const ImageTitle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontsizes.titleS};
  font-weight: bold;
  backdrop-filter: blur(8px);
  background-color: rgba(0,0,0,0.2);
`;

const RecipeListItem: React.FunctionComponent<RecipeListItemProps> = (props) => {
    return (<li>
        <Link href="/recipes/[id]" as={`/recipes/${props.id}`}>
            <ImageContainer>
                <RecipeImage src="/recipe.png" alt="Recipe Image" />
                <ImageTitle>{props.name}</ImageTitle>
            </ImageContainer>
        </Link>
    </li>);
}

export default RecipeListItem;