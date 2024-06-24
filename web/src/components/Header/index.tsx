import { 
  HeaderContianer, 
  Logotype 
} from "./styles";

import logoImage from "../../assets/logos/dt-money.svg";
import { ButtonDefault } from "../ButtonDefault";


export function Header() {
  return (
    <HeaderContianer>

      <div>
        <Logotype>
          <img src={logoImage} />
          <h1>DT Money</h1>
        </Logotype>

        <ButtonDefault
          title="Nova Transação"
        />
      </div>

    </HeaderContianer>
  )
}