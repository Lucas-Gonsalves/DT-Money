import styled from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


export const HeaderContianer = styled.header`
  width: 100%;
  min-height: 21rem;

  background-color: ${props => props.theme.colors["gray-900"]};

  padding: 5.6rem 2.4rem 0;
  
  > div {
    max-width: 112rem;
  
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: auto;
  }
`;


export const Logotype = styled.div`
  height: max-content;
  width: max-content;

  display: flex;
  align-items: center;
  
  gap: .8rem;

  img {
    width: 3rem;
    height: 3rem;
  }
  
  h1 {
    font-size: ${props => props.theme.font.size.l};
  }


  @media (min-width: ${breakpoints.m}) {
    gap: 1rem;

    img {
      width: 3.4rem;
      height: 3.4rem;
    }

    h1 {
      font-size: ${props => props.theme.font.size.g};
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    gap: 1.2rem;

    img {
      width: 3.8rem;
      height: 3.8rem;
    }

    h1 {
      font-size: ${props => props.theme.font.size.xxe};
    }
  }

  @media (min-width: ${breakpoints.l}) {
    gap: 1.5rem;

    img {
      width: 4.2rem;
      height: 4.2rem;
    }
  }
`;