import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function StrongBoundaryDataTable() {
  const data = [
    { y: 1899, m: 6, d: 15, result: "年份超出范围" },
    { y: 2101, m: 6, d: 15, result: "年份超出范围" },
    { y: 2000, m: 0, d: 15, result: "输入日期不存在" },
    { y: 2000, m: 13, d: 15, result: "输入日期不存在" },
    { y: 2000, m: 6, d: 0, result: "输入日期不存在" },
    { y: 2000, m: 6, d: 32, result: "输入日期不存在" },
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
            <TableCell>结果</TableCell>
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

export default StrongBoundaryDataTable;
