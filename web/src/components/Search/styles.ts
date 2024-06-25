import styled from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


export const SearchContainer = styled.div`
  width: 100%;
`;


export const TitleContent = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: .8rem;
  
  > h3 {
    font-weight: ${props => props.theme.font.weight.regular};
    color: ${props => props.theme.colors["gray-300"]};
  }
  
  > span {
    color: ${props => props.theme.colors["gray-500"]};
  }

  > span, h3 {
    font-size: ${props => props.theme.font.size.xm};
  }

  @media (min-width: ${breakpoints.xxl}) {
    > span, h3 {
      font-size: ${props => props.theme.font.size.m};
    }
  }
`;


export const SearchForm = styled.form`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: .8rem;
`;
