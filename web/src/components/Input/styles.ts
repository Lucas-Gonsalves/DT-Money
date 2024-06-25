import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


export const InputContainer = styled.input`
  width: 100%;

  min-height: 5.96rem;
  height: max-content;

  outline: none;

  padding: 1.2rem 1.4rem;
  border-radius: 6px;

  font-size: ${props => props.theme.font.size.s};

  border-width: 1px;
  border-style: solid;
  border-color: transparent;

  ${props => props["aria-invalid"] && css`
    border-color: ${props.theme.colors["red-300"]};
  `}

  caret-color: ${props => props.theme.colors["gray-300"]};
  color: ${props => props.theme.colors["gray-300"]};

  background: ${props => props.theme.colors["gray-900"]};
  transition: .3s ease;

  &::placeholder {
    color: ${props => props.theme.colors["gray-500"]};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px tranparent inset;
    -webkit-text-fill-color: ${props => props.theme.colors["white-100"]};
    transition: background-color 5000s ease-in-out 0s;
  }

  @media (min-width: ${breakpoints.xxl}) {
    padding: 1.4rem 1.6rem;
    
    font-size: ${props => props.theme.font.size.xm};
  }
  
  @media (min-width: ${breakpoints.l}) {    
    padding: 1.6rem 1.6rem;

    font-size: ${props => props.theme.font.size.m};
  }
`;