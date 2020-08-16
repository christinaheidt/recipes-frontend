import styled from "styled-components";
import { FunctionComponent } from "react";

const MaterialIcon = styled.i`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: ${props => props.theme.fontsizes.titleM};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
`;

const StyledIconButton = styled.button`
  border-radius: 100%;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  background: transparent;
  padding: 0;
  height: 3em;
  width: 3em;
  text-align: center;
  transition: all 0.2s;
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.primary30};
    outline: none;
  }
`;

interface IconButtonProps {
    icon: string;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <StyledIconButton>
      <MaterialIcon>{props.icon}</MaterialIcon>
    </StyledIconButton>
  );
}
