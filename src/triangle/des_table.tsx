import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

function createData(col1: string, col2: string, col3: string) {
  return { col1, col2, col3 };
}

const rows = [
  createData("D1", "{a,b,c}", "a,b,c构成等边三角形"),
  createData("D2", "{a,b,c}", "a,b,c构成非等边等腰三角形"),
  createData("D3", "{a,b,c}", "a,b,c构成一般三角形"),
  createData("D4", "{a,b,c}", "a,b,c不构成三角形"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>编号</TableCell>
            <TableCell>边集合</TableCell>
            <TableCell>关系</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.col1}>
              <TableCell> {row.col1}</TableCell>
              <TableCell>{row.col2}</TableCell>
              <TableCell>{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
