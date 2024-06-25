import { ButtonTransparentContainer } from "./styles";

import { IconType } from "react-icons";
import { ButtonHTMLAttributes } from "react";

import { PiMagnifyingGlass } from "react-icons/pi";


interface ButtonTransparentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: IconType;
  onClickButtonTransparent?: () => void;
};


export function ButtonTransparent({
  
  title = "undefined",
  icon: Icon = PiMagnifyingGlass,
  onClickButtonTransparent = () => {},

  ...props

}: ButtonTransparentProps ) {

  function handleClickButtonTransparent() {
    onClickButtonTransparent();
    return;
  };

  return (
    <ButtonTransparentContainer
      onClick={handleClickButtonTransparent}
      {...props}
    >
      
      <Icon/>
      <span>{ title }</span>
      
    </ButtonTransparentContainer>
  );
};