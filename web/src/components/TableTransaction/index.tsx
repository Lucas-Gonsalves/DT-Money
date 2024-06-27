import { TableTransactionContainer } from "./styles";

import { TableTransactionRow } from "../TableTransactionRow";

type RowsDataProps = {
  id: number,
  title: string,
  value: number,
  type: string,
  date: string, 
}


interface TableTransetionProps {
  rowsData?: RowsDataProps[];
};


export function TableTransaction({
  rowsData = [],

}: TableTransetionProps) {

  const rowsDataExist = rowsData.length >= 0; 

  return(
    <TableTransactionContainer>
      <tbody>

        { rowsDataExist && (
            rowsData.map(row => (

              <tr key={`data_row_key_${row.title}_id_${row.id}`}>

                <TableTransactionRow
                  title={row.title}
                  value={row.value}
                  type={row.type}
                  date={row.date}
                />

              </tr>
            ))
          )
        }

      </tbody>
    </TableTransactionContainer>  
  );
};