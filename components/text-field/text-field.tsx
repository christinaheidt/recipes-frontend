import styled from "styled-components";
import React from "react";

type LabelProps = {
  active: boolean;
};

const Label = styled.label<LabelProps>`
  font-size: inherit;
  display: block;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.color};
  padding-bottom: ${(props) => props.theme.spacing.xs};
  padding-left: calc(
    ${(props) => props.theme.spacing.s} +
      ${(props) => props.theme.borders.inputBorderWidth}
  );
  transition: all 0.2s;
`;

const Input = styled.input`
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
  border: ${(props) => props.theme.borders.inputBorderWidth} solid transparent;
  color: inherit;
  font-size: inherit;
  border-radius: 2rem;
  padding-top: ${(props) => props.theme.spacing.xs};
  padding-bottom: ${(props) => props.theme.spacing.xs};
  padding-left: ${(props) => props.theme.spacing.s};
  padding-right: ${(props) => props.theme.spacing.s};
  transition: all 0.2s;
`;

type TextFieldProps = {
  text: string;
  label?: string;
  multiline?: boolean;
};

const TextField: React.FunctionComponent<TextFieldProps> = (props) => {
  const [isFocused, toggleFocused] = React.useState(false);
  return (
    <>
      {props.label ? <Label active={isFocused}>{props.label}</Label> : <></>}
      
      <Input
        onFocus={() => toggleFocused(true)}
        onBlur={() => toggleFocused(false)}
      />
    </>
  );
};

export default TextField;
