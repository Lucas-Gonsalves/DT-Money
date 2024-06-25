import { 

  SearchContainer, 
  SearchForm, 
  TitleContent 

} from "./styles";

import { ButtonTransparent } from "../ButtonTranparent";
import { Input } from "../Input";

import { HTMLAttributes } from "react";


interface SearchProps extends  HTMLAttributes<HTMLDivElement>  {
  inputPlaceholder?: string;
  title?: string;
};


export function Search({

  inputPlaceholder = "",
  title="undefined",

  ...props

}: SearchProps) {

  const itemsCounter = "4 itens";

  return(
    <SearchContainer
      {...props}
    >
      
      <TitleContent>  
        <h3>{ title }</h3>

        <span>{ itemsCounter }</span>
      </TitleContent>

      <SearchForm>
        <Input
          placeholder={inputPlaceholder}
        />
        
        <ButtonTransparent
          title="Buscar"
        />
      </SearchForm>

    </SearchContainer>
  );
};