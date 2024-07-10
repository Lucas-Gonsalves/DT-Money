import {
  HomeContainer, 
  HomeContent, 
} from "./styles";

import { TableTransaction } from "../../components/TableTransaction";
import { Summary } from "../../components/Summary";
import { Search } from "../../components/Search";
import { Header } from "../../components/Header";

import { tableData } from "../../utils/tableData";


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

        <TableTransaction
          rowsData={tableData}
        />

      </HomeContent>
    </HomeContainer>
  );
};