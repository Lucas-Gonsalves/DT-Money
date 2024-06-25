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
};


export function SummaryDetail({
  type = "total",
  value = 0,
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
    </SummaryDetailContainer>
  );
};