import styled from "styled-components";

const StyledHeaderbar = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding-top: ${(props) => props.theme.spacing.s};
  padding-bottom: ${(props) => props.theme.spacing.s};
  padding-left: ${(props) => props.theme.spacing.m};
  padding-right: ${(props) => props.theme.spacing.m};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Headerbar: React.FunctionComponent<{}> = (props) => {
  return <StyledHeaderbar>{props.children}</StyledHeaderbar>;
}

export default Headerbar;
