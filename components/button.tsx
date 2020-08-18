import styled from "styled-components";

const Button = styled.button`
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

export default Button;