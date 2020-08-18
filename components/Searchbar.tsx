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
  background-color: ${(props) => props.theme.colors.color20};
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

type SearchbarProps = {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const Searchbar: React.FunctionComponent<SearchbarProps> = (props) =>  {
  return (
    <Container>
      <StyledInput placeholder="Search..." value={props.filter} onChange={(e) => props.onFilterChange(e.target.value)} />
    </Container>
  );
}
export default Searchbar;