import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors["green-500"]};
  }

  body {
    background-color: ${props => props.theme.colors["gray-800"]};
    
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    
    font-weight: ${props => props.theme.font.weight.regular};
    font-family: ${props => props.theme.font.family.default};
    font-size: ${props => props.theme.font.size.m};

    line-height: ${props => props.theme.line.height.default};
    color: ${props => props.theme.colors["gray-100"]};
  }

`;