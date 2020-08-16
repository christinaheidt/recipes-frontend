import styled from "styled-components";

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontsizes.titleS};
  font-weight: bold;
  margin: 0;
`;

type HeaderTitleProps = {
  title: string;
};

const HeaderTitle: React.FunctionComponent<HeaderTitleProps> = (props) => {
  return <Title>{props.title}</Title>;
};

export default HeaderTitle;
