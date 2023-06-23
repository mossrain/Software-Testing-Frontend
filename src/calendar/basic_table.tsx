import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function BasicBoundaryDataTable() {
  const data = [
    { y: 1900, m: 6, d: 15, result: "1900.6.16" },
    { y: 1901, m: 6, d: 15, result: "1901.6.16" },
    { y: 2000, m: 6, d: 15, result: "2000.6.16" },
    { y: 2099, m: 6, d: 15, result: "2099.6.16" },
    { y: 2100, m: 6, d: 15, result: "2100.6.16" },
    { y: 2000, m: 1, d: 15, result: "2000.1.16" },
    { y: 2000, m: 2, d: 15, result: "2000.2.16" },
    { y: 2000, m: 11, d: 15, result: "2000.11.16" },
    { y: 2000, m: 12, d: 15, result: "2000.12.16" },
    { y: 2000, m: 6, d: 1, result: "2000.6.2" },
    { y: 2000, m: 6, d: 2, result: "2000.6.3" },
    { y: 2000, m: 6, d: 15, result: "2000.6.16" },
    { y: 2000, m: 6, d: 27, result: "2000.6.28" },
    { y: 2000, m: 6, d: 28, result: "2000.6.29" },
    { y: 2000, m: 6, d: 29, result: "2000.6.30" },
    { y: 2000, m: 6, d: 30, result: "2000.7.1" },
    { y: 2000, m: 6, d: 31, result: "输入日期不存在" },
    { y: 1999, m: 2, d: 28, result: "1999.3.1" },
    { y: 1999, m: 2, d: 29, result: "输入日期不存在" },
    { y: 1999, m: 2, d: 30, result: "输入日期不存在" },
    { y: 1999, m: 2, d: 31, result: "输入日期不存在" },
    { y: 2000, m: 2, d: 28, result: "2000.2.29" },
    { y: 2000, m: 2, d: 29, result: "2000.3.1" },
    { y: 2000, m: 2, d: 30, result: "输入日期不存在" },
    { y: 2000, m: 2, d: 31, result: "输入日期不存在" },
    { y: 2000, m: 7, d: 30, result: "2000.7.31" },
    { y: 2000, m: 7, d: 31, result: "2000.8.1" },
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
            <TableCell>下一天</TableCell>
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

export default BasicBoundaryDataTable;
