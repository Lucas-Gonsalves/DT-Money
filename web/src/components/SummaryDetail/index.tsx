import { 
  SummaryDetailContainer,
  TitleContent
} from "./styles";

import { 
  PiArrowCircleUpLight , 
  PiCurrencyDollarLight, 
  PiArrowCircleDownLight, 
} from "react-icons/pi";

import { format } from "../../utils/format";


interface SummaryDetailProps {
  type?: "entrada" | "saida" | "total";
  value?: number;
  lastEntry?: string;
};


export function SummaryDetail({
  type = "total",
  value = 0,
  lastEntry = "3 de abril"
}: SummaryDetailProps) {

  const CorrespondingIcon = () => {

    switch(type) {
      case "entrada": {
        return (<PiArrowCircleUpLight/>);
      };

      case "saida": {
        return (<PiArrowCircleDownLight/>);
      };

      case "total": {
        return (<PiCurrencyDollarLight/>);
      };
    };
  };

  const typeFormated = format.upperFirstLetter(type);
  const valueFormated = format.toDecimalNumber(value);

  return (
    <SummaryDetailContainer
      data-type={type}
    >

      <TitleContent>
        <span>{ typeFormated }</span>
        <CorrespondingIcon/>
      </TitleContent>

      <strong>R$ { valueFormated }</strong>
      <p>Última entrada em { lastEntry }</p>
    </SummaryDetailContainer>
  );
};