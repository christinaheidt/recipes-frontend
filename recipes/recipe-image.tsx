import styled from "styled-components";

const RecipeImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 75%;
  }
`;

export const ImageContainerImage = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default RecipeImage;