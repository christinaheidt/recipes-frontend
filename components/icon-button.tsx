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
  cursor: pointer;
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
  &:hover:not(:disabled),
  &:focus {
    background-color: ${(props) => props.theme.colors.primary30};
    outline: none;
  }
  &:disabled {
    color: ${(props) => props.theme.colors.color20};
    cursor: default;
  }
`;

type LinkButtonProps = {
  icon: string
}

export const IconButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & LinkButtonProps>((props, ref) => {
  return (
    <StyledIconButton type={props.type} disabled={props.disabled} ref={ref}>
      <MaterialIcon>{props.icon}</MaterialIcon>
    </StyledIconButton>
  );
});

export const LinkIconButton = forwardRef<HTMLLinkElement, ComponentPropsWithRef<Link> & LinkButtonProps>((props, ref) => {
  return (
    <StyledIconButton as="a" href={props.href} onClick={props.onClick} ref={ref}>
      <MaterialIcon>{props.icon}</MaterialIcon>
    </StyledIconButton>
  );
});

export default IconButton;