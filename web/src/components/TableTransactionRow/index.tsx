import { 
  TableTransactionRowContainer, 
  TitleAndValueContent, 
  TypeAndDateContent 
} from "./styles";

import { 
  PiTagSimple, 
  PiCalendarBlankThin 
} from "react-icons/pi";


import { format } from "../../utils/format";

interface TableTransactionRowProps  {
  title?: string;
  value?: number;
  type?: string;
  date?: string; 
}


export function TableTransactionRow({
  
  date = "00/01/0000",
  title = "undefined",
  type = "undefined",
  value = 0,

}: TableTransactionRowProps) {

  const valueIsPositive = value >= 0;

  function valueFormatter() {
    const decimalValue = format.toDecimalNumber(value);
    return `${valueIsPositive ? "R$" : "- R$"} ${decimalValue}`;
  };

  const valueFormat = valueFormatter();

  return(
    <TableTransactionRowContainer>
       
       <TitleAndValueContent
         data-is-value-positive={valueIsPositive}
       >
        
        <h3>{ title }</h3>
        <strong >{ valueFormat }</strong>

      </TitleAndValueContent> 


      <TypeAndDateContent>

        <span>
          <PiTagSimple/>
          { type }
        </span>

        <span>
          <PiCalendarBlankThin/>
          { date }
        </span>
      
      </TypeAndDateContent>

    </TableTransactionRowContainer>  
  );
};