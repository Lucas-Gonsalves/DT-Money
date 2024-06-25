import { 
  HomeContainer, 
  HomeContent 
} from "./styles";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Search } from "../../components/Search";


export function Home() {
  return(
    <HomeContainer>
      <Header/>

      <HomeContent>
        <Summary/>

        <Search
          id="search-form"
          title="Transições"
          inputPlaceholder="Busque uma transição"
        />
      </HomeContent>

    </HomeContainer>
  );
};