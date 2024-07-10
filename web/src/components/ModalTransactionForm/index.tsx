import { 

  FormContent, 
  ModalTransactionFormsContainer, 
  RadiosSetInputs, 
  TitleModalContent 

} from "./styles";

import { 
  PiX, 
  PiArrowCircleDown, 
  PiArrowCircleUp 
} from "react-icons/pi";


import { ButtonDefault } from "../ButtonDefault";
import { Input } from "../Input";
import { InputRadioTransaction } from "../InputRadioTransaction";

interface ModalTransactionFormProps {
  id?: string;
  changeModalStatus: () => void;
};

export function ModalTransactionForm({
  
  id,
  changeModalStatus = () => {}

}: ModalTransactionFormProps) {
  

  function handleClickXButton() {
    changeModalStatus();
    return;
  };

  return (
    <ModalTransactionFormsContainer
      id={id}
    >

      <TitleModalContent>
      
        <h2>Nova Transação</h2>

        <button
          onClick={handleClickXButton}
        >
          <PiX/>
        </button>
      
      </TitleModalContent>

      <FormContent>

        <Input
          placeholder="Descrição"
        />
        
        <Input
          placeholder="Preço"
        />

        <Input
          placeholder="Categoria"
        />

        <RadiosSetInputs>
          <InputRadioTransaction
            name="input-output-transaction"
            value={"squibiridob"}
            icon={PiArrowCircleUp}
            iconColor="green"
            title="Entrada"
          />

          <InputRadioTransaction
            name="input-output-transaction"
            value={"tantana"}
            icon={PiArrowCircleDown}
            iconColor="red"
            title="Saída"
          />
        </RadiosSetInputs>


        <ButtonDefault
          title="Cadastrar"
        />
      </FormContent>

    </ModalTransactionFormsContainer>
  );
};