import { 
  ModalTransactionBackground, 
  ModalTransactionContainer 
} from "./styles";


import { ModalTransactionForm } from "../ModalTransactionForm";


interface ModalTransactionProps {
  dataIsModalOpen?: boolean
  onClickXButton?: () => void;
};


export function ModalTransaction({
  
  dataIsModalOpen = false,
  onClickXButton = () => {},

}: ModalTransactionProps) {
  

  function handleClickXButton() {
    onClickXButton();
    return;
  };

  return (
    <ModalTransactionContainer
      data-is-modal-open={dataIsModalOpen}
    >
      <ModalTransactionBackground/>

      <ModalTransactionForm
        changeModalStatus={handleClickXButton}
      />
  </ModalTransactionContainer>
  );
};