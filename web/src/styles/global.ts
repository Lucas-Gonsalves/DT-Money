import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    scrollbar-width: thin;
    scroll-behavior: smooth;
    scrollbar-color: ${props => props.theme.colors["green-500"]} ${props => props.theme.colors["gray-700"]};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${props => props.theme.colors["green-500"]};
  }

  body {
    background-color: ${props => props.theme.colors["gray-800"]};
    
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    
    -webkit-touch-callout: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }


  body, input, textarea, button {
    
    font-weight: ${props => props.theme.font.weight.regular};
    font-family: ${props => props.theme.font.family.default};
    font-size: ${props => props.theme.font.size.m};

    line-height: ${props => props.theme.line.height.default};
    color: ${props => props.theme.colors["gray-100"]};
  }

  img, svg {
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

`;