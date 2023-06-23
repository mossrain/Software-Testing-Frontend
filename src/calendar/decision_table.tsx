import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function DecisionTable() {
  const data = [
    { y: 2015, m: 3, d: 27, result: "day+1" },
    { y: 2016, m: 12, d: 16, result: "day+1" },
    { y: 2002, m: 4, d: 20, result: "day+1" },
    { y: 2012, m: 2, d: 28, result: "day+1" },
    { y: 2015, m: 1, d: 31, result: "day=1,month+1" },
    { y: 2016, m: 2, d: 29, result: "day=1,month+1" },
    { y: 2017, m: 2, d: 28, result: "day=1,month+1" },
    { y: 2016, m: 4, d: 30, result: "day=1,month+1" },
    { y: 2016, m: 12, d: 31, result: "day=1,month=1，year+1" },
  ];
  return (
    <TableContainer component={Paper} style={{ maxHeight: 500 }}>
      <Table className="datatable" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>序号</TableCell>
            <TableCell>年</TableCell>
            <TableCell>月</TableCell>
            <TableCell>日</TableCell>
            <TableCell>动作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.y + row.m + row.d}>
              <TableCell> {index + 1}</TableCell>
              <TableCell> {row.y}</TableCell>
              <TableCell>{row.m}</TableCell>
              <TableCell>{row.d}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DecisionTable;
