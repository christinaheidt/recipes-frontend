import styled from "styled-components";
import IconButton from "../icon-button";

const StyledHeaderbar = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.s};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: inherit;
  font-weight: bold;
  text-align: center;
  font-family: "Pacifico", cursive;
  font-size: ${(props) => props.theme.fontsizes.titleM};
  margin: 0;
`;

export default function Headerbar() {
  return (
    <StyledHeaderbar>
      <IconButton icon="menu" />
      <Title>Recipes</Title>
      <IconButton icon="add" />
    </StyledHeaderbar>
  );
}
