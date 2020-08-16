import styled from "styled-components";

const Container = styled.div`
  margin: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.m} ${(props) => props.theme.spacing.s}
    ${(props) => props.theme.spacing.m};
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.color50};
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 2px solid transparent;
  color: inherit;
  font-size: inherit;
  border-radius: 2rem;
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.s};
  transition: all 0.2s;
  &:hover {
    background-color: transparent;
    border-color: ${(props) => props.theme.colors.color};
  }
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.primary10};
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export default function Searchbar() {
  return (
    <Container>
      <Input type="text" placeholder="Search..." />
    </Container>
  );
}
