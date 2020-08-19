import styled from "styled-components";
import React, { forwardRef } from "react";

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
  &:hover:not(:disabled):not(:focus) {
    background-color: transparent;
    border-color: ${(props) => props.theme.colors.color};
  }
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.primary10};
    border-color: ${(props) => props.theme.colors.primary};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.color10};
    color: ${(props) => props.theme.colors.color50};
  }
  background-color: ${(props) => props.theme.colors.color20};
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: ${(props) => props.theme.borders.inputBorderWidth} solid transparent;
  color: inherit;
  font-size: inherit;
  border-radius: 1.1875rem;
  padding-top: ${(props) => props.theme.spacing.xs};
  padding-bottom: ${(props) => props.theme.spacing.xs};
  padding-left: ${(props) => props.theme.spacing.s};
  padding-right: ${(props) => props.theme.spacing.s};
  margin-bottom: ${props => props.theme.spacing.m};
  transition: all 0.2s;
  resize: none;
`;

type TextFieldProps = {
  label?: string;
};

const TextField = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & TextFieldProps>((props, ref) => {
  const [isFocused, toggleFocused] = React.useState(false);
  return (
    <>
      {props.label ? <Label active={isFocused}>{props.label}</Label> : <></>}
      <Input ref={ref} value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
        defaultValue={props.defaultValue}
        type={props.type}
        onFocus={() => toggleFocused(true)}
        onBlur={() => toggleFocused(false)}
      />
    </>
  );
});

export const TextArea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & TextFieldProps>((props, ref) => {
  const [isFocused, toggleFocused] = React.useState(false);
  return (
    <>
      {props.label ? <Label active={isFocused}>{props.label}</Label> : <></>}
      <Input as="textarea" ref={ref} value={props.value}
        autoFocus={props.autoFocus}
        cols={props.cols}
        rows={props.rows}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
        defaultValue={props.defaultValue}
        onFocus={() => toggleFocused(true)}
        onBlur={() => toggleFocused(false)}
      />
    </>
  );
});

export default TextField;
