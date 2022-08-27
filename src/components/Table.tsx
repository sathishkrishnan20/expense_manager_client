import {
    Table,
    TableBody,
    TableHead,
    tableCellClasses,
    TableRow,
    styled,
    TableCell,
  } from '@mui/material'
  interface ITable {
        headers: {
            name: string;
            node: string;
        }[]
        rows: {
            [key: string]: any;
        }[]
  }
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
const AppTable = ({ headers, rows } : ITable) => {
    return (
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                     {headers.map((h, i) => <StyledTableCell key={h.node} align="center">{h.name}</StyledTableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((item, index) => (
                    <StyledTableRow v-for="item in tableItems" key={index}>
                        {headers.map((h, i) =>  (
                            <StyledTableCell key={`row-${index}${h.node}-${i}`} align="center">
                                <strong> {item[h.node]} </strong>
                            </StyledTableCell>
                        ))}
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    )
}
export default AppTable;