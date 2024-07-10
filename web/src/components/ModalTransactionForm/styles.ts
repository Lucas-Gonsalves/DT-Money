import styled from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";

export const ModalTransactionFormsContainer = styled.section`
  min-width: 32rem;
  width: 100%;
  max-width: 100%;

  height: max-content;

  border-radius: 20px 20px 0 0;

  padding: 2.4rem;
  background-color: ${props => props.theme.colors["gray-800"]};

  @media (min-width: ${breakpoints.m}) {
    padding: 3.2rem;
  }


  @media (min-width: ${breakpoints.xl}) {
    padding: 4rem;

    border-radius: 6px;
  }


  @media (min-width: ${breakpoints.xg}) {
    padding: 4.8rem;
  }
`;


export const TitleModalContent = styled.div`
  width: 100%;

  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    font-size: ${props => props.theme.font.size.l};
  }

  > button, svg {
    width: 2.4rem;
    height: 2.4rem;
  } 

  > button {
    background-color: transparent;

    border: none;
    cursor: pointer;
    border-radius: 6px;
    
    color: ${props => props.theme.colors["gray-500"]};
    
    transition: color .3s ease;

    &:hover, &:active {
      color: ${props => props.theme.colors["gray-300"]};
    }
  } 
  
  @media (min-width: ${breakpoints.xxl}) {
    > h2 {
      font-size: ${props => props.theme.font.size.l};
    }
  }
  
  @media (min-width: ${breakpoints.xl}) {
    
    > h2 {
      font-size: ${props => props.theme.font.size.xxg};
    }

    > button {
      top: -1.6rem;
      right: -1.6rem;

      position: absolute;
    }
  }


  @media (min-width: ${breakpoints.l}) {

    > button, svg {
      width: 2.6rem;
      height: 2.6rem;
    } 


    > button {
      top: -2rem;
      right: -2rem;
    }
  }

  @media (min-width: ${breakpoints.xg}) {

    > button, svg {
      width: 2.8rem;
      height: 2.8rem;
    } 

    > button {
      top: -2.4rem;
      right: -2.4rem;
    }
  }
`;


export const FormContent = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
  margin-top: 3.2rem;

  input {
    min-height: 5.4rem;
    padding: 1.32rem 1.32rem;
  }


  button {
    width: 100%;
    min-height: 5.8rem;

    margin-top: 2.4rem;
  }
`;

export const RadiosSetInputs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  margin-top: .8rem;
  gap: 1.6rem;

  > div {
    width: 100%;
  }

  @media (min-width: ${breakpoints.m}) {
    flex-direction: row;
  }
`;