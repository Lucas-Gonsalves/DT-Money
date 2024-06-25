import styled from "styled-components";

import { breakpoints } from "../../styles/device/breakpoints";


export const SummaryContainer = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.6rem;
  padding-bottom: .5rem;

  overflow-x: auto;

  scrollbar-width: thin;
  scroll-behavior: smooth;
  scrollbar-color: ${props => props.theme.colors["green-500"]} transparent;

  @media (min-width: ${breakpoints.l}) {
    flex-wrap: wrap;
    justify-content: center;

    padding-bottom: 0;
  }

  @media (min-width: ${breakpoints.g}) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  @media (min-width: ${breakpoints.ex}) {
    gap: 2.2rem;
  }

  @media (min-width: ${breakpoints.e}) {
    gap: 3.2rem;
  }
`;