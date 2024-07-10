import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


interface InputRadioTransactionContainer {
  "data-icon-color"?: "green" | "red";
};


export const InputRadioTransactionContainer = styled.div<InputRadioTransactionContainer>`
  width: max-content;
  min-height: 5.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  cursor: pointer;

  gap: .8rem;
  padding: 1.6rem 3.2rem;

  border-radius: 6px;
  background-color: ${props => props.theme.colors["gray-700"]};

  transition: 
    filter .3s ease, 
    color .3s ease, 
    background-color .3s ease;

  > span {
    color: ${props => props.theme.colors["gray-300"]};
    font-size: ${props => props.theme.font.size.s};
  
  }

  > input {
    all: unset;

    position: absolute;
  
    inset: 0;
  }

  > svg {
    width: 2.4rem;
    height: 2.4rem;

    color: ${props => props.theme.colors["red-300"]};
  }

  > #input-radio-transection {
    all: unset;

    position: absolute;
  
    inset: 0;
  }

  ${props => props["data-icon-color"] === "green" && css`
    
    > svg {
      color: ${props.theme.colors["green-500"]};
    }
  `}


  &:hover {
    background-color: ${props => props.theme.colors["gray-600"]};
  }

  &:has(input:checked) {
    
    > span, svg {
      color: ${props => props.theme.colors["white-200"]};
    }
    
    background-color : ${props => props["data-icon-color"] === "green" 
      ? 
        props.theme.colors["green-500"] 
      : 
        props.theme.colors["red-500"]
    }
  }


  @media (min-width: ${breakpoints.xxl}) {
    > span {
      font-size: ${props => props.theme.font.size.xm};
    }
  }

  @media (min-width: ${breakpoints.l}) {
    min-height: 5.8rem;

    > span {
      font-size: ${props => props.theme.font.size.m};
    }
  }
`;