import styled from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";



export const HomeContainer = styled.div`
  width: 100%;
  min-width: 32rem;

  min-height: 100vh;
`;


export const HomeContent = styled.main`
  width: 100%;
  max-width: 116.8rem;
  
  padding: 0 2.4rem 3.2rem;
  margin: -7.99rem auto;

  #search-form {
    margin: 3.4rem auto 2.4rem;
  }

  nav {
    margin-top: 3.6rem;
  }


  @media (min-width: ${breakpoints.m}) {
    margin: -7.53rem auto 0;
  }

  @media (min-width: ${breakpoints.g}) {

    #search-form {
      margin-top: 6.4rem auto 2.4rem;
    }
  }

  @media (min-width: ${breakpoints.ex}) {
    margin: -8.11rem auto;
  }
`;