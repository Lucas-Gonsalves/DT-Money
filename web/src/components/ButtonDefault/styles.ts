import styled from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


export const ButtonDefaultContainer = styled.button`
  width: max-content;
  height: max-content;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: .8rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  font-size: ${props => props.theme.font.size.xs};
  font-weight: ${props => props.theme.font.weight.bold};
  
  background-color: ${props => props.theme.colors["green-500"]};
  color: ${props => props.theme.colors["white-200"]};

  transition: background-color .3s ease;

  &:hover {
    background-color: ${props => props.theme.colors["green-300"]};
  }

  @media (min-width: ${breakpoints.m}) {
    font-size: ${props => props.theme.font.size.s};
    padding: .8rem 1rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: ${props => props.theme.font.size.xm};
    padding: 1rem 1.6rem;
  }

  @media (min-width: ${breakpoints.l}) {
    font-size: ${props => props.theme.font.size.m};
    padding: 1.2rem 1.6rem;
  }
`;