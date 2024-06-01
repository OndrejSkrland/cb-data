import styled from "styled-components"

export const Alert = styled.div<{ severity:  "error" | "success"; }>`
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: #FFF;
    background: ${props => props.severity === "error" ? "#EF4040" : "green"};
`
