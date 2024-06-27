import { 
  HomeContainer, 
  HomeContent 
} from "./styles";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Search } from "../../components/Search";
import { TableTransaction } from "../../components/TableTransaction";

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