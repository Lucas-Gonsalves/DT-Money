import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


interface SummaryDetailContainerProps {
  "data-type"?: "entrada" | "saida" | "total";
};


export const SummaryDetailContainer = styled.div<SummaryDetailContainerProps>`
  width: max-content;
  min-width: 23rem;

  height: max-content;

  padding: 2rem 2.6rem;
  border-radius: 6px;

  transition: .3s ease;

  background-color: ${props => props.theme.colors["gray-600"]};

  ${props => props["data-type"] === "total" && css`
    background-color: ${props.theme.colors["green-700"]};
  `}

  > strong {
    max-width: max-content;
    
    font-size:  ${props => props.theme.font.size.exe};
    font-weight:  ${props => props.theme.font.weight.bold};
    line-height:  ${props => props.theme.line.height.medium};
  }


  > div svg {
    color: ${props => {

      switch(props["data-type"]) {

        case "entrada": return props.theme.colors["green-300"];
        case "saida": return props.theme.colors["red-300"];
        case "total": return props.theme.colors["white-200"];

        default: return props.theme.colors["white-200"]
      }
    }}
  }

  > p {
    color: ${props => props.theme.colors["gray-500"]};
    font-size: ${props => props.theme.font.size.xs};

    ${props => props["data-type"] === "total" && css`
      color: ${props.theme.colors["white-200"]};
    `}
  }

  &:hover {
    transition: .3s ease;
    filter: brightness(1.08);
  };
  

  @media (min-width: ${breakpoints.m}) {
    min-width: 32rem;

    padding: 2.2rem 2.8rem;

    > strong {
      font-size:  ${props => props.theme.font.size.xxe};
    }

    
    > p {
      font-size: ${props => props.theme.font.size.s};
    }
    
  }

  @media (min-width: ${breakpoints.xg}) {
    min-width: 27rem;
    width: 100%;
  
    padding: 2rem 2.4rem;
  }



  @media (min-width: ${breakpoints.ex}) {
    min-width: 35.2rem;

    padding: 2.4rem 3.2rem;

    > strong {
      font-size:  ${props => props.theme.font.size.e};
    }
  }
`;


export const TitleContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;
  margin-bottom: 1.2rem;

  > span {
    font-size: ${props => props.theme.font.size.xm};
    color: ${props => props.theme.colors["gray-300"]};
  }

  > svg {
    width: 2.8rem;
    height: 2.8rem;
  }

  @media (min-width: ${breakpoints.m}) {

    > span {
      font-size: ${props => props.theme.font.size.m};
    }

    > svg {
      width: 3rem;
      height: 3rem;
    }
  }
  
  @media (min-width: ${breakpoints.xl}) {

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;