import { SummaryDetail } from "../SummaryDetail";

import { SummaryContainer } from "./styles";


export function Summary() {

  return (
    <SummaryContainer>
      <SummaryDetail
        type="entrada"
        value={17400}
      />

      <SummaryDetail
        type="saida"
        value={1259}
      />
      
      <SummaryDetail
        type="total"
        value={16141}
      />
    </SummaryContainer>
  );
};