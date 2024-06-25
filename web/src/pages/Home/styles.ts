import styled from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


export const HomeContainer = styled.div`
  width: 100%;
  min-width: 32rem;

  min-height: 100vh;

  `;


export const HomeContent = styled.div`
  width: 100%;
  max-width: 116.8rem;
  
  padding: 0 2.4rem;
  margin: -5.81rem auto;

  #search-form {
    margin-top: 3.4rem;
  }

  @media (min-width: ${breakpoints.m}) {
    margin: -6.25rem auto;
  }

  @media (min-width: ${breakpoints.g}) {

    #search-form {
      margin-top: 6.4rem;
    }
  }

  @media (min-width: ${breakpoints.ex}) {
    margin: -6.84rem auto;
  }
`;
