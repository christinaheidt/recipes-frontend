import Link from "next/link";
import { RecipeListItemProps } from "./recipe-list-props";
import styled from "styled-components";

const ImageContainer = styled.a`
  display: block;
  position: relative;
  width: 100%;
  &:after {
  content: "";
  display: block;
  padding-bottom: 75%;
  }
  & img {
    position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;     
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
                <img src="/recipe.png" alt="Recipe Image" />
                <ImageTitle>{props.name}</ImageTitle>
            </ImageContainer>
        </Link>
    </li>);
}

export default RecipeListItem;