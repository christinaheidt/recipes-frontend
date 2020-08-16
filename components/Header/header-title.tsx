import styled from "styled-components";

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontsizes.titleS};
  font-weight: bold;
  margin: 0;
`;

export default function HeaderTitle(props: {title: string}) {
  return <Title>{props.title}</Title>;
}