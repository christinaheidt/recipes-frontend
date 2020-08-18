import styled from "styled-components";
import { forwardRef, ComponentPropsWithRef } from "react";
import Link from "next/link";

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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 100%;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  background: transparent;
  padding: 0;
  height: 3rem;
  width: 3rem;
  text-align: center;
  transition: all 0.2s;
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.primary30};
    outline: none;
  }
`;

type LinkButtonProps = {
  icon: string
}

export default function IconButton(props: {icon: string}) {
  return (
    <StyledIconButton>
      <MaterialIcon>{props.icon}</MaterialIcon>
    </StyledIconButton>
  );
}

export const LinkIconButton = forwardRef<HTMLLinkElement, ComponentPropsWithRef<Link> & LinkButtonProps>((props, ref) => {
  return (
    <StyledIconButton as="a" href={props.href} onClick={props.onClick} ref={ref}>
      <MaterialIcon>{props.icon}</MaterialIcon>
    </StyledIconButton>
  );
});