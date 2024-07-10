import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


interface ModalTransactionContainerProps {
  "data-is-modal-open"?: boolean;
};


export const ModalTransactionContainer = styled.main<ModalTransactionContainerProps>`
  width: 100%;
  height: 100%;

  transition: all .8s ease;

  > section {
    position: fixed;
    z-index: 2;

    bottom: -100%;
    left: 50%;
  
    transform: translateX(-50%);
  
    transition: all .8s ease;
  }

  
  @media (min-width: ${breakpoints.xl}) {

    > section {
      max-width: 53.5rem;
    }
  }

  ${props => props["data-is-modal-open"] && css`
  
    > div {
      z-index: 1;

      background-color: ${props => props.theme.colors["transparent-900"]};
    }
    
    > section {
      bottom: 0;
    }


    @media (min-width: ${breakpoints.xl}) {
      > section {
        bottom: 21.1%;
      }
    }
  `}
`;


export const ModalTransactionBackground = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: -1;

  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  transition: all .8s ease;
  background-color: transparent;
`;