import styled from "styled-components";

export const Button = styled.button<{ color?: "primary" | "secondary" }>`
    border-radius: 5px;
    border: none;
    padding: 2px 1rem;
    color: ${props => props.color === "secondary" ? "#262626" : "#FFFFFF"};;
    background: ${props => props.color === "secondary" ? "#FFFFFF" : "#FFA732"};
`
