import { 
  InputRadioTransactionContainer
} from "./styles";

import { IconType } from "react-icons";

import { 

  forwardRef, 
  InputHTMLAttributes 

} from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  title?: string;
  icon?: IconType;
  iconColor: "green" | "red";
}


export const InputRadioTransaction = forwardRef<HTMLInputElement, InputProps>((

  {
    title = "Undefined",
    icon: Icon,
    iconColor = "red",
    ...props
  },

  ref 

) => {

  return (

    <InputRadioTransactionContainer
      data-icon-color={iconColor}
    >
      { Icon && <Icon/> }
      <span>{ title }</span>
      
      <input 
        { ...props }
        ref={ ref }
        type="radio"
      />

    </InputRadioTransactionContainer>

  );
});