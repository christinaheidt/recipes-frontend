import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.s};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 1.125rem;
    border: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: bold;
    text-transform: uppercase;
    z-index: 5;
    &:focus {
        outline: none;
    }
`;

export const TransparentButton = styled(Button)`
  color: ${props => props.theme.colors.color};
  backdrop-filter: blur(8px);
  background-color: rgba(0,0,0,0.2);
`;

export default Button;