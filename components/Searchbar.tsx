import styled from "styled-components";

const Container = styled.div`
  margin-top: ${(props) => props.theme.spacing.xs};
  margin-right: ${(props) => props.theme.spacing.m};
  margin-bottom: ${(props) => props.theme.spacing.s};
  margin-left: ${(props) => props.theme.spacing.m};
`;

const StyledInput = styled.input`
  &:hover {
    background-color: transparent;
    border-color: ${(props) => props.theme.colors.color};
  }
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.primary10};
    border-color: ${(props) => props.theme.colors.primary};
  }
  background-color: ${(props) => props.theme.colors.color50};
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 2px solid transparent;
  color: inherit;
  font-size: inherit;
  border-radius: 2rem;
  padding-top: ${(props) => props.theme.spacing.xs};
  padding-bottom: ${(props) => props.theme.spacing.xs};
  padding-left: ${(props) => props.theme.spacing.s};
  padding-right: ${(props) => props.theme.spacing.s};
  transition: all 0.2s;
`;

export default function Searchbar() {
  return (
    <Container>
      <StyledInput placeholder="Search..." />
    </Container>
  );
}