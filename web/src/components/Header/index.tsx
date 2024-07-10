import { 
  HeaderContianer, 
  Logotype 
} from "./styles";

import logoImage from "../../assets/logos/dt-money.svg";
import { ButtonDefault } from "../ButtonDefault";
import { ModalTransaction } from "../ModalTransaction";
import { useState } from "react";


export function Header() {

  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  function changeModalStatus() {
    setIsModalOpen(!isModalOpen);
    return;
  };

  return (
    <HeaderContianer>

      <div>
        <Logotype>
          <img src={logoImage} />
          <h1>DT Money</h1>
        </Logotype>

        <ButtonDefault
          title="Nova Transação"
          onClick={changeModalStatus}
        />
      </div>
      
      <ModalTransaction
        dataIsModalOpen={isModalOpen}
        onClickXButton={changeModalStatus}
      />

    </HeaderContianer>
  )
}