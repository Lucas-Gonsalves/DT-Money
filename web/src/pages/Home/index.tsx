import { 
  HomeContainer, 
  HomeContent 
} from "./styles";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";


export function Home() {
  return(
    <HomeContainer>
      <Header/>

      <HomeContent>
        <Summary/>

      </HomeContent>

    </HomeContainer>
  );
};