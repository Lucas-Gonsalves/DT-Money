import { ButtonHTMLAttributes } from "react";
import { ButtonDefaultContainer } from "./styles";


interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  onClickButtonDefault?: () => void;
};


export function ButtonDefault({
  title = "",
  onClickButtonDefault = () => {},
  ...props
}: ButtonDefaultProps ) {

  function handleClickButtonDefault() {
    onClickButtonDefault();
    return;
  } 

  return (
    <ButtonDefaultContainer
      onClick={handleClickButtonDefault}
      {...props}
    >
      { title }
    </ButtonDefaultContainer>
  );
};