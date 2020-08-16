import styled from "styled-components";
import { Component, createRef, RefObject } from "react";

type LabelProps = {
  active: boolean;
};

const Label = styled.label<LabelProps>`
  font-size: inherit;
  display: block;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.color};
  padding-bottom: ${(props) => props.theme.spacing.xs};
  padding-left: 1.125rem;
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
  label: string;
};

type TextFieldState = {
  isFocused: boolean;
};

class TextField extends Component<TextFieldProps, TextFieldState> {
  state: TextFieldState = {
    isFocused: false,
  };

  onFocus = () => {
    this.setState(() => ({
      isFocused: true,
    }));
  };

  onBlur = () => {
    this.setState((state: TextFieldState) => ({
      isFocused: false,
    }));
  };
  render() {
    return (
      <>
        <Label active={this.state.isFocused}>{this.props.label}</Label>
        <Input onFocus={this.onFocus} onBlur={this.onBlur} />
      </>
    );
  }
}

export default TextField;
