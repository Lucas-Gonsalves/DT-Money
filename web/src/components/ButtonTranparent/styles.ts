import styled from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


export const ButtonTransparentContainer = styled.button`
  min-width: 5.4rem;
  width: max-content;

  min-height: 5.4rem;
  height: max-content;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: .8rem;
  padding: 1.2rem 1.4rem;

  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors["green-500"]};

  border-radius: 6px;

  background-color: transparent;
  color: ${props => props.theme.colors["green-500"]};
  
  transition: .3s ease;
  cursor: pointer;

  > span {
    height: min-content;

    font-size: ${props => props.theme.font.size.m};
    font-weight: ${props => props.theme.font.weight.bold};

    display: none;
  }

  > svg {
    min-width: 1.6rem;
    min-height: 1.6rem;
  } 

  &:hover {
    transition: .3s ease;

    background-color: ${props => props.theme.colors["green-500"]};
    color: ${props => props.theme.colors["white-200"]};
  }


  @media (min-width: ${breakpoints.xxl}) {
    padding: 1.4rem 2.6rem; 

    > svg {
      min-width: 1.8rem;
      min-height: 1.8rem;
    } 
  }

  
  @media (min-width: ${breakpoints.l}) {
    min-width: 5.8rem;
    min-height: 5.8rem;

    padding: 1.4rem 3.2rem;    

    span {
      display: block;
    }

    > svg {
      min-width: 2rem;
      min-height: 2rem;
    } 
  }
`;