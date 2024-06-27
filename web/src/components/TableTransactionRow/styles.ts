import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/device/breakpoints";


interface ContentSetProps {
  "data-is-value-positive"?: boolean;
}

export const TableTransactionRowContainer = styled.td`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem 2rem;
  
  row-gap: .8rem;
  column-gap: 4.8rem;

  border-radius: 6px;
  text-align: start;

  background-color: ${props => props.theme.colors["gray-700"]};


  @media (min-width: ${breakpoints.m}) {
    padding: 2rem 2.4rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 2rem 2.8rem;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 2rem 3.2rem;

    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: ${breakpoints.xg}) {
    column-gap: 5.4rem;
  }
`;


const ContentSet = styled.div<ContentSetProps>`

  > h3, > span {
    font-size: ${props => props.theme.font.size.xm};
    font-weight: ${props => props.theme.font.weight.regular};
  }

  > span {
    width: max-content;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: .4rem;

    color: ${props => props.theme.colors["gray-500"]};
    line-height: ${props => props.theme.line.height.smaller};
  }

  > span svg {
    width: 1.6rem;
    height: 1.6rem;

    color: ${props => props.theme.colors["gray-500"]};
  }


  @media (min-width: ${breakpoints.xl}) {

    h3, span {
      font-size: ${props => props.theme.font.size.m};
    }

    > div span svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  @media (min-width: ${breakpoints.l}) {

    h3, span {
      font-size: ${props => props.theme.font.size.xm};
    }

    > div span svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  @media (min-width: ${breakpoints.xg}) {

    h3, span {
      font-size: ${props => props.theme.font.size.m};
    }

    > div span svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

export const TitleAndValueContent = styled(ContentSet)`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: start;

  column-gap: 1.2rem;
  row-gap: .6rem;

  h3 {
    color: ${props => props.theme.colors["gray-300"]};
  }

  strong {
    width: 14.5rem;
    
    text-align: start;

    font-size: ${props => props.theme.font.size.xxl};
    font-weight: ${props => props.theme.font.weight.bold};

    color: ${props => props.theme.colors["red-300"]};
  }
  

  ${props => props["data-is-value-positive"] && css`

    strong {
      color: ${props.theme.colors["green-300"]};
    }
  `}


  @media (min-width: ${breakpoints.m}) {
    flex-direction: row;

    strong {
      text-align: end;
    }
  }

  @media (min-width: ${breakpoints.xl}) {

    strong {
      font-size: ${props => props.theme.font.size.l};
      text-align: start;
    }
  }

  @media (min-width: ${breakpoints.l}) {
    max-width: 60.2rem;
  }
`;


export const TypeAndDateContent = styled(ContentSet)`
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media (min-width: ${breakpoints.l}) {
    max-width: 25rem;
  }

  @media (min-width: ${breakpoints.xg}) {
    max-width: 30rem;
  }

  @media (min-width: ${breakpoints.g}) {
    max-width: 35rem;
  }
`;