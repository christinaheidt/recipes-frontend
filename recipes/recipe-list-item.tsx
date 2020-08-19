import Link from "next/link";
import { RecipeListItemProps } from "./recipe-list-props";
import styled from "styled-components";
import { ImageContainer, ImageContainerImage } from "./recipe-image";

const UnstyledA = styled.a`
&, &:hover, &:visited {
  color: inherit;
}

`
  ;
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
    <Link href="/recipes/[id]" as={`/recipes/${props.id}`} passHref>
      <UnstyledA>
        <ImageContainer>
          <ImageContainerImage src={props.imagepath ? props.imagepath : '/recipe-placeholder.png'} alt="Recipe Image" />
          <ImageTitle>{props.name}</ImageTitle>
        </ImageContainer>
      </UnstyledA>
    </Link>
  </li>);
}

export default RecipeListItem;