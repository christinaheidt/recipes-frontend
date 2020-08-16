import styled from "styled-components";

const StyledHeaderbar = styled.div`
    background-color: ${(props) => props.theme.colors.background}
    padding: ${(props) => props.theme.spacing.s}
`;

const Title = styled.h1`
    font-size: inherit;
    font-weight: bold;
    text-align: center;
`

export default function Headerbar() {
  return (
      <StyledHeaderbar>
        <Title>Recipes</Title>
      </StyledHeaderbar>
  );
}
